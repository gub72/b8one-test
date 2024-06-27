import { useState } from "react";
import './global.css'

const ButtonAddToCart = () => {
  const [addToCart, setAddToCart] = useState(false);
  const handleAddToCart = () => {
    setAddToCart(!addToCart);
  };
  return (
    <button
      className={"addCartButton" + (addToCart ? " addCartButton--active" : "")}
      onClick={() => handleAddToCart()}
    >
      {addToCart ? "Adicionado" : "Adicionar"}
    </button>
  );
};

export default ButtonAddToCart;
