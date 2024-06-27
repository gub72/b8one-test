import { useState } from "react";
import './global.css'

const ButtonWish = ({ isFavorite }) => {
  const [fav, setFav] = useState(isFavorite);

  const toggleWish = (fav) => {
    setFav(fav);
  };

  return (
    <>
      <button
        className={"productWishBtn" + (fav ? "--active" : "")}
        onClick={() => toggleWish(!fav)}
      />
    </>
  );
};
export default ButtonWish;
