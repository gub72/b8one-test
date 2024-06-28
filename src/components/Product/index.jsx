import React from 'react'
import ButtonAddToCart from "../ButtonAddToCart";
import ButtonWish from "../ButtonWish";
import './global.css'

const Product = ({
  productSku,
  isFavorite,
  payInInstallments,
  productName,
  image,
  listPrice,
  sellingPrice, 
  onToggleWish
}) => {
  return (
    <div className="container-card-product">
      <div className='container-image-and-btnwish'>
        <div className="container-btnwish">
          <ButtonWish isFavorite={isFavorite} onToggleWish={() => onToggleWish(productSku)}/>
        </div>
        <img className="product-image" src={image} alt={productName} />
      </div>
      <div className="container-product-content">
        <p className="product-name">{productName}</p>
        <div className="container-price-product">
          <p className="list-price">
            R${" "}
            {listPrice.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="selling-price">
            R${" "}
            {sellingPrice.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="pay-in-installments">
            em até{" "}
            <span>
              {payInInstallments}x de R${" "}
              {(sellingPrice / payInInstallments).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
            </span>
            sem juros
          </p>
        </div>
      </div>

      <ButtonAddToCart />
    </div>
  )
}

export default Product
