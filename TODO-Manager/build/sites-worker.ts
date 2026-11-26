import handler from "vinext/server/fetch-handler";
import { runWithConnectorBinding } from "../lib/connector-context";
import type { ConnectorBinding } from "../lib/connector-contract.mjs";

export default {
  async fetch(request: Request, env: Cloudflare.Env, ctx: ExecutionContext<{ CONNECTORS?: ConnectorBinding }>) {
    const cookies = request.headers.get("cookie") || "";
    const existing = cookies.match(/(?:^|;\s*)todo_session=([a-f0-9]{64})(?:;|$)/)?.[1];
    const session = existing || Array.from(crypto.getRandomValues(new Uint8Array(32)), b => b.toString(16).padStart(2, "0")).join("");
    const headers = new Headers(request.headers);
    headers.set("oai-authenticated-user-id", `todo-${session}`);
    headers.set("oai-authenticated-user-email", "visitor@todo.local");
    request = new Request(request, { headers });
    let binding = ctx.props?.CONNECTORS;
    // Local preview emulates the same request-scoped capability. This branch and
    // the auxiliary service binding are absent from production builds.
    if (import.meta.env.DEV && !binding && env.CONNECTORS) {
      const preview = env.CONNECTORS;
      const expiresAt = Date.now() + 60_000;
      binding = {
        async getContext() {
          if (Date.now() >= expiresAt) return { status: "request_context_expired" };
          return preview.getContext?.() ?? { status: "binding_unavailable" };
        },
        async invoke(connectorId, actionName, args) {
          if (Date.now() >= expiresAt) {
            return { status: "request_context_expired", message: "This request has expired. Please try again." };
          }
          return preview.invoke(connectorId, actionName, args);
        },
      };
    }
    const result = await runWithConnectorBinding(binding, () => handler.fetch(request, env, ctx));
    if (existing) return result;
    const response = new Response(result.body, result);
    response.headers.append("Set-Cookie", `todo_session=${session}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=31536000`);
    return response;
  },
};
