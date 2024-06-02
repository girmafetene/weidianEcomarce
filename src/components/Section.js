import React, { useState } from "react";
import { ProductService, SectionList } from "../constant";
import SectionCard from "./SectionCard";
import ServiceCard from "./ServiceCard";
import MainProduct from "./Mainproduct";

const Section = () => {
  const [ChildrenList, setChildrenList] = useState([]);
  const handleMouseOver = (title) => {
    const val = ProductService?.filter((c) => c.title == title)[0]?.Children;
    setChildrenList(val);
  };
  return (
    <>
      <div className="w-full bg-gray-200 mb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:px-16 w-full">
          {SectionList.map((item, i) => (
            <SectionCard key={i} data={item} />
          ))}
        </div>
      </div>
      <div class="flex items-center justify-center h-36 lg:mt-20">
        <div class="relative">
          <span class="absolute inset-0 flex items-center justify-center text-gray-300 lg:text-9xl text-6xl font-bold">
            SERVICES
          </span>
          <span class="relative text-black lg:text-3xl  text-xl font-medium top-8">
            product service
          </span>
        </div>
      </div>
      <div>
        <p className="flex justify-center text-sm font-semibold lg:mt-12  px-2">
          Omni-channel, all-scenario, multi-terminal store opening solutions
          help 90 million merchants succeed
        </p>
      </div>
      <div className="flex items-center justify-center px-12 lg:mt-36 mt-6">
        <div className=" grid lg:grid-cols-3 lg:gap-12 lg:mt-20 mt-6">
          {ProductService.map((item, i) => (
            <div
              key={i}
              className="px-14 items-center group-hover:text-red-700 cursor-pointer"
              onMouseOver={() => handleMouseOver(item?.title)}
            >
              <img
                src={item.imag}
                alt="Example"
                className="flex w-32 h-32 text-slate-100 hover:scale-150 duration-700 transform  items-center bg-transparent"
              />
              <div className="font-semibold text-3xl hover:text-red-800">
                {item?.title}
              </div>
              <div>{item?.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-3 py-10 duration-700">
        {ChildrenList.map((item, i) => (
          <ServiceCard key={i} data={item} />
        ))}
      </div>
      <div className="lg:mt-36 mt-10">
        <MainProduct />
      </div>
    </>
  );
};

export default Section;
