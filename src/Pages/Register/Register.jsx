import React, { useContext } from "react";
import Navbar2 from "../Shared/Navbar2/Navbar2";
import img from "../../../assets/images/login/login.svg";
import {
  BiLogoFacebook,
  BiLogoGooglePlus,
  BiLogoTwitter,
} from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { handleSignUp } = useContext(authContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const formData = { name, email, password };
    console.log(formData);

    //!signUp
    handleSignUp(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("user created successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <Navbar2></Navbar2>
      <Toaster />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-10">
        <div className="lg:h-[80vh] flex items-center">
          <img className="w-[250px] mx-auto lg:w-[420px]" src={img} alt="" />
        </div>

        <div className="border-2 lg:w-[500px] shadow-lg">
          <h2 className="text-center text-2xl lg:text-3xl py-6 font-bold">
            Sign Up
          </h2>
          <form onSubmit={handleRegister} className="px-4 py-3">
            <div className="space-y-2 mb-5">
              <span className="ml-2 font-semibold">Name</span> <br />
              <input
                className="border w-full py-2 px-4 rounded-md"
                type="text"
                name="name"
                id=""
                placeholder="Your Name"
              />
            </div>
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
            </div>
            <button
              type="submit"
              className="py-2 lg:py-3 bg-[#FF3811] text-white w-full mt-4 lg:mt-7 rounded-lg"
            >
              Sign Up
            </button>
            <div className="text-center py-4">
              <p>Or Sign Up With</p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div>
                  <BiLogoFacebook className="bg-[#F5F5F8] w-6 h-6 rounded-full  mx-auto"></BiLogoFacebook>
                </div>
                <div>
                  <FcGoogle className="bg-[#F5F5F8] w-6 h-6 rounded-full  mx-auto"></FcGoogle>
                </div>
                <div>
                  <BiLogoTwitter className="bg-[#F5F5F8] w-6 h-6 rounded-full  mx-auto"></BiLogoTwitter>
                </div>
              </div>
              <p className="mt-3 font-semibold">
                Already have an Account ?{" "}
                <Link className="font-bold text-[#FF3811]" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
