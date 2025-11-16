# 🍕 Fullstack Food Order Website

Một ứng dụng web đặt món ăn fullstack hoàn chỉnh với giao diện người dùng, trang quản trị và API backend. Người dùng có thể duyệt menu, thêm món vào giỏ hàng, đặt hàng và theo dõi đơn hàng. Admin có thể quản lý sản phẩm và đơn hàng.

## 🚀 Công nghệ sử dụng

### Frontend
- **React.js** - Thư viện JavaScript cho xây dựng giao diện người dùng
- **Tailwind CSS** - Framework CSS utility-first cho styling
- **React Router** - Routing cho single-page application
- **Axios** - HTTP client cho API calls
- **Vite** - Build tool và dev server

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework cho Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM cho MongoDB
- **JWT (JSON Web Token)** - Xác thực người dùng
- **Bcrypt** - Mã hóa mật khẩu
- **Multer** - Upload file (hình ảnh sản phẩm)

### Admin Panel
- **React.js** - Giao diện quản trị
- **Tailwind CSS** - Styling
- **React Toastify** - Thông báo

## ✨ Tính năng

### Người dùng (Frontend)
- ✅ **Xác thực người dùng**
  - Đăng ký tài khoản mới
  - Đăng nhập/Đăng xuất
  - JWT authentication
  - Lưu trữ token trong localStorage

- ✅ **Duyệt sản phẩm**
  - Xem danh sách món ăn
  - Tìm kiếm món ăn
  - Xem chi tiết món ăn

- ✅ **Quản lý giỏ hàng**
  - Thêm món vào giỏ hàng
  - Xóa món khỏi giỏ hàng
  - Cập nhật số lượng
  - Tính tổng tiền tự động
  - Đồng bộ giỏ hàng với database (khi đã đăng nhập)

- ✅ **Đặt hàng**
  - Nhập thông tin giao hàng
  - Xem tổng tiền và phí ship
  - Đặt hàng và lưu vào database
  - Xem lịch sử đơn hàng

- ✅ **Theo dõi đơn hàng**
  - Xem trạng thái đơn hàng
  - Xem chi tiết đơn hàng đã đặt

### Quản trị viên (Admin Panel)
- ✅ **Quản lý sản phẩm**
  - Thêm món ăn mới (tên, mô tả, giá, danh mục, hình ảnh)
  - Xem danh sách món ăn
  - Xóa món ăn

- ✅ **Quản lý đơn hàng**
  - Xem tất cả đơn hàng
  - Xem chi tiết đơn hàng (món ăn, địa chỉ giao hàng, thông tin khách hàng)
  - Cập nhật trạng thái đơn hàng (Food Processing, Out for delivery, Delivered)

## 📁 Cấu trúc dự án

```
Fullstack Food Order Website/
├── frontend/          # Ứng dụng React cho người dùng
│   ├── src/
│   │   ├── components/    # Các component tái sử dụng
│   │   ├── pages/         # Các trang chính
│   │   ├── context/       # React Context (StoreContext)
│   │   └── assets/        # Hình ảnh và assets
│   └── package.json
│
├── admin/            # Trang quản trị React
│   ├── src/
│   │   ├── components/    # Navbar, Sidebar
│   │   ├── pages/         # Add, List, Orders
│   │   └── assets/        # Assets cho admin
│   └── package.json
│
└── backend/          # API Server (Node.js + Express)
    ├── config/           # Cấu hình database
    ├── controllers/      # Logic xử lý request
    ├── models/          # Mongoose models
    ├── routes/          # API routes
    ├── middleware/      # Authentication middleware
    ├── uploads/         # Thư mục lưu hình ảnh
    ├── server.js        # Entry point
    └── package.json
```

## 🚀 Chạy ứng dụng

### Terminal 1: Chạy Backend
```bash
cd backend
npm run server
```
Backend sẽ chạy tại: `http://localhost:4000`

### Terminal 2: Chạy Frontend
```bash
cd frontend
npm run dev
```
Frontend sẽ chạy tại: `http://localhost:5173` (hoặc port khác)

### Terminal 3: Chạy Admin Panel
```bash
cd admin
npm run dev
```
Admin Panel sẽ chạy tại: `http://localhost:5174` (hoặc port khác)

## 📡 API Endpoints

### User Authentication
- `POST /api/user/register` - Đăng ký tài khoản mới
- `POST /api/user/login` - Đăng nhập

### Food Management
- `GET /api/food/list` - Lấy danh sách tất cả món ăn
- `POST /api/food/add` - Thêm món ăn mới (Admin)
- `POST /api/food/remove` - Xóa món ăn (Admin)

### Cart Management
- `POST /api/cart/add` - Thêm món vào giỏ hàng
- `POST /api/cart/remove` - Xóa món khỏi giỏ hàng
- `POST /api/cart/get` - Lấy giỏ hàng của user

### Order Management
- `POST /api/order/place` - Đặt hàng
- `POST /api/order/user-orders` - Lấy đơn hàng của user
- `GET /api/order/list` - Lấy tất cả đơn hàng (Admin)
- `POST /api/order/status` - Cập nhật trạng thái đơn hàng (Admin)

### Image Serving
- `GET /images/:filename` - Lấy hình ảnh sản phẩm

## 🔐 Authentication

Ứng dụng sử dụng JWT (JSON Web Token) để xác thực:
- Token được tạo khi user đăng nhập/đăng ký
- Token được lưu trong localStorage
- Token được gửi trong header của các request cần authentication
- Middleware `auth.js` xác thực token và thêm `userId` vào `req.body`

## 📝 Models

### User Model
- `name`: Tên người dùng
- `email`: Email (unique)
- `password`: Mật khẩu (đã hash)
- `cartData`: Object chứa giỏ hàng `{itemId: quantity}`

### Food Model
- `name`: Tên món ăn
- `description`: Mô tả
- `price`: Giá
- `image`: Tên file hình ảnh
- `category`: Danh mục

### Order Model
- `userId`: ID của user đặt hàng
- `items`: Mảng chứa các món đã đặt
- `amount`: Tổng tiền
- `address`: Object chứa địa chỉ giao hàng
- `status`: Trạng thái đơn hàng (default: "Food Processing")
- `date`: Ngày đặt hàng
- `payment`: Trạng thái thanh toán

## 🎨 Tính năng nổi bật

- **Real-time Cart Sync**: Giỏ hàng được đồng bộ với database khi user đăng nhập
- **Responsive Design**: Giao diện tương thích với nhiều kích thước màn hình
- **Image Upload**: Admin có thể upload hình ảnh sản phẩm
- **Order Tracking**: User và Admin có thể theo dõi trạng thái đơn hàng
- **Secure Authentication**: Mật khẩu được hash bằng bcrypt, JWT cho session management

## 🔄 Luồng hoạt động

1. **User đăng ký/đăng nhập** → Nhận JWT token
2. **User duyệt menu** → Xem danh sách món từ database
3. **User thêm vào giỏ** → Cập nhật local state và database (nếu đã đăng nhập)
4. **User đặt hàng** → Tạo order mới, xóa giỏ hàng
5. **Admin quản lý** → Xem đơn hàng, cập nhật trạng thái

## 📦 Dependencies chính

### Backend
- express, mongoose, jsonwebtoken, bcrypt, multer, cors, dotenv

### Frontend
- react, react-router-dom, axios, tailwindcss

### Admin
- react, react-router-dom, axios, tailwindcss, react-toastify


