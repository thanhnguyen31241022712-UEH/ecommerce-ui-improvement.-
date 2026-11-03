# E-commerce UI Improvement

Góc Đọc là trang giao diện nhà sách mẫu cho bài tập cá nhân Chương 1 môn Phát triển ứng dụng WEB/TMĐT. Bài tập tập trung cải tiến thẻ sản phẩm, cách hiển thị giá và bố cục trên điện thoại.

## 1. Giới thiệu

- Website mẫu: **Góc Đọc**.
- Khu vực cải tiến: danh sách và thẻ sản phẩm.
- Mục tiêu: giúp người xem nhận biết tên sách, giá bán, giá gốc và mức tiết kiệm; đọc thêm thông tin bằng chuột hoặc bàn phím.
- Họ tên, MSSV, lớp: sinh viên bổ sung trước khi nộp.

## 2. Website tham khảo

- Tên: **FAHASA**.
- URL: https://www.fahasa.com/
- Khảo sát ngày **18/10/2026**, trong phiên khách, không đăng nhập.
- Khu vực: trang chủ, danh mục sách tiếng Việt, chi tiết sản phẩm, tìm kiếm và giỏ hàng.
- Kết quả: [SURVEY.md](SURVEY.md). Ảnh minh chứng nằm trong [evidence/](evidence/).
- Nhận xét về trải nghiệm là đánh giá thiết kế của bài tập, chưa phải kết luận từ nghiên cứu người dùng.

## 3. Chức năng

- Hiển thị 4 sản phẩm mẫu, mỗi sản phẩm có hình, tên, giá và nút thao tác.
- Hiển thị riêng giá bán, giá gốc gạch ngang, phần trăm giảm và số tiền tiết kiệm.
- Nút **Xem thông tin** mở/đóng nội dung bằng phần tử HTML `details` và `summary`.
- Liên kết điều hướng đến các phần trong cùng trang.
- Bố cục 4 cột trên màn hình lớn, 2 cột ở màn hình vừa và 1 cột ở điện thoại nhỏ.
- Có mô tả ảnh, nhãn thao tác riêng cho từng sách, trạng thái focus và liên kết bỏ qua điều hướng.

Trang dùng dữ liệu sách giả định phục vụ bài tập; không nhận đơn hàng. Không có giỏ hàng động, đăng nhập hay thanh toán. Những chức năng đó nằm ngoài phạm vi HTML/CSS của bài này.

## 4. Công nghệ

- HTML5.
- CSS3: Grid, Flexbox, biến CSS và media query.
- SVG tự tạo trong dự án.
- Không JavaScript, backend, cơ sở dữ liệu hay thư viện giao diện.

## 5. Cách chạy

1. Giải nén và mở thư mục `ecommerce-ui-improvement` trong Visual Studio Code bằng **File > Open Folder**.
2. Mở `index.html` bằng trình duyệt. Có thể nhấp đúp tệp trong File Explorer; không bắt buộc cài tiện ích.
3. Nếu đã có Live Server trong VS Code, có thể dùng **Open with Live Server**.
4. Dùng Chrome DevTools kiểm tra các chiều rộng 1440, 768, 390 và 320 px.

Chi tiết: [HUONG_DAN_VSCODE_VA_GITHUB.md](HUONG_DAN_VSCODE_VA_GITHUB.md).

## 6. Cải tiến đã thực hiện

| Nhu cầu thiết kế | Cách xử lý trong trang mẫu | Lý do |
| --- | --- | --- |
| Tách các loại giá | Giá bán lớn và đậm; giá gốc dùng `del`; nhãn ghi rõ “Giảm” | Giảm khả năng đọc nhầm giá |
| So sánh lợi ích giảm giá | Thêm “Tiết kiệm ... ₫” | Người xem không cần tự tính chênh lệch |
| Đọc trên điện thoại | Một cột ở chiều rộng ≤480 px, nút cao tối thiểu 46 px | Dành đủ chỗ cho tên sách và thao tác |
| Xem thêm nội dung | Dùng `details/summary` | Có thao tác thực tế trong phạm vi HTML/CSS |
| Nội dung và hình ảnh độc lập | Sách giả định và SVG tự tạo | Không sao chép mã nguồn hoặc bìa sách FAHASA |

Không khẳng định FAHASA thiếu toàn bộ các đặc điểm trên. Trang mẫu chọn và đơn giản hóa một số thông tin từ hành trình khảo sát, rồi bổ sung cách trình bày để thử nghiệm.

## 7. Hỗ trợ từ AI

ChatGPT trong Codex hỗ trợ đọc đề, quan sát website, lập bảng khảo sát, đề xuất bố cục, tạo mã nguồn, giải thích và kiểm tra giao diện. Nhật ký: [AI_USAGE.md](AI_USAGE.md).

Trợ lý đã kiểm tra mẫu bằng Chrome. Sinh viên cần tự chạy lại, tự phát hiện và chỉnh ít nhất một điểm, rồi ghi trung thực phần mình thực hiện trong [KIEM_TRA.md](KIEM_TRA.md). Không dùng kết quả kiểm tra của trợ lý để nhận là mình đã thực hiện.

## 8. Cấu trúc

```text
ecommerce-ui-improvement/
├── index.html
├── css/style.css
├── images/                 # Hình SVG tự tạo
├── evidence/               # Ảnh khảo sát và kiểm tra giao diện
├── README.md
├── SURVEY.md
├── AI_USAGE.md
├── KIEM_TRA.md
├── BAO_CAO.md
└── HUONG_DAN_VSCODE_VA_GITHUB.md
```

Báo cáo: [bản PDF](Bao_cao_Bai_tap_ca_nhan_Chuong_1.pdf) và [bản Markdown có thể chỉnh trong VS Code](BAO_CAO.md). Sau khi chỉnh nội dung báo cáo Markdown, cần cập nhật bản PDF tương ứng nếu dùng để nộp.

## 9. GitHub

Mã nguồn đã sẵn sàng để tải lên repository **Public**. Chưa có repository hay đường dẫn GitHub Pages thực tế vì sinh viên sẽ bổ sung tài khoản sau. Làm theo hướng dẫn kèm theo, rồi thêm hai URL thực tế vào đây trước khi nộp. GitHub Pages là phần tùy chọn trong đề; repository Public là yêu cầu bắt buộc.
