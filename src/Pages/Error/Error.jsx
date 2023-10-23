import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[80vh] flex items-center justify-center">
        <img
          className="w-[750px]"
          src="https://i.ibb.co/Stt7r4R/Screenshot-1-removebg-preview.png"
          alt=""
        />
      </div>
      <Link className="text-center mx-auto" to="/">
        <button className="py-2 lg:py-3 bg-[#FF3811] block text-white px-5 mx-auto mt-4 lg:mt-7 rounded-lg">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
