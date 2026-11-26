CREATE TABLE `tasks` (
  `id` text PRIMARY KEY NOT NULL,
  `user_id` text NOT NULL,
  `title` text NOT NULL,
  `description` text DEFAULT '' NOT NULL,
  `due_date` text,
  `status` text DEFAULT 'todo' NOT NULL,
  `priority` text DEFAULT 'medium' NOT NULL,
  `created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE INDEX `tasks_user_id_idx` ON `tasks` (`user_id`);
