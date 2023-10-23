import React from "react";
import person from "../../../../assets/images/about_us/person.jpg";
import parts from "../../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="lg:py-8 bg-gray-100 px-4 lg:px-16 py-3 lg:mt-8">
      <div className="grid grid-cols-1  items-center justify-center lg:grid-cols-2 gap-3">

        <div className="relative md:mx-auto lg:mx-0 mb-6 order-2  lg:order-1  mt-2 lg:mt-0">
          <img
            className="w-[320px] lg:w-[400px] h-[320px] lg:h-[453px] rounded-lg"
            src={person}
            alt=""
          />

          <img
            className="w-[220px] lg:w-[290px] absolute -bottom-16 right-0 md:left-[220px]  lg:right-28 rounded-lg border-8 border-white h-[200px] lg:h-[282px]"
            src={parts}
            alt=""
          />
        </div>

        <div className="space-y-4 order-1 lg:order-2 lg:-ml-[70px] mt-8 lg:mt-0">
          <h4 className="text-[17px] font-semibold text-[#FF3811]">About Us</h4>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#151515]">
            We are qualified <br /> & of experience in this field <br />
          </h2>
          <p className="text-[#737373] text-[16px] lg:w-[500px] leading-7">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="text-[#737373] text-[16px] lg:w-[500px] leading-7">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="bg-[#FF3811] text-white font-semibold px-3 lg:px-5 py-3 rounded-md mr-2">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
