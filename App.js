import React, { useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import './App.css';

function App() {
  // Dữ liệu sản phẩm trong giỏ hàng
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'RƯỢU LUXURY ALTAIR RED',
      price: 2338000,
      quantity: 1,
      image: 'D:\bán rượu\moi\wine-shop\public\img\ảnh rượu.jpg', // Thay bằng URL hình ảnh thực tế
    },
  ]);

  // Tính tổng tiền
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-top">
          <p>📍 Tầng 6 - Tòa nhà Ladeco - 266 Đội Cấn, ... | ☎️ 1900 6750 | ⏰ 9h - 21h từ thứ 2 đến thứ 7</p>
        </div>
        <div className="header-main">
         

          {/* Navigation Bar */}
          <nav className="main-nav">
            <ul>
              <li><a href="#">Trang Chủ</a></li>
              <li><a href="#">Giới Thiệu</a></li>
              <li><a href="#">Sản Phẩm</a></li>
              <li><a href="#">Tin Tức</a></li>
            </ul>
          </nav>

          {/* User Actions */}
          <div className="user-actions">
            <a href="#">Đăng Ký</a> | <a href="#">Đăng Nhập</a>
            <span className="cart-icon">🛒</span>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        Trang chủ | <span className="current-page">Giỏ hàng</span>
      </div>

      {/* Giỏ hàng */}
      <Cart cartItems={cartItems} totalPrice={totalPrice} setCartItems={setCartItems} />
    </div>
  );
}

export default App;
