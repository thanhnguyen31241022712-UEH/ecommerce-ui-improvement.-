# AI Usage Log

## 1. Công cụ AI

ChatGPT trong Codex, phiên hỗ trợ ngày 18/10/2026. Không ghi tên mô hình cụ thể vì phiên làm việc không cung cấp thông tin xác minh tên mô hình cho bài nộp.

## 2. Mục đích sử dụng

Đọc file hướng dẫn; chọn website tham khảo; hỗ trợ quan sát giao diện; phân biệt quan sát với đề xuất; lập bảng khảo sát; đề xuất và tạo trang HTML/CSS; giải thích mã; kiểm tra hiển thị bằng Chrome; soạn tài liệu.

## 3. Prompt đã sử dụng

Các yêu cầu thực tế do người học gửi trong phiên:

> trên là bài tập cá nhân hãy giúp tôi hoàn thành cho phù hợp theo file hướng dẫn

> chọn giúp tôi website đi tôi làm trên visual studio code và các thông tin sẽ bổ sung sau

File được cung cấp: `BaiTap_CaNhan_Chuong1.pdf` gồm 11 trang. Trợ lý đọc yêu cầu rồi xây dựng bài theo phạm vi HTML/CSS. Không có phiên sử dụng công cụ AI thứ hai được ghi nhận.

### Prompt gợi ý để sinh viên dùng tiếp

Các prompt sau **là mẫu chuẩn bị cho lần sử dụng tiếp theo**, không ghi nhận là người học đã tự nhập trong phiên này. Sau khi dùng, lưu câu trả lời và kết quả đối chiếu thực tế vào nhật ký.

**A. Đối chiếu khảo sát**

```text
Bạn hỗ trợ phân tích nghiệp vụ và trải nghiệm website thương mại điện tử.
Tôi khảo sát FAHASA tại https://www.fahasa.com/.
Dựa trên ảnh và ghi chép tôi cung cấp, lập bảng cho trang chủ, danh mục,
chi tiết sản phẩm, tìm kiếm và giỏ hàng. Với mỗi khu vực, nêu mục đích,
thành phần giao diện, điểm thuận tiện, một vấn đề có thể phát sinh
và một đề xuất cải tiến. Phân biệt quan sát có bằng chứng với suy luận.
Không khẳng định các tính năng chưa kiểm tra.
```

**B. Hiểu và chọn phương án**

```text
Tôi cải tiến thẻ sách và cách hiển thị giá bằng HTML5/CSS3 cho người mua
trực tuyến tại Việt Nam. Hãy giải thích bố cục, các phần tử HTML,
cách tổ chức CSS, cách hiển thị trên máy tính/điện thoại và các điểm
cần kiểm tra. Chưa tạo mã nguồn. Giải thích vì sao chọn details/summary
và vì sao không cần JavaScript cho thao tác xem thông tin.
```

**C. Rà soát mã sau khi chỉnh sửa**

```text
Hãy rà soát index.html và css/style.css tôi cung cấp.
Trang cần có ít nhất 4 sách, mỗi sách có hình, tên, giá và nút thao tác;
CSS tách riêng, chạy trực tiếp bằng trình duyệt, không backend.
Chỉ ra lỗi có bằng chứng, giải thích Grid, Flexbox, media query và del.
Không viết lại toàn bộ. Tôi sẽ tự chọn cách sửa và kiểm tra lại.
```

## 4. Kết quả AI đề xuất và tạo

- Chọn FAHASA làm nguồn tham khảo; chọn thẻ sách làm phạm vi cải tiến.
- Tạo mẫu Góc Đọc với 4 sách và hình SVG giả định, không sao chép bìa sách thật.
- Tổ chức HTML theo `header`, `nav`, `main`, `section`, `article`, `footer`.
- Dùng CSS Grid cho thẻ sản phẩm, Flexbox cho các hàng thông tin và media query để đổi số cột.
- Giá bán nổi bật; giá gốc dùng `del`; hiển thị rõ phần trăm và số tiền tiết kiệm.
- Dùng `details/summary` để nút thông tin hoạt động bằng HTML thuần.

## 5. Kiểm tra và điều chỉnh

### Đã thực hiện bởi trợ lý

- Quan sát trực tiếp 5 khu vực FAHASA, lưu ảnh và URL trong `SURVEY.md`.
- Kiểm tra giỏ trống và giỏ có 1 sản phẩm; kiểm chứng tổng tiền phụ thuộc sản phẩm đã chọn. Không coi tổng 0 ₫ khi chưa chọn là lỗi tính tiền.
- Không sử dụng kết luận về sửa lỗi chính tả, tốc độ website, thanh toán hay tăng tỷ lệ chuyển đổi vì chưa có bằng chứng.
- Kiểm tra mẫu bằng Chrome ở chiều rộng 1440, 768, 390 và 320 px; kiểm tra ảnh và thao tác mở/đóng thông tin bằng Enter. Chi tiết ở `KIEM_TRA.md`.

### Sinh viên tự thực hiện trước khi nộp

Chưa ghi nhận kết quả tự kiểm tra hay tự chỉnh sửa của sinh viên. Hãy tự chạy trang, xem lại website tham khảo, bổ sung nhận xét và sửa ít nhất một điểm do mình phát hiện. Ghi ngày, lý do sửa, đoạn mã và kết quả trước/sau vào `KIEM_TRA.md`, rồi cập nhật mục này.

## 6. Phần sinh viên cần hiểu và có thể giải thích

Đây là danh sách để tự đánh giá, chưa phải lời xác nhận sinh viên đã hiểu:

- `article`: một thẻ sản phẩm độc lập; `h3`: tên sách.
- `alt`: mô tả ý nghĩa ảnh cho trường hợp không xem được ảnh.
- `del`: thể hiện giá gốc đã bị thay thế; không có chức năng tính giá.
- `details/summary`: mở hoặc đóng nội dung, không lưu đơn hàng.
- `display: grid` và `grid-template-columns`: chia danh sách thành các cột.
- `display: flex` và `flex-wrap`: căn nhóm giá và cho phép xuống dòng.
- `@media`: thay đổi bố cục theo chiều rộng khung nhìn.
- `:focus-visible`: làm rõ vị trí thao tác bàn phím.
- Các con số giá và tiết kiệm là nội dung tĩnh; khi sửa giá phải sửa các giá trị liên quan.
