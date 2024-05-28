import React from "react";
import { ButtonComp } from "./Hero";
import star from "/star.png";
const ImgCard = ({ imgUrl, productName, rating }) => {
  return (
    <div className="main-card bg-[#3341558a] p-4 rounded-xl border border-[#4a5e79be] shadow-xl grid gap-4">
      {/* product Image */}
      <img
        src={imgUrl}
        alt="Product Image"
        className="mx-auto mb-2 object-cover"
      />

      {/* product info */}
      <div className="info-text">
        <h1 className="text-[#0EA5E9] font-bold text-xl mb-2">{productName}</h1>
        <p className="text-zinc-300 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
          magni?
        </p>
      </div>

      <div className="info-btns flex-between">
        {/* Ratings */}
        <div className="ratings">
          <p className="text-xs flex-between gap-2 bg-[#a5935d52] px-6 py-2 rounded-full">
            Ratings: {rating}
            <img src={star} alt="Star" className="size-4 object-cover" />
          </p>
        </div>

        {/* Price */}
        <div className="price font-semibold bg-[#0EA5E9] rounded-full px-6 py-2 text-sm">
          <span className="font-bold">$</span>16.99
        </div>
      </div>

      {/* Add to cart Btn */}
      <AddCart />
    </div>
  );
};

const AddCart = () => {
  return (
    <button className="gradient-btn rounded-xl py-3 font-semibold text-xl hover:scale-105 duration-500">
      Add To Cart
    </button>
  );
};

export default ImgCard;
