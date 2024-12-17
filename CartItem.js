import React from "react";
import "../css/Cartltem.css";

function CartItem({ item, updateQuantity, removeItem }) {
  const { id, name, price, quantity, imageUrl } = item;

  // Check if an image URL exists; if not, display a placeholder
  const imagePath = imageUrl || "../img/ảnh rượu .jpg";

  return (
    <div className="cart-item">
      <img src={imagePath} alt={name} />
      <span>{name}</span>
      <span>{price.toLocaleString()}đ</span>
      <div className="quantity-controls">
        <button
          onClick={() => updateQuantity(id, -1)}
          aria-label={`Decrease quantity of ${name}`}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => updateQuantity(id, 1)}
          aria-label={`Increase quantity of ${name}`}
        >
          +
        </button>
      </div>
      <span>{(price * quantity).toLocaleString()}đ</span>
      <button
        onClick={() => removeItem(id)}
        aria-label={`Remove ${name} from cart`}
      >
        Xóa
      </button>
    </div>
  );
}

export default CartItem;
