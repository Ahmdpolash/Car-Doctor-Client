import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Pages/Shared/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
      <Toaster></Toaster>
    </>
  );
};

export default Layout;
