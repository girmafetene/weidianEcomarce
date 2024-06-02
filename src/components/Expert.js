import React from "react";

const Expert = ({ icon, image }) => {
  return (
    <div className="mt-8 lg:px-32 py-10 ">
      <div class="bg-glass-light backdrop-blur-md border border-glass-light shadow-lg rounded-lg p-6">
        <div className="flex gap-4">
          <div className="flex mt-12">
            <div className="h-6 w-6 border bg-red-400 rounded-full"></div>
            <div className="h-6 w-6 border bg-red-200  rounded-full -ml-3"></div>
          </div>
          <div className="grid grid-cols-3 gap-x-3">
            <div className="col-span-2 ">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border">{icon}</div>
                <div>
                  <p className="font-bold">Lao Tan Foreign Trade</p>
                  <p className="text-xs">
                    Zantan Optimization, Distribution Expert
                  </p>
                </div>
              </div>
              <p className="text-red-400">
                Clearance special event, meticulous customer operation
                Repurchase-Membership System
              </p>
              <p class="text-black">
                Since 2006, we have entered the foreign trade tail goods
                industry and started Taobao business. We are one of the top 10
                sellers in the Taobao industry! We have multiple Golden Crown
                stores and Tmall, and we also cooperate to supply hundreds of
                Taobao merchants and private channels! We have been deeply
                involved in the industry for 17 years. We not only have senior
                and first-hand foreign trade clothing and department store
                resources, but also have many factories and agricultural product
                cooperation bases. We also cooperate with more than 100 domestic
                and foreign brands. We have a complete after-sales service team
                and our own warehousing! Senior and first-hand foreign trade
                tail goods resources! Brand resources! Product diversity! Plus a
                complete service system, fast and reliable warehousing services!
              </p>
            </div>
            <div className="col-span-1">
              <img src={image} alt="Example" className="  h-full w-fit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
