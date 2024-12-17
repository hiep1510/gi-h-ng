import React, { useState } from "react";
import CartItem from "./CartItem";
import "../css/Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Rượu Luxury Altair Red", price: 2338000, quantity: 1 },
  ]);

  const updateQuantity = (id, amount) => {
    console.log(`Updating quantity for id: ${id}, amount: ${amount}`); // Log to check
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">GIỎ HÀNG</h2>
      <div className="cart-header">
        <span>Ảnh Sản Phẩm</span>
        <span>Tên Sản Phẩm</span>
        <span>Đơn Giá</span>
        <span>Số Lượng</span>
        <span>Thành Tiền</span>
        <span>Xóa</span>
      </div>

      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity} // Pass function down
          />
        ))}
      </div>

      <div className="payment-container">
        <div className="payment-details">
          <div className="payment-row">
            <span>Phí vận chuyển:</span>
            <span>Tính lúc thanh toán</span>
          </div>
          <div className="payment-row total">
            <span>Tổng tiền:</span>
            <span>{calculateTotal().toLocaleString()}đ</span>
          </div>
        </div>
        <button className="checkout-button">Tiến hành đặt hàng</button>
      </div>
    </div>
  );
}

export default Cart;
