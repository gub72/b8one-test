import React from 'react'

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
      <p>{isFavorite}</p>
      <p>{payInInstallments}</p>
      <p>{productName}</p>
      <p>{image}</p>
      <p>{listPrice}</p>
      <p>{sellingPrice}</p>
    </div>
  )
}

export default Product
