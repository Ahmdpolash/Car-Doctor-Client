import React, { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-khaki-nu.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
        // isLoading(false);
      });
  }, []);
  return services;
};

export default useService;
