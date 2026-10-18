# Hướng dẫn làm bài trong Visual Studio Code

## 1. Mở và chạy

1. Giải nén bộ bài tập.
2. Mở VS Code, chọn **File > Open Folder**, chọn thư mục `ecommerce-ui-improvement` có `index.html` bên trong.
3. Trong File Explorer của Windows, nhấp đúp `index.html` để mở bằng Chrome. Hoặc dùng Live Server nếu đã cài.
4. Không cần chạy `npm install`, không cần backend và không cần tạo cơ sở dữ liệu.

## 2. Những tệp nên đọc trước

- `README.md`: giới thiệu và cấu trúc bài.
- `SURVEY.md`: bảng khảo sát 5 khu vực và ảnh minh chứng.
- `index.html`: nội dung trang, 4 thẻ sách và giá.
- `css/style.css`: có chú thích chia từng phần bố cục.
- `AI_USAGE.md`: nhật ký AI và phần sinh viên cần cập nhật.
- `KIEM_TRA.md`: kết quả trợ lý kiểm tra và chỗ ghi phần tự chỉnh sửa.
- `BAO_CAO.md`: báo cáo có thể chỉnh trong VS Code; dùng **Ctrl+Shift+V** để xem Markdown Preview.

## 3. Kiểm tra trên máy tính và điện thoại

Mở Chrome DevTools bằng F12, bật thanh công cụ thiết bị bằng Ctrl+Shift+M và thử chiều rộng 1440, 768, 390, 320 px. Quan sát tên, ảnh, giá và nút thông tin; kiểm tra xem có phải kéo ngang trang hay không.

Sau khi sửa mã trong VS Code, lưu bằng Ctrl+S rồi tải lại trình duyệt bằng Ctrl+R. Nếu mở bằng đường dẫn tệp, CSS và SVG vẫn hoạt động vì dùng đường dẫn tương đối.

## 4. Bổ sung thông tin

Điền họ tên, MSSV và lớp ở `BAO_CAO.md`, `README.md`. Ghi đúng thay đổi do mình thực hiện vào `KIEM_TRA.md` và `AI_USAGE.md`. Cập nhật bản PDF nếu dùng PDF để nộp sau khi thay đổi báo cáo.

## 5. Đưa lên GitHub bằng trình duyệt

Đây là cách đơn giản nếu chưa quen Git:

1. Đăng nhập tài khoản của mình tại https://github.com/.
2. Tạo repository tên `ecommerce-ui-improvement`, chọn **Public**.
3. Sau khi tạo, dùng phần thêm/tải tệp của repository để tải **nội dung bên trong** thư mục dự án lên. Giữ nguyên các thư mục `css`, `images`, `evidence`.
4. Đảm bảo `index.html` và `README.md` nằm ngay tại thư mục gốc repository, không bị lồng trong một thư mục cùng tên nữa.
5. Lưu thay đổi bằng một commit có tên rõ ràng, ví dụ `Add bookstore product card improvement`.
6. Mở repository và kiểm tra đầy đủ tệp, README, hình ảnh và trạng thái Public.

Không tải nguyên tệp ZIP thay cho mã nguồn. Không đưa file đề gốc, mật khẩu hoặc thông tin tài khoản vào repository.

## 6. Đưa lên GitHub từ VS Code bằng Git

Chỉ chạy các lệnh sau trong thư mục bài tập mới, chưa có kho Git. Tạo repository Public trống trên GitHub trước; bỏ chọn tạo sẵn README để tránh khác lịch sử.

```powershell
git init
git add .
git commit -m "Add bookstore product card improvement"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/ecommerce-ui-improvement.git
git push -u origin main
```

Thay `TEN_TAI_KHOAN` bằng tên GitHub thực tế trước khi chạy. Nếu Git cần tên và email commit, khai báo cho **riêng dự án** bằng thông tin của mình:

```powershell
git config user.name "Ten cua ban"
git config user.email "Email GitHub cua ban"
```

Sau đó chạy lại lệnh commit. Hoàn tất đăng nhập qua luồng xác thực GitHub được máy cung cấp. Khi sửa bài, dùng tên commit mô tả đúng nội dung:

```powershell
git add .
git commit -m "Improve product card spacing on mobile"
git push
```

## 7. Bật GitHub Pages nếu muốn

Theo hướng dẫn trong đề: mở repository, vào **Settings > Pages**, chọn triển khai từ nhánh, chọn `main` và thư mục gốc `/`, rồi lưu. Chờ GitHub triển khai và mở URL được GitHub hiển thị để kiểm tra ảnh, CSS và liên kết.

Tài liệu chính thức: https://docs.github.com/en/pages/quickstart.

- URL repository để xem mã nguồn: sinh viên bổ sung URL thật.
- URL GitHub Pages để xem giao diện: sinh viên bổ sung sau khi triển khai nếu sử dụng.

Không tự ghi một URL giả định thành URL đã hoạt động. Phần đăng GitHub chưa được thực hiện trong bộ bài này vì sinh viên bổ sung tài khoản sau.

## 8. Danh sách trước khi nộp

1. Có bảng khảo sát ít nhất 5 dòng và phân biệt quan sát với đề xuất.
2. Trang HTML/CSS chạy được, 4 sách có ảnh, tên, giá và nút thao tác.
3. Có README và AI_USAGE theo các mục của đề.
4. Có bằng chứng tự chạy và tự chỉnh ít nhất một điểm, giải thích được mã.
5. Có URL repository Public và đủ mã nguồn trên GitHub.
6. Bổ sung đúng thông tin cá nhân vào báo cáo.
