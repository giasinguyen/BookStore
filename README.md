Tạo một ứng dụng  quản  lý sách đơn giản bằng ReactJS.
Người dùng có thể: thêm, xoá, tìm kiếm, lọc sách theo thể loại, lưu dữ 
liệu bằng localStorage.  Yêu cầu chức năng  (Mỗi chức năng tương ứng 1 
commit):
1.  Tạo cấu trúc dự án ReactJS (dùng Vite ).
o  Tạo sẵn thư mục  components/
o  Tạo minh  chứng
o  Commit:  init: cấu trúc dự án ReactJS
2.  Tạo giao diện  Hiển thị danh  sách sách mẫu
o  Hiển thị: Tên sách, tác giả, thể loại, năm,  nút "Xoá"
o  Tạo minh  chứng
o  Commit:  feat: hiển thị danh sách   sách mẫu
3.  Thêm  sách mới.
o  Input:  Tên, tác giả, thể loại, năm
o  Nút “Thêm  sách ”
o  Tạo minh  chứng
o  Commit:  feat: thêm  sách mới
4.  Xoá sách.
o  Mỗi dòng có nút "Xoá"
o  Tạo minh  chứng
o  Commit:  feat: xoá sinh viên
5.  Tìm kiếm sách theo tên.
o  Có ô input tìm kiếm
o  Không  phân biệt hoa thường
o  Tạo minh  chứng
o  Commit:  feat: tìm kiếm sách theo tên
6.  Lọc sách theo thể loại.
o  Có dropdown chọn thể loại (Văn học, Khoa học, Công nghệ,  Tâm 
lý...)
o  Lọc sách tương ứng
o  Tạo minh  chứng
o  Commit:  feat: lọc sách theo thể loại  
7.  Hiển thị tổng số sách.
o  Tổng số sách
o  Tạo minh  chứng
o  Commit:  feat: hiển thị tổng  số sách
8.  Lưu danh  sách công việc vào localStorage.
o  Khi thêm/xoá  sách sẽ cập nhật  localStorage
o  Khi load lại trang  vẫn còn danh sách
o  Tạo minh  chứng
o  Commit:  feat: lưu và tải dữ liệu từ localStorage
9.  Tách component  BookItem.jsx
o  Mỗi sách là một component  riêng
o  Truyền  props và xử lý nút xoá/sửa từ đó
o  Tạo minh  chứng
o  Commit:  refactor: tách component  BookItem
10.  Tạo giao diện đẹp hơn bằng CSS hoặc thư viện UI 
(Bootstrap/Tailwind).
o  Không  bắt buộc phải quá đẹp, nhưng  có căn chỉnh bố cục.
o  Tạo minh  chứng
o  Commit:  style: cải thiện giao diện