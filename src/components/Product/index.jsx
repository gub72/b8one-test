import React from 'react'
import ButtonAddToCart from "../ButtonAddToCart";
import ButtonWish from "../ButtonWish";
import './global.css'

const Product = ({
  isFavorite,
  payInInstallments,
  productName,
  image,
  listPrice,
  sellingPrice
}) => {
  return (
    <div className="productContainer">
      <ButtonWish isFavorite={isFavorite}/>
      <p>{payInInstallments}</p>
      <p>{productName}</p>
      <p>{image}</p>
      <p>{listPrice}</p>
      <p>{sellingPrice}</p>

      <ButtonAddToCart />
    </div>
  )
}

export default Product
