# E-commerce UI Improvement - Góc Đọc

## 1. Giới thiệu

Bài tập cá nhân Buổi 2 tiếp tục mã nguồn HTML/CSS từ Buổi 1, tập trung vào danh sách và thẻ sách. Sinh viên: **Nguyễn Phan Tân Thành**, MSSV **31241022712**. Lớp: **chưa cung cấp**.

## 2. Website tham khảo và phạm vi

- FAHASA: https://www.fahasa.com/.
- Kết quả khảo sát Buổi 1: [SURVEY.md](SURVEY.md).
- Góc Đọc dùng bốn sách và hình SVG minh họa. Các số liệu giá được ghi sẵn, không phải thông tin bán hàng thực tế.
- Buổi 2 không khảo sát lại hay kết luận thêm về FAHASA.

## 3. HTML5/CSS3 đã thực hành

- `header`, `nav`, `main`, `section`, `article`, `footer`; thứ bậc `h1` → `h2` → `h3`.
- `img` có `alt`, liên kết nội trang, `ul/li` cho quy cách của cả bốn sách.
- CSS ngoài; element selector `body`, class selector `.product-body`, descendant selector `.book-specs li`.
- Box Model: nội dung thẻ có `padding: 22px`, thẻ có viền và bo góc; danh sách quy cách có margin/padding riêng; `box-sizing: border-box`.
- Flexbox tại `.price-block`: `flex-wrap`, `justify-content: flex-start`, `align-items: baseline`, `gap: 6px 12px`.
- Grid kế thừa: trên 1050 px có 4 cột; trên 480 đến 1050 px có 2 cột; không quá 480 px có 1 cột.
- Hover, transition màu nền/viền và `:focus-visible` cho `summary`; giữ chế độ giảm chuyển động.

## 4. Cách chạy

Mở `index.html` bằng trình duyệt. Có thể dùng Live Server nếu đã cài. Khi sửa, lưu tệp rồi tải lại trang. Không cần cài thư viện, backend hoặc cơ sở dữ liệu.

## 5. Những thay đổi Buổi 2

1. Định dạng lại bốn thẻ HTML, giữ tên, hình, giá và các ID cũ.
2. Giữ danh sách quy cách đã có ở sách đầu tiên; áp dụng tương tự cho ba sách còn lại.
3. Dùng `.product-card h3` để giới hạn định dạng tên sách trong thẻ.
4. Tăng khoảng đệm nội dung lên 22 px; định dạng danh sách quy cách.
5. Nội dung mở rộng dùng cỡ chữ 14 px. Ghi chú cuối dùng 12 px, tăng lên 13 px ở màn hình không quá 480 px (bản trước là 11 px).
6. Bổ sung transition màu nền/viền và focus riêng cho nút thông tin.

Ảnh và dữ liệu kiểm tra: [evidence/buoi2](evidence/buoi2). Nguồn trước thay đổi được giữ trong [docs/buoi2](docs/buoi2).

## 6. AI và kiểm tra

Trợ lý AI hỗ trợ sửa mã, viết tài liệu và kiểm tra bằng Chrome ở 1366, 768, 390 và 320 px. Đây là kết quả của trợ lý, chưa phải xác nhận sinh viên đã tự kiểm tra. Xem [KIEM_TRA.md](KIEM_TRA.md), [AI_USAGE.md](AI_USAGE.md) và [báo cáo](BAO_CAO_BUOI2.md).

**Còn phải thực hiện trước khi nộp:** tự chạy lại và tự chọn, sửa một vấn đề nhỏ, lưu ảnh và ghi kết quả vào [THUC_HANH_CUA_TOI.md](THUC_HANH_CUA_TOI.md). Không nhận các thay đổi AI thực hiện là thay đổi độc lập của sinh viên.

## 7. Đường dẫn

- [Repository](https://github.com/thanhnguyen31241022712-UEH/ecommerce-ui-improvement.-)
- [GitHub Pages](https://thanhnguyen31241022712-ueh.github.io/ecommerce-ui-improvement.-/)

Các đường dẫn trên lấy từ bài Buổi 1. Bản Buổi 2 trong gói này **chưa được push**. Sau khi cập nhật, kiểm tra lại repository và Pages.

## 8. Tài liệu

- [Báo cáo Buổi 2](BAO_CAO_BUOI2.md), kèm PDF trong thư mục gốc.
- [7 câu hỏi kiến thức và sửa mã trực tiếp](CAU_HOI_BUOI2.md).
- [Hướng dẫn cập nhật](HUONG_DAN_CAP_NHAT_BUOI2.md).
- [Các prompt mẫu](PROMPTS_BUOI2.md).
- [Tài liệu Buổi 1 được giữ lại](BAO_CAO.md). Các bản README/AI_USAGE/KIEM_TRA cũ nằm ở `docs/buoi1/`.
