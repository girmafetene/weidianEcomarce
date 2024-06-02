import React from "react";
import { AiOutlineSlackSquare } from "react-icons/ai";
const ServiceCard = ({ data }) => {
  return (
    <div className="px-10  cursor-pointer shadow-lg bg-white w-full rounded-lg duration-700 translate-y-2 hover:shadow-2xl ">
      <div className="flex justify-center">
        <AiOutlineSlackSquare size={80} color={data.color} />
      </div>
      <h1 className="text-2xl font-medium py-5 text-center">{data?.title}</h1>
      <p className="text-sm text-center">{data?.description}</p>
    </div>
  );
};

export default ServiceCard;
