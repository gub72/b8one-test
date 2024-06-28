import { useState, useEffect } from "react";
import './global.css'

const ButtonWish = ({ isFavorite, onToggleWish }) => {
  const [fav, setFav] = useState(isFavorite);

  useEffect(() => {
    setFav(isFavorite);
  }, [isFavorite]);

  const toggleWish = () => {
    setFav(!fav);
    onToggleWish();
  };

  return (
    <>
      <button
        className={"product-wish-btn" + (fav ? "--active" : "")}
        onClick={() => toggleWish(!fav)}
      />
    </>
  );
};
export default ButtonWish;
