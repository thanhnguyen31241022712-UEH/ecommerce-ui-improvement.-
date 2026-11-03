# Báo cáo kiểm thử Buổi 2

Ngày: 02/11/2026. Người thực hiện các kiểm tra dưới đây: **trợ lý AI**, trên bản sao được chuẩn bị cho sinh viên. Nhật ký Buổi 1 nằm ở `docs/buoi1/KIEM_TRA.md`.

## 1. Kết quả đã kiểm tra

| Nội dung | Kết quả | Bằng chứng / giới hạn |
|---|---|---|
| HTML mở được | Đạt trong Chrome cục bộ | Trang tải, đúng tên Góc Đọc và đủ 4 thẻ |
| CSS được áp dụng | Đạt | Computed style: Grid, Flexbox và padding 22 px |
| Ảnh hiển thị | Đạt ở 4 kích thước | Các img có complete và naturalWidth > 0 |
| Giá minh họa | Kiểm tra theo dữ liệu tĩnh | 120000→96000;180000→126000;135000→108000;170000→153000; khoản giảm khớp |
| Bố cục 1366 px | Đạt | 4 cột, không tràn ngang |
| Bố cục 768 px | Đạt | 2 cột, không tràn ngang |
| Bố cục 390 px | Đạt | 1 cột, không tràn ngang; ghi chú 13 px |
| Bố cục 320 px | Đạt | 1 cột, không tràn ngang; ảnh tải được |
| 4 nút thông tin bằng Enter | Đạt | Mỗi nút được nhấn hai lần, trạng thái thay đổi rồi trở về |
| Tab và focus-visible | Đạt tại nút đã thử | Phần tử SUMMARY nhận focus, matches(:focus-visible), có viền màu |
| Hover và transition | Cần sinh viên xác nhận bằng chuột | Có quy tắc CSS, đã quan sát :hover ngắn hạn; chưa đo trọn chuyển tiếp |
| Liên kết nội trang | Đạt ở bản cục bộ | Đã bấm ba menu, URL hash khớp ID đích; cần thử lại khi lên Pages |
| Sinh viên tự sửa một vấn đề | Chờ sinh viên | Điền THUC_HANH_CUA_TOI.md và chụp ảnh thật |
| Buổi 2 đã lên GitHub / Pages | Chưa xác nhận | Cần copy bản cập nhật, commit, push, kiểm tra triển khai |

Các kết quả trình duyệt nằm ở `evidence/buoi2/kiem-tra-sau.json`. Không suy rộng kết quả thành bảo đảm ở mọi thiết bị hoặc mọi trình duyệt.

## 2. Vấn đề và cách xử lý do AI hỗ trợ

| Vấn đề | Căn cứ | Cách xử lý |
|---|---|---|
| HTML ba thẻ còn viết dồn dòng; quy cách chưa đồng nhất | Đối chiếu bản trước, sách đầu đã có ul/li | Định dạng cả bốn thẻ và dùng ul/li nhất quán |
| Ghi chú cuối vẫn 11 px trên điện thoại | Computed style ở 390 px trước sửa | Quy tắc riêng cuối tệp: 13 px khi không quá 480 px |
| Nền summary chưa có transition riêng | Rà soát CSS trước sửa | Thêm transition màu nền/viền, giữ chế độ giảm chuyển động |

Không coi đề xuất cải thiện trình bày là lỗi chức năng hoặc kết quả đã được nghiên cứu người dùng.

## 3. Ảnh minh chứng

Ảnh trước/sau được chụp trên các bản sao đúng thời điểm, không tái tạo lỗi giả. Bản trước đã có danh sách quy cách ở sách đầu tiên.

- `01-truoc-1366.jpg`, `02-truoc-390.jpg`.
- `03-sau-1366.jpg`, `04-sau-390.jpg`, `05-sau-768.jpg`.
- `07-focus.jpg`: minh họa viền focus trên nút thông tin. Vị trí focus có thể thay đổi giữa lần đọc DOM và khung hình chụp.

Ảnh `06-hover.jpg` chỉ là ảnh trong quá trình kiểm tra, không dùng để kết luận chuyển tiếp đã được kiểm chứng đầy đủ.
