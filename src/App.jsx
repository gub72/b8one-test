import React, { useState } from "react";
import productImage from "./assets/image/productImage.png";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([
    {
      isFavorite: false,
      payInInstallments: 10,
      productSku: "b8one-1",
      productName: "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      image: productImage,
      listPrice: 2813.0,
      sellingPrice: 2599.0,
    },
    {
      isFavorite: false,
      payInInstallments: 10,
      productSku: "b8one-2",
      productName: "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      image: productImage,
      listPrice: 2813.0,
      sellingPrice: 2599.0,
    },
  ]);

  const handleToggleWish = (productSku) => {
    const updatedProducts = products.map(product =>
      product.productSku === productSku
        ? { ...product, isFavorite: !product.isFavorite }
        : product
    );
    setProducts(updatedProducts);
    console.log('Produtos: ', updatedProducts); // Este console.log() foi adicionado para observar a alteração do isFavorite de acordo com o produto clicado
  };

  return (
    <div className="App">
      {products.map(
        ({
          isFavorite,
          payInInstallments,
          productSku,
          productName,
          image,
          listPrice,
          sellingPrice
        }) => (
          <Product 
            key={productSku}
            productSku={productSku}
            isFavorite = {isFavorite}
            payInInstallments = {payInInstallments}
            productName = {productName}
            image = {image}
            listPrice = {listPrice}
            sellingPrice = {sellingPrice}
            onToggleWish={handleToggleWish}
          />
      ))}
    </div>
  );
}

export default App
