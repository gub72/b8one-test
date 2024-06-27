import { useState } from "react";
import './global.css'

const ButtonAddToCart = () => {
  const [addToCart, setAddToCart] = useState(false);
  const handleAddToCart = () => {
    setAddToCart(!addToCart);
  };
  return (
    <button
      className={"add-to-cart-btn" + (addToCart ? " add-to-cart-btn--active" : "")}
      onClick={() => handleAddToCart()}
    >
      {addToCart ? "Adicionado" : "Adicionar"}
    </button>
  );
};

export default ButtonAddToCart;
