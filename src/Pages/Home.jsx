import React from "react";
import Hero from "../Components/Hero";
import OrderCart from "../Components/OrderCart";
import BestDealProduct from "../Components/BestDealProduct.jsx";
import GetDiscount from "../Components/GetDiscount.jsx";
import PopularProduct from "../Components/PopularProduct.jsx";
import Discount from "../Components/Discount.jsx";
import TodayBestDeal from "../Components/TodayBestDeal.jsx";
import GetCashBack from "../Components/GetCashBack.jsx";
import TrendingProduct from "../Components/TrendingProduct.jsx";

function Home() {
  return (
    <div>
      <Hero />
      <OrderCart />
      <BestDealProduct />
      <GetDiscount/>
      <PopularProduct/>
        <Discount/>
        <TodayBestDeal/>
        <GetCashBack/>
        <TrendingProduct/>
    </div>
  );
}

export default Home;
