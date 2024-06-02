import React from "react";

const SectionCard = ({ data }) => {
  return (
    <div className="px-10 gap-1 cursor-pointer hover:shadow-2xl hover:bg-white w-full">
      <h1 className="text-2xl font-medium py-5">{data?.Title}</h1>
      <p className="text-sm">{data?.description}</p>
    </div>
  );
};

export default SectionCard;
