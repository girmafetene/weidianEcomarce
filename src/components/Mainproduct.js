import React, { useState } from "react";
import left from "../asset/left.png";
import right from "../asset/right.png";
import { microStore } from "../constant";
import Expert from "./Expert";

const MainProduct = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [icon, setIcon] = useState("");
  const [image, setImage] = useState("");
  const ItemClick = (i, item) => {
    setSelectedIndex(i);
    setIcon(item?.icon);
    setImage(item?.url);
  };
  return (
    <>
      <div class="flex items-center justify-center h-36">
        <div class="relative">
          <span class="absolute inset-0 flex items-center justify-center text-gray-300 lg:text-9xl text-6xl font-bold">
            PRODUCTS
          </span>
          <span class="relative text-black lg:text-3xl  text-xl font-medium mt-28">
            main product
          </span>
        </div>
      </div>
      <div>
        <p className="flex justify-center text-xl font-light mt-6  px-2">
          Online shopping mall solutions and new store 24-hour operation
          solutions provide efficient, convenient and intelligent experience
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-3 py-4 lg:py-10">
        <div className="items-center justify-center lg:py-20 py-10 bg-gray-100 border">
          <p className="text-3xl font-bold text-center ">Mall version</p>
          <p className="text-base font-serif text-center py-3 ">
            Online shopping mall intelligent management solution
          </p>
          <div className="py-4 flex justify-center">
            <div className="px-4 py-1 border-2 border-black rounded-full">
              Learn more
            </div>
          </div>

          <div className="ml-20">
            <img
              src={left}
              alt="left"
              className="flex h-fit  w-fit hover:scale-105  justify-center"
            />
          </div>
        </div>
        <div className="items-center justify-center lg:py-20 py-10 bg-gray-100 border">
          <p className="text-3xl font-bold text-center ">Mall version</p>
          <p className="text-base font-serif text-center py-3  px-3">
            Online shopping mall intelligent management solution
          </p>
          <div className="py-4 flex justify-center">
            <div className="px-4 py-1 border-2 border-black rounded-full">
              Learn more
            </div>
          </div>

          <div className="ml-20">
            <img
              src={right}
              alt="left"
              className="flex h-fit  w-fit hover:scale-105  justify-center"
            />
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center h-36">
        <div class="relative">
          <span class="absolute inset-0 flex items-center justify-center text-gray-300 lg:text-9xl text-6xl font-bold ">
            CASE
          </span>
          <span class="relative text-black lg:text-3xl  font-thin  text-xl  top-10">
            People around me are opening micro stores
          </span>
        </div>
      </div>

      <div className="lg:flex justify-center lg:mt-16 py-10 gap-4 ">
        {microStore.map((item, i) => (
          <div
            className={`items-center lg:gap-16  duration-700 translate-x-2 cursor-pointer ${
              i == selectedIndex && "border-black  border-b-4"
            }`}
            key={i}
            onClick={() => ItemClick(i, item)}
          >
            <div className="flex justify-center mb-3">{item?.icon}</div>
            <div className="font-light text-xl mb-2">{item?.title}</div>
          </div>
        ))}
      </div>
      <div className="border-b"></div>

      <Expert icon={icon} image={image} />
    </>
  );
};

export default MainProduct;
