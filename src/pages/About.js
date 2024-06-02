import React from "react";

const About = () => {
  return (
    <div className="">
      <div class="flex items-center justify-center h-36 lg:py-20">
        <div class="relative">
          <span class="absolute inset-0 flex items-center justify-center text-gray-300 lg:text-9xl text-6xl font-bold">
            ABOUTUS
          </span>
          <span class="relative text-black lg:text-3xl  text-xl font-medium top-10">
            About Weidian
          </span>
        </div>
      </div>
      <div className="flex justify-center font-light text-3xl px-4 py-6">
        Better serve merchants and create value for them
      </div>
      <div className="lg:mb-24 mb-8">
        <p className="flex text-5xl text-red-600 px-4 justify-center lg:py-10">
          9000Ten thousand + 1000100 million +30100 million
        </p>
        <p className="flex text-3xl  px-4 justify-center lg:py-10 ">
          Merchants use WeChat Store + Annual transaction volume + Number of
          products on shelf
        </p>
      </div>
      <div className="py-10 bg-red-600 w-full ">
        <div className="py-6">
          <p className="flex justify-center font-extrabold text-white text-2xl my-5">
            Register now and enjoy exclusive discount packages for new members!!
          </p>
          <div className="flex justify-center px-4 gap-6">
            <div className="bg-white px-9 py-3 rounded-lg">
              <p className="text-red-600 font-bold">Free shop</p>
            </div>
            <div className="bg-transparent px-9 py-3 rounded-lg border-4 border-white ">
              <p className="text-white font-bold">Enquire Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
