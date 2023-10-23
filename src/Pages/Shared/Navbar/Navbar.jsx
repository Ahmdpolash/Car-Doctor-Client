import React from "react";
import logo from "../../../../assets/logo.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <navLink to="/">Home</navLink>
      </li>
      <li>
        <navLink to="/about">About</navLink>
      </li>
      <li>
        <navLink to="/service">Services</navLink>
      </li>
      <li>
        <navLink to="/blog">Blog</navLink>
      </li>
      <li>
        <navLink to="/contact">Contact</navLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case ">
          <img className="w-[65px] lg:w-[90px]" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal mt-4 font-bold px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
       <button className="btn btn-outline font-bold outline-[#FF3811] text-[#FF3811]">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;