# TODO Manager

Ứng dụng quản lý công việc: thêm, sửa, xóa, cập nhật trạng thái, tìm kiếm, lọc, thống kê và đồng hồ tập trung 25 phút.

## Cấu trúc

- `app/`: giao diện và API quản lý công việc.
- `db/schema.ts`: cấu trúc bảng công việc trong cơ sở dữ liệu Cloudflare D1.
- `drizzle/`: các lệnh SQL tạo bảng, trong đó `0001_create_todo_tasks.sql` tạo bảng `tasks`.

## Chạy thử trên máy

Cần Node.js 22 trở lên và các gói phụ thuộc của dự án. Chạy `npm run build`, sau đó áp dụng các migration D1 cục bộ theo hướng dẫn trong dự án gốc và chạy `npm run dev`. Dữ liệu thử nghiệm lưu cục bộ trong `.wrangler/state`.

Ứng dụng sử dụng Cloudflare D1 và cơ chế đăng nhập do nền tảng Sites cung cấp. Mã nguồn trên GitHub không tự chạy backend hoặc database; cần cấu hình và triển khai trên một môi trường hỗ trợ tương ứng. Không đưa dữ liệu cá nhân hoặc khóa truy cập lên repository.
