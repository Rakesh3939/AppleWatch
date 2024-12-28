import React from "react";
import { useCustomization } from "./context/CustomizationContext";

const Cart = () => {
  const { customization } = useCustomization();
  const { cart } = customization;

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="section">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.type} - ₹{item.price}
          </li>
        ))}
      </ul>
      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
};

export default Cart;
