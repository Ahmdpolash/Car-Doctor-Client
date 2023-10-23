import React from "react";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service || [];

  return (
    <>
      <div className="px-4 ">
        <div className="relative border flex flex-col text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white  h-80 rounded-xl bg-clip-border">
            <img className="w-full h-[210px]" src={img} alt="profile-picture" />

            <h4 className="block mb-2  text-2xl font-semibold text-[#444]">
              {title}
            </h4>
            <p className="block text-[#FF3811] font-semibold">
              Price : {price}
            </p>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default ServiceCard;
