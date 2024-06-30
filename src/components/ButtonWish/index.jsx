import './global.css'

const ButtonWish = ({ isFavorite, onToggleWish }) => {
  return (
    <>
      <button
        className={"product-wish-btn" + (isFavorite ? "--active" : "")}
        onClick={onToggleWish}
      />
    </>
  );
};
export default ButtonWish;
