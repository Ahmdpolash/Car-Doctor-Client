import axios from "axios";
import React, { useContext, useEffect } from "react";
import { authContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-khaki-nu.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  
  const { logOut } = useContext(authContext);

  const navigate = useNavigate();
  
  useEffect(() => {

    axiosSecure.interceptors.response.use((res) => {
      return res;
    }),
      (error) => {
        console.log("error tracked in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout the user");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((err) => console.log(err.message));
        }
      };

  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
