Xây dựng cho tôi bộ giao diện của một hệ thống bán các sản phẩm thuộc các gian hàng MMO như Youtube, Facebook, Instagram, Tiktok, ... sử dụng project và base trên theme hiện tại. 
Yêu cầu: Chia theo Layout (Giao diện) để bạn dễ hình dung luồng người dùng.

Phân hệ Public (Public Layout) Dành cho khách vãng lai và người mua tìm kiếm sản phẩm.
Trang chủ (/):

Hiển thị Banner, Danh mục sản phẩm MMO, Sản phẩm nổi bật, Top gian hàng uy tín.

Danh sách sản phẩm / Tìm kiếm (/products):

Bộ lọc (Filter): Theo giá, loại (account, tool, source code), đánh giá.

Search bar kết quả.

Chi tiết sản phẩm (/products/[slug]):

Thông tin chi tiết, giá, demo.

Thông tin người bán (Shop).

Review/Đánh giá của người mua trước.

Nút "Mua ngay" hoặc "Thêm vào giỏ".

Trang chi tiết Gian hàng (/shops/[slug]):

Yêu cầu: "Người mua có thể mua sản phẩm thuộc các gian hàng".

Thông tin Shop (Logo, tên, độ uy tín, ngày tham gia).

Danh sách toàn bộ sản phẩm của Shop đó.

Thanh toán (/checkout):

Chọn phương thức thanh toán (Thường là trừ tiền trong ví hệ thống hoặc cổng thanh toán).

Phân hệ Xác thực (Auth Layout) Giao diện đơn giản (Guest Layout) như chúng ta đã làm.
Đăng nhập (/login): Form username + password.

Đăng ký (/register): Form đăng ký thành viên (mặc định là User/Buyer).

Quên mật khẩu (/forgot-password).

Phân hệ Người mua (User Layout) Dành cho người dùng đã đăng nhập (Buyer).
Dashboard Cá nhân (/user/dashboard): Tổng quan số dư ví, đơn hàng mới mua.

Lịch sử mua hàng (/user/orders):

Danh sách các đơn hàng đã mua.

Chi tiết đơn hàng (Lấy key, lấy file download, xem thông tin account đã mua).

Nạp tiền / Ví tiền (/user/wallet):

Lịch sử giao dịch nạp/rút.

Trang nạp tiền (Bank transfer, Momo, Crypto...).

Cài đặt tài khoản (/user/settings): Đổi mật khẩu, cập nhật profile.

Đăng ký bán hàng (/user/become-seller):

Yêu cầu: "Admin duyệt đăng ký".

Form gửi yêu cầu lên Admin để được cấp quyền mở gian hàng (Seller).

Phân hệ Người bán (Seller Layout) Chỉ truy cập được khi user có quyền Seller (User thuộc nhóm Seller).
Seller Dashboard (/seller/dashboard):

Yêu cầu: "Thống kê doanh thu".

Biểu đồ doanh thu ngày/tháng, số đơn hàng mới, số dư khả dụng.

Quản lý sản phẩm (/seller/products):

Danh sách sản phẩm hiện có.

Trạng thái (Đang bán, Hết hàng, Chờ duyệt).

Thêm/Sửa sản phẩm (/seller/products/create & /seller/products/[id]/edit):

Form nhập tên, mô tả, giá, upload ảnh.

Nhập kho (Input stock: list key, list account, hoặc file).

Cấu hình Gian hàng (/seller/shop-settings):

Yêu cầu: "Quản lý các gian hàng".

Tên shop, Slogan, Ảnh bìa, Thông báo (Announcement).

Quản lý Đơn hàng bán (/seller/orders):

Xem ai đã mua cái gì, thời gian nào.

Xử lý khiếu nại (Refund) nếu sản phẩm lỗi.

Phân hệ Quản trị (Admin Layout) Dành cho Admin và Super Admin.
Admin Dashboard (/admin/dashboard):

Yêu cầu: "Xem thống kê".

Tổng doanh thu toàn sàn (Fee sàn thu được), Tổng user mới, Tổng shop mới.

Quản lý Yêu cầu duyệt Seller (/admin/requests/sellers):

Yêu cầu: "Duyệt đăng ký trở thành người bán".

Danh sách user xin lên Seller -> Nút Approve (Duyệt) / Reject (Từ chối).

Quản lý Gian hàng (/admin/shops):

Yêu cầu: "Quản lý các gian hàng do người bán tạo".

Danh sách tất cả Shop.

Quyền khóa shop (Ban) nếu vi phạm.

Quản lý Người dùng (/admin/users):

Danh sách User (Buyer/Seller).

Reset mật khẩu, Khóa tài khoản.

Lịch sử Giao dịch hệ thống (/admin/transactions):

Yêu cầu: "Xem lịch sử giao dịch".

Xem dòng tiền nạp vào, tiền mua hàng, tiền rút ra.

Phân hệ Super Admin (Admin Layout + Permission Check) Chỉ Super Admin mới thấy các menu này.
Phân quyền hệ thống (/admin/permissions):

Quản lý nhóm quyền (Groups), danh sách quyền (Permissions).

Gán quyền cho nhân viên (Admin thường).

Cấu hình hệ thống (/admin/settings):

Cài đặt SEO, Tên web.

Cài đặt phí sàn (Ví dụ: Seller bán 100k thì sàn thu 5%).

Cấu hình cổng thanh toán tự động.

Tóm tắt Luồng điều hướng (Navigation Flow) Guest vào / xem hàng -> Bấm /products/acc-netflix -> Thấy ưng ý.

Bấm Mua -> Redirect về /login -> Đăng nhập xong quay lại trang thanh toán.

Thanh toán xong -> Redirect về /user/orders để lấy hàng (User acc/pass).

User muốn bán hàng -> Vào /user/become-seller điền form.

Admin vào /admin/requests/sellers thấy yêu cầu -> Bấm "Duyệt".

User (giờ đã là Seller) thấy menu mới "Kênh người bán" -> Vào /seller/products/create đăng sản phẩm.