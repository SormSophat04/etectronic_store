import React from "react";
import Hero from "../Components/Hero";
import OrderCart from "../Components/OrderCart";
import BestDealProduct from "../Components/BestDealProduct.jsx";
import GetDiscount from "../Components/GetDiscount.jsx";
import PopularProduct from "../Components/PopularProduct.jsx";

function Home() {
  return (
    <div>
      <Hero />
      <OrderCart />
      <BestDealProduct />
      <GetDiscount/>
      <PopularProduct/>
    </div>
  );
}

export default Home;
