# Câu hỏi kiến thức Buổi 2

Các câu dưới đây bám vào mã thực tế, dùng để ôn và trình bày lại bằng lời của mình.

## 1. Những phần tử HTML5 nào được dùng, vì sao?

`header` chứa đầu trang; `nav` chứa điều hướng; `main` chứa nội dung chính; `section` chia nhóm giới thiệu, tủ sách và gợi ý; `article` bao quanh mỗi thẻ sách; `footer` chứa thông tin cuối trang. Trong thẻ có `img/alt`, `h3`, các đoạn `p`, `del`, `details/summary` và `ul/li` cho quy cách. Các phần tử được chọn theo ý nghĩa nội dung, không cần chèn đủ mọi loại thẻ vào một khu vực.

## 2. Margin khác padding thế nào? Ví dụ trong bài?

Padding là khoảng đệm giữa nội dung và viền. `.product-body { padding: 22px; }` giúp chữ không sát mép vùng nội dung. Margin là khoảng cách ngoài viền. `.book-specs { margin: 8px 0 12px; }` tạo khoảng cách trên/dưới danh sách. Khoảng cách giữa các thẻ ở bài này dùng `gap`, không cần cộng margin vào từng card. `box-sizing: border-box` tính padding và border vào width/height được khai báo, không tính margin.

## 3. Flexbox dùng ở đâu? justify-content và align-items?

`.price-block` là phần tử cha của giá bán và giá gốc, có `display: flex`. Ở chiều hàng mặc định, `justify-content: flex-start` xếp chúng về đầu trục chính; `align-items: baseline` căn theo đường cơ sở chữ. `flex-wrap: wrap` cho xuống dòng khi thiếu chỗ, `gap: 6px 12px` tạo khoảng cách hàng/cột. `space-between` sẽ đưa các mục về hai đầu khi có khoảng trống, không phải giá trị đang dùng cho nhóm giá.

## 4. Grid khác Flexbox? Vì sao dùng Grid cho danh sách?

Flexbox chủ yếu tổ chức các mục theo một trục tại một thời điểm. Grid tổ chức theo hàng và cột, phù hợp bốn thẻ sản phẩm cần chia cột bằng nhau. Bài dùng Grid cho `.product-grid`, Flexbox cho nhóm giá. Flexbox vẫn có thể xuống nhiều hàng khi wrap, nhưng mỗi dòng được bố trí theo cơ chế flex.

## 5. Nếu xóa display: grid thì sao?

Nếu chỉ bỏ `display: grid` đang áp dụng và không có quy tắc khác thay thế, `.product-grid` trở về dạng block thông thường. Các article có thể xếp dọc theo luồng tài liệu; `grid-template-columns` không còn chia cột. `gap` không tạo khoảng cách cho block thông thường. Cần phân biệt xóa trong tệp với tạm bỏ chọn trong DevTools và kiểm tra quy tắc ghi đè.

## 6. Vì sao cần alt cho ảnh?

Alt cung cấp văn bản thay thế mang ý nghĩa ảnh cho người không xem được ảnh và công nghệ hỗ trợ. Trong bài, mỗi bìa sách có mô tả riêng gồm tên sách và đặc điểm hình minh họa. Không dùng cùng một alt chung cho cả bốn bìa. Ảnh thuần trang trí có thể cần alt rỗng, nhưng bìa sản phẩm ở đây có ý nghĩa.

## 7. Một đề xuất AI đã được kiểm tra hoặc điều chỉnh?

Ví dụ của bản hỗ trợ: AI đề xuất tăng cỡ chữ ghi chú trên điện thoại. Trợ lý đối chiếu computed style trước sửa là 11 px và sau sửa ở 390 px là 13 px. Nguyên nhân là đoạn p cuối có quy tắc trực tiếp, nên chỉ tăng cỡ chữ của phần tử cha chưa thay đổi được đoạn này. Sinh viên cần chạy và đối chiếu lại trước khi trình bày việc kiểm tra đó bằng ngôi “em”. Nếu có điều chỉnh thực tế khác, thay bằng ví dụ của mình.

## Luyện sửa mã trực tiếp

| Yêu cầu của thầy | Vị trí cần tìm | Dự đoán trước khi chạy |
|---|---|---|
| Đổi khoảng cách trong thẻ | `.product-body`, thuộc tính padding | Padding lớn hơn dành thêm khoảng trống quanh chữ |
| Đổi màu giá | `.sale-price`, color | Giá bán đổi màu; biến --orange dùng nhiều nơi nên sửa biến sẽ ảnh hưởng nhiều phần |
| Đổi số cột | `.product-grid`, grid-template-columns và các media query | Ví dụ 3 cột chỉ hiện khi quy tắc đang áp dụng không bị media query ghi đè |
| Đổi khoảng cách menu | `nav`, gap | Các mục thay khoảng cách; chú ý quy tắc riêng ở 700/480 px |
| Sửa alt | `img` của đúng cuốn sách | Văn bản thay thế đổi; không tự làm đổi bìa hiển thị |

Khi được yêu cầu, chỉ đúng selector/thẻ, nói giá trị dự định đổi, dự đoán kết quả, rồi lưu và chạy lại. Luyện trong bản sao hoặc khôi phục sau thử nghiệm.
