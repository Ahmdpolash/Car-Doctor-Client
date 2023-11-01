import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, title, price,_id } = service || [];

  return (
    <>
      <div className="px-4 ">
        <div className="relative border flex flex-col text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white  h-80 rounded-xl bg-clip-border">
            <img className="w-full h-[230px]" src={img} alt="profile-picture" />

            <h4 className="block mb-2  text-2xl font-semibold text-[#444]">
              {title}
            </h4>
            <div className="flex justify-between items-center">
              <p className="block text-[#FF3811] font-semibold">
                Price : {price}
              </p>

              <Link to={`/details/${_id}`}>
                <BsArrowRightCircle className="text-[#FF3811] text-2xl"></BsArrowRightCircle>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
