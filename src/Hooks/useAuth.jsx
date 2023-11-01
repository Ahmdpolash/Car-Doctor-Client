import React, { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const useAuth = useContext(authContext);
  return useAuth;
};

export default useAuth;
