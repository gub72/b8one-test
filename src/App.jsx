import React from "react";
import productImage from "./assets/image/productImage.png";
import Product from "./components/Product";


function App() {
  const products = [
    {
      isFavorite: false,
      payInInstallments: 10,
      productSku: "b8one-1",
      productName:
        "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      image: productImage,
      listPrice: 2813.0,
      sellingPrice: 2599.0,
    },
    {
      isFavorite: false,
      payInInstallments: 10,
      productSku: "b8one-2",
      productName:
        "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      image: productImage,
      listPrice: 2813.0,
      sellingPrice: 2599.0,
    },
  ];
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
            isFavorite = {isFavorite}
            payInInstallments = {payInInstallments}
            productName = {productName}
            image = {image}
            listPrice = {listPrice}
            sellingPrice = {sellingPrice}
          />
        ))}
    </div>
  );
}

export default App
