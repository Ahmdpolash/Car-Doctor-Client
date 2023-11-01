import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import DetailsBanner from "../Details/DetailsBanner";
import { authContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const CheckOut = () => {
  const { user } = useContext(authContext);
  console.log(user);
  const data = useLoaderData();
  const { _id, title, price, img } = data;

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email ;
    const price = form.price.value;

    const order = {
      CustomerName: name,
      img,
      date,
      email,
      price,
      service: title,
      service_id: _id,
    };

    fetch("https://car-doctor-server-khaki-nu.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Your booking is Successfully");
        }
      });
  };


  return (
    <div>
      <DetailsBanner></DetailsBanner>
      <div className="px-6 lg:px-0">
        <form
          onSubmit={handleBookService}
          className="w-full lg:w-2/3  mx-auto mb-6 rounded-md border p-6 bg-[#F3F3F3]"
        >
          <h2 className="text-center font-bold text-xl mb-4">
            Service : {title}
          </h2>
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <input
              className="w-full rounded-md py-3 px-4"
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Your Name"
            />
            <input
              className="w-full rounded-md py-3 px-4"
              type="date"
              name="date"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mb-3">
            <input
              className="w-full rounded-md py-3 px-4"
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
            />
            <input
              className="w-full rounded-md py-3 px-4"
              type="text"
              name="price"
              defaultValue={"$ " + price}
            />
          </div>
          <textarea
            className="w-full rounded-md p-6"
            name="message"
            placeholder="Your Message"
            id=""
            cols="30"
            rows="5"
          ></textarea>
          <input
            className="bg-[#FF3811] w-full text-white py-3 mt-4 rounded-md font-bold"
            type="submit"
            value="Order Confirm"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
