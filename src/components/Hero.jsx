import React from "react";
import Menu from "/menu.png";

const Hero = () => {
  return (
    <section className="p-10 md:flex-between">
      <h1 className="font-semibold text-4xl grid gap-2 capitalize selection:text-blue-500">
        <p>
          <span className="text-6xl font-extrabold mx-1">E</span>xplore the{" "}
        </p>
        <p>
          <span className="gradient-text font-bold">Art of Developer -- </span>
        </p>
        <p>fetching data from an API</p>
      </h1>

      <ButtonComp value={"explore all images"} />
    </section>
  );
};

export const ButtonComp = ({ value }) => {
  return (
    <button className="bg-white capitalize text-[#31ABFE] font-medium px-6 py-2 rounded-xl flex-between gap-4 hover:invert duration-300 mt-5">
      <img src={Menu} alt="Menu" className="size-5" />
      {value}
    </button>
  );
};

export default Hero;
