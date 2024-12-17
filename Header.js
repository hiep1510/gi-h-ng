import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiUser, FiLock, FiSearch, FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import "../css/Header.css";

function Header() {
  return (
    <div>
      {/* Top Information Bar */}
      <div className="header-top">
        <div className="header-top-left">
          <span>
            <FiMapPin /> Tầng 6 - Tòa nhà Ladeco - 266 Đội Cấn, Ba Đình, Hà Nội
          </span>
        </div>
        <div className="header-top-right">
          <span>
            <FiPhone /> 1900 6750
          </span>
          <span>
            <FiClock /> 9h - 21h từ thứ 2 đến thứ 7
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        {/* Left Navigation */}
        <div className="nav-left">
          <a href="/">TRANG CHỦ</a>
          <a href="/">GIỚI THIỆU</a>
        </div>

        {/* Image Between Giới Thiệu and Sản Phẩm */}
        <div className="header-image">
          <img src="/img/logo.jpg" alt="Wine Shop Logo" className="center-image" />
        </div>

        {/* Right Navigation */}
        <div className="nav-right">
          <a href="/">SẢN PHẨM</a>
          <a href="/">TIN TỨC</a>
        </div>

        {/* User Actions */}
        <div className="user-actions">
          <a href="/">
            <FiUser /> Đăng Ký
          </a>
          <a href="/">
            <FiLock /> Đăng Nhập
          </a>
          <a href="/" className="search-icon">
            <FiSearch />
          </a>
          <a href="/" className="cart-icon">
            <FaShoppingCart />
            <span className="cart-count">1</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
