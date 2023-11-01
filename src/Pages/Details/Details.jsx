import React, { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";
import DetailsBanner from "./DetailsBanner";
import "./details.css";
import { BsArrowRightCircle } from "react-icons/bs";

const Details = () => {
  
  
  const details = useLoaderData();

 
  const { id } = useParams();

  const find = details.find((detail) => detail._id === id);

  return (
    <>
      <DetailsBanner></DetailsBanner>

      <div className="grid grid-cols-1 lg:grid-cols-6 px-6 gap-3 lg:px-0">
        <div className="col-span-4">
          <img className="w-full rounded-lg h-[340px]" src={find.img} alt="" />
          <div className="space-y-3 mt-4">
            <h1 className="]text-[#151515] text-2xl font-bold">{find.title}</h1>
            <p className="text-[#737373]">{find.description}</p>
          </div>

          <div className="grid grid-cols-1 py-4 lg:grid-cols-2 gap-4">
            {find.facility.map((facs) => (
              <div>
                <div className="bg-[#F3F3F3] p-5 space-y-2 rounded-lg border-t-4 shadow-md border-[#FF3811]">
                  <h1 className="text-[#444] font-bold">{facs.name}</h1>
                  <p className="text-[#737373]">{facs.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" col-span-2 ">
          <div className="bg-[#F3F3F3] p-6 rounded-lg">
            <h1 className="font-bold text-2xl py-2 ">Services</h1>

            {details.map((title) => (
              <>
                <NavLink activeClassName="active" to={`/details/${title._id}`}>
                  <h3 className="bg-white mb-2 rounded-md p-4 shadow-md font-bold">
                    {title.title}
                  </h3>
                </NavLink>
              </>
            ))}
            <div className="space-y-2 py-3">
              <h3 className="font-bold text-2xl mb-2">Price : ${find.price}</h3>

              <Link to={`/checkout/${find._id}`}>
                <button className="bg-[#FF3811] w-full text-white py-3 rounded-md font-bold">
                  Proceed Checkout
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="bg-[#151515] text-white p-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="font-bold text-xl py-2 text-white">Download</h1>
                <h3>Our Brochure</h3>
                <p className="text-[16px] text-[#A2A2A2]">Download</p>
              </div>
              <BsArrowRightCircle className="text-[#FF3811] flex text-3xl"></BsArrowRightCircle>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3>Company Details</h3>
                <p className="text-[16px] text-[#A2A2A2]">Download</p>
              </div>
              <BsArrowRightCircle className="text-[#FF3811] flex text-3xl"></BsArrowRightCircle>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Details;
