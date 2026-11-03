# Hướng dẫn cập nhật Buổi 2 vào dự án và GitHub

## 1. Sao lưu bài hiện tại

Đóng các tệp chưa lưu trong VS Code sau khi đã lưu phần muốn giữ. Sao chép thư mục `C:\Users\Admin\Desktop\ecommerce-ui-improvement` thành một thư mục dự phòng, ví dụ `ecommerce-ui-improvement-backup-buoi1`. Bản cập nhật không chứa `.git`, vì phải dùng lịch sử Git của dự án cũ.

## 2. Chép bản mới vào đúng thư mục cũ

1. Giải nén gói Buổi 2 sang nơi riêng. Mở thư mục `ecommerce-ui-improvement` nằm bên trong gói đã giải nén.
2. Chọn các tệp/thư mục **bên trong** thư mục này, sao chép vào `C:\Users\Admin\Desktop\ecommerce-ui-improvement`.
3. Cho phép thay thế các tệp trùng tên sau khi đã sao lưu. Thư mục `css/`, `images/`, `docs/`, `evidence/` cần được gộp đúng cấp.
4. Đảm bảo có `index.html` trực tiếp trong thư mục Desktop; tránh tạo lồng thêm `ecommerce-ui-improvement/ecommerce-ui-improvement/`.
5. Giữ nguyên `.git` của dự án trên Desktop. Không xóa, không thay bằng thư mục Git từ nơi khác.

Nếu đã tự chỉnh sau khi nhận gói, so sánh và giữ những thay đổi mình muốn dùng trước khi thay tệp. Các tài liệu Buổi 1 vẫn được giữ; README/AI_USAGE/KIEM_TRA cũ có bản lưu trong `docs/buoi1/`.

## 3. Kiểm tra trước khi đưa lên GitHub

Mở dự án Desktop bằng VS Code. Mở index.html trong Chrome và thử:

- 1366 px: 4 cột; 768 px: 2 cột; 390 px: 1 cột.
- 4 nút Xem thông tin; dùng Tab/Enter, rê chuột kiểm tra hover.
- Ảnh và menu nội trang; giá tĩnh; quy cách dạng danh sách.
- Ghi chú cuối ở 390 px có cỡ 13 px. Có thể nhấp phải dòng chữ → Inspect → Computed → font-size.

Hoàn thành `THUC_HANH_CUA_TOI.md`, bổ sung hai ảnh tự sửa, cập nhật README/AI_USAGE/KIEM_TRA và báo cáo. Điền lớp học nếu biết. Đọc `CAU_HOI_BUOI2.md`, tự nói lại và thử sửa mã theo yêu cầu thầy.

## 4. Kiểm tra Git trong Terminal

Mở Terminal ở **thư mục Desktop có .git**, không phải thư mục vừa giải nén.

```powershell
git --version
git status
git branch --show-current
git remote -v
```

Nhánh mong đợi của bài là `main`. Remote origin phải trỏ về repository của mình, có tên `ecommerce-ui-improvement.-` (giữ đúng dấu chấm và gạch nối ở cuối). Nếu remote/nhánh khác dự kiến, dừng để kiểm tra, đừng chạy init hoặc thêm origin lặp lại.

Nếu Terminal chưa nhận git nhưng Git đã được cài bằng runtime dùng trước đây, có thể dùng tạm cho phiên hiện tại:

```powershell
$env:Path = "C:\Users\Admin\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd;" + $env:Path
git --version
```

Nếu đường dẫn này không tồn tại, dùng Git đang cài trên máy hoặc mở lại VS Code sau khi cài Git. Không cần làm lại repository đã có.

## 5. Xem thay đổi và cập nhật

```powershell
git diff --stat
git diff -- index.html css/style.css
git add .
git status
git diff --cached --stat
git commit -m "Practice HTML5 semantics and CSS for session 2"
git push
```

Xem danh sách trước khi commit, chỉ đưa tài liệu bài tập và ảnh minh chứng lên. Khi xác thực, dùng cách đăng nhập GitHub hỗ trợ. Không đưa token hoặc mật khẩu vào tệp. Nếu push báo remote có thay đổi mới, không force push. Chạy `git fetch origin`, xem `git status` và lịch sử trước khi quyết định đồng bộ; có thể gửi thông báo lỗi để được hướng dẫn.

## 6. Xác nhận sau khi push

Mở [repository](https://github.com/thanhnguyen31241022712-UEH/ecommerce-ui-improvement.-). Kiểm tra commit mới, README Buổi 2 và các ảnh trong evidence/buoi2. Mở Actions kiểm tra tiến trình Pages. Khi triển khai hoàn tất, mở [website](https://thanhnguyen31241022712-ueh.github.io/ecommerce-ui-improvement.-/), tải lại mạnh bằng Ctrl+Shift+R và thử lại giao diện.

Pages đã được cấu hình từ Buổi 1 với main và /(root), nên thường chỉ cần push vào đúng nhánh. Chỉ chỉnh Settings → Pages nếu cấu hình hiện tại đã khác.

## 7. Nộp bài

Nộp đường dẫn repository, đường dẫn Pages nếu thầy yêu cầu, báo cáo Buổi 2 và ảnh minh chứng theo cách thầy quy định. Nếu sửa báo cáo Markdown, cập nhật lại PDF trước khi nộp để hai bản thống nhất. Gói PDF ban đầu ghi rõ phần tự sửa còn chờ sinh viên; sau khi làm cần cập nhật phần đó bằng kết quả thật.

Một cách xuất lại sau khi cập nhật và push: mở tệp BAO_CAO_BUOI2.md trên GitHub, xem bản hiển thị Markdown rồi dùng chức năng in của trình duyệt và chọn lưu PDF. Kiểm tra bản in, bổ sung ảnh minh chứng từ evidence/buoi2 nếu chúng chưa được nhúng trong bản in. Cũng có thể sao chép nội dung sang Word, chèn ảnh, chỉnh bố cục rồi xuất PDF. Giữ bản PDF được nộp thống nhất với kết quả thực tế đã bổ sung.
