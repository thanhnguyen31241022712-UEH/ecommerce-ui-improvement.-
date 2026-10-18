# Kiểm tra và điều chỉnh

## 1. Kiểm tra do trợ lý thực hiện

Ngày 18/10/2026, Chrome trên máy tính. Các kích thước là chiều rộng viewport, không phải kiểm tra trên điện thoại vật lý.

| Kiểm tra | Kết quả |
| --- | --- |
| 1440 px | 4 cột sản phẩm |
| 768 px | 2 cột sản phẩm |
| 390 px | 1 cột sản phẩm |
| 320 px | 1 cột sản phẩm |
| Ảnh sản phẩm và ảnh giới thiệu | Tải được ở các kích thước đã thử |
| Tràn ngang toàn trang | Không phát hiện ở các kích thước đã thử |
| Mở/đóng thông tin bằng Enter | Thử đủ 4 sản phẩm, mở và đóng được |
| Nút thông tin | Cao 44 px ở kích thước vừa; 46 px ở điện thoại nhỏ |
| Liên kết Tủ sách | Điều hướng tới khu vực sản phẩm |

Ảnh: `evidence/07-giao-dien-may-tinh.png`, `08-giao-dien-may-tinh-bang.png`, `09-giao-dien-dien-thoai.png`, `10-thong-tin-san-pham.png`. Số liệu đo: `evidence/kiem-tra-giao-dien.json`.

Kết quả chỉ áp dụng cho bản mã nguồn được bàn giao. Chưa kiểm tra trên Safari, Firefox, điện thoại vật lý hoặc sau khi triển khai GitHub Pages.

## 2. Sinh viên tự chạy lại

- [ ] Mở đúng thư mục trong VS Code và mở `index.html` trên Chrome.
- [ ] Kiểm tra lại 4 kích thước ở trên.
- [ ] Xem lại FAHASA và đối chiếu đủ 5 dòng khảo sát.
- [ ] Xác nhận các ảnh hiển thị và giá không xuống dòng bất hợp lý.
- [ ] Dùng Tab để đến từng nút thông tin; dùng Enter hoặc Space để mở/đóng.
- [ ] Tự phát hiện và chỉnh ít nhất một điểm, rồi chụp ảnh trước và sau.
- [ ] Giải thích được đoạn HTML/CSS đã sửa.
- [ ] Bổ sung thông tin cá nhân, nhật ký AI và đường dẫn repository.
- [ ] Mở URL repository bằng cửa sổ không đăng nhập để kiểm tra Public.

## 3. Nhật ký chỉnh sửa của sinh viên

Chỉ điền sau khi đã thực hiện. Không ghi các thay đổi của trợ lý thành thay đổi của mình.

- Ngày thực hiện:
- Vấn đề bản thân phát hiện:
- Ảnh hoặc tình huống trước khi sửa:
- Tệp và đoạn mã đã thay đổi:
- Vì sao chọn thay đổi này:
- Vai trò của thuộc tính HTML/CSS vừa sửa:
- Kết quả sau khi sửa và kích thước đã thử:
- Tên commit thể hiện thay đổi:

Nếu chưa tìm được điểm cần sửa, có thể kiểm tra độ dài tên sách, cỡ chữ hoặc khoảng cách nút trên màn hình nhỏ. Đây là gợi ý tìm vấn đề; cần tự quan sát và chọn thay đổi phù hợp.
