import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { BsArrowRightCircle } from "react-icons/bs";
import icon1 from "../../../../assets/icons/time.png";
import icon2 from "../../../../assets/icons/phone.png";
import icon3 from "../../../../assets/icons/g.png";


const Service = () => {
  const [services, setServices] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  console.log(services);

  useEffect(() => {
    fetch("https://car-doctor-server-khaki-nu.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div id="service" className="lg:py-16 px-2">
      <div className="text-center py-6 space-y-2">
        <h4 className="text-[17px] font-bold text-[#FF3811]">Service</h4>
        <h3 className="text-[#151515] text-2xl lg:text-4xl font-bold">
          Our Service Area
        </h3>
        <p className="lg:w-[715px] text-center mx-auto text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      {isLoading ? (
        <p className="text-center font-bold text-2xl">Loading..</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      )}

      <button className="px-5  font-bold text-[#EF3811] py-3 border border-[#EF3811] rounded-md text-center mx-auto block mt-4">
        More Services
      </button>

      <div className="bg-[#151515] w-full h-[200px] rounded-md my-6 lg:my-12">
        <div className="flex flex-col lg:flex-row h-full px-4 lg:px-12 justify-between items-center">
          <div className="flex gap-3 items-center ">
            <img className="w-[35px]" src={icon1} alt="" />
            <div className="text-white">
              <h3 className="text-[16px] font-medium">
                We are open monday-friday
              </h3>
              <p className="font-bold text-2xl">7:00 am - 9:00 pm</p>
            </div>
          </div>
          <div className="flex  gap-3 items-center">
            <img className="w-[35px]" src={icon2} alt="" />
            <div className="text-white">
              <h3 className="text-[16px] font-medium">Have a question?</h3>
              <p className="font-bold text-2xl">+2546 251 2658</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-[35px]" src={icon3} alt="" />
            <div className="text-white">
              <h3 className="text-[16px] font-medium">
                Need a repair? our address
              </h3>
              <p className="font-bold text-2xl">Liza Street, New York</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
