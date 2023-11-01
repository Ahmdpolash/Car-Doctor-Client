import React from "react";
import { useLocation } from "react-router-dom";

const DetailsBanner = () => {

  const location = useLocation()
  console.log(location);


  return (
    <div>
      <div
        className="h-[130px] lg:h-[210px]  rounded-lg mb-6 lg:mb-16  w-full"
        style={{
          backgroundImage: "url(https://i.ibb.co/k0jzs3Z/Rectangle-1539.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-gradient-to-r  from-[#0a0a0a] to-[#15151500] top-0 bottom-0 h-full w-full">
          <h1 className="flex ml-8 font-bold text-2xl lg:text-3xl items-center h-full text-white">
            Service Details{location.pathname}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DetailsBanner;
