import React from "react";
import Navbar2 from "../Shared/Navbar2/Navbar2";
import img from "../../../assets/images/login/login.svg";
import {
  BiLogoFacebook,
  BiLogoGooglePlus,
  BiLogoTwitter,
} from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar2></Navbar2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-10">
        <div className="lg:h-[80vh] flex items-center">
          <img className="w-[250px] mx-auto lg:w-[420px]" src={img} alt="" />
        </div>

        <div className="border-2 rounded-lg lg:w-[500px] shadow-lg">
          <h2 className="text-center text-2xl lg:text-3xl py-6 font-bold">
            Sign In
          </h2>
          <form className="px-4 py-3">
            <div className="space-y-2 mt-5">
              <span className="ml-2 font-semibold">Email</span> <br />
              <input
                className="border w-full py-2 px-4 rounded-md"
                type="email"
                name="email"
                id=""
                placeholder="Your Email"
              />
            </div>

            <div className="space-y-2 mt-5">
              <span className="ml-2 font-semibold">Confirm Password</span>{" "}
              <br />
              <input
                className="border w-full py-2 px-4 rounded-md"
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
              <p className="text-[13px] text-red-400 hover:underline font-semibold ml-2">forgot password?</p>
            </div>
            <button className="py-2 lg:py-3 bg-[#FF3811] text-white w-full mt-4 lg:mt-7 rounded-lg">
              Sign In
            </button>
            <div className="text-center  py-4 mt-2">
              <p className="font-semibold">Or Sign In With</p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div>
                  <BiLogoFacebook className="bg-[#e4dddb] w-7 h-7 rounded-full  mx-auto"></BiLogoFacebook>
                </div>
                <div>
                  <FcGoogle className="bg-[#ebe0de] w-7 h-7 rounded-full  mx-auto"></FcGoogle>
                </div>
                <div>
                  <BiLogoTwitter className=" bg-[#eadedc] w-7 h-7 rounded-full  mx-auto"></BiLogoTwitter>
                </div>
              </div>
              <p className="mt-3 font-semibold">
                {" "}
                Don't Have an Account ?{" "}
                <Link className="font-bold text-[#FF3811]" to="/register">
                  Sign Up
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
