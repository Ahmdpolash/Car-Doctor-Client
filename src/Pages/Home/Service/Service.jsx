import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <div className="lg:py-16 px-2">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
