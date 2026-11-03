# AI Usage Log - Buổi 2

## 1. Công cụ AI

ChatGPT trong Codex. Ngày chuẩn bị bản cập nhật: 02/11/2026. Không tự gán tên mô hình.

Nhật ký cũ được lưu tại [docs/buoi1/AI_USAGE.md](docs/buoi1/AI_USAGE.md).

## 2. Mục đích sử dụng

Đọc đề Buổi 2, rà soát HTML/CSS cũ, giải thích semantic HTML, CSS ngoài, selector, Box Model, Flexbox, Grid, hover/focus; chuẩn bị bản cập nhật và tài liệu; kiểm tra bằng Chrome.

## 3. Yêu cầu thực tế trong phiên

Người học lần lượt gửi nội dung Bước 1, Bước 2, Bước 3 của đề và nhờ trợ lý hỗ trợ hoàn thành. Yêu cầu chuyển sang chuẩn bị toàn bộ:

> thôi bạn làm hết đi theo yêu cầu của thầy rồi đưa hướng dẫn tôi update

Người học trước đó yêu cầu làm từng phần và nhận hướng dẫn sửa HTML/CSS. Ở thời điểm sao chép bản nguồn, tệp HTML trên Desktop đã có `ul.book-specs` ở sách đầu tiên. Đây là thao tác theo hướng dẫn AI, không tự coi là thay đổi độc lập do người học phát hiện.

[PROMPTS_BUOI2.md](PROMPTS_BUOI2.md) chứa 9 mẫu tham khảo theo đề. Không ghi nhận cả 9 mẫu là các prompt người học đã tự nhập nguyên văn.

## 4. Kết quả trợ lý tạo

- Kế thừa mã và hình ảnh của Góc Đọc; không tạo website khác.
- Mở rộng cấu trúc quy cách `ul/li` cho ba sách còn lại và định dạng lại HTML bốn thẻ.
- Giới hạn selector tên sách; điều chỉnh padding, danh sách quy cách, cỡ chữ ghi chú, khoảng cách nhóm giá và trạng thái nút.
- Giữ Grid, dữ liệu giá, điều hướng nội trang, ảnh và cơ chế `details/summary`.
- Soạn báo cáo theo mục 1–15, câu trả lời kiến thức, hướng dẫn cập nhật, mẫu ghi nhận tự sửa.

## 5. Kiểm tra và điều chỉnh

Trợ lý kiểm tra bằng Chrome ở các chiều rộng 1366, 768, 390 và 320 px. Bốn ảnh sách cùng hình giới thiệu tải được; đủ bốn thẻ; không phát hiện tràn ngang tại các chiều rộng đã thử. Cả bốn summary đều đổi trạng thái khi nhấn Enter và trở về trạng thái cũ khi nhấn lần nữa. Điều hướng Tab có focus-visible và viền màu.

Ghi chú cuối ở 390 px được đối chiếu computed style: từ 11 px lên 13 px. Ở màn hình lớn sau cập nhật là 12 px. Padding nội dung sau cập nhật là 22 px.

Hover có quy tắc đổi nền/viền và transition. Quan sát tự động trạng thái hover chưa ổn định giữa các lần chụp, nên không khẳng định đã đo hoàn chỉnh hiệu ứng chuyển tiếp bằng mắt. Sinh viên kiểm tra lại bằng chuột. Chi tiết kết quả và giới hạn nằm ở [KIEM_TRA.md](KIEM_TRA.md).

## 6. Phần sinh viên tự thực hiện

Chưa có kết quả tự kiểm tra và thay đổi độc lập cho bản cập nhật này. Ghi vấn đề, cách sửa, ảnh trước/sau, ngày và kết quả vào [THUC_HANH_CUA_TOI.md](THUC_HANH_CUA_TOI.md). Phải nêu rõ phần AI gợi ý và phần tự quan sát/thực hiện.

## 7. Phần cần hiểu và giải thích

`article` là đơn vị nội dung sản phẩm; `ul/li` tổ chức quy cách; `alt` mô tả ảnh; `a` điều hướng; `details/summary` mở nội dung. CSS ngoài tách trình bày; selector chọn phần tử; padding nằm trong viền, margin nằm ngoài; border-box tính padding và border vào kích thước width/height khai báo. Flexbox căn nhóm giá theo một trục chính, Grid tổ chức danh sách theo hàng và cột; media query đổi số cột. Các giá được ghi sẵn, CSS không tự tính giảm giá. Hover khác focus-visible.

Danh sách trên là nội dung ôn tập, không tự xác nhận sinh viên đã hiểu toàn bộ.
