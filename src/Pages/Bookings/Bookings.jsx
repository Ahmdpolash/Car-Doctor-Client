import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import DetailsBanner from "../Details/DetailsBanner";

import BookingRow from "./BookingRow";
import toast from "react-hot-toast";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(authContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  // const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const url = `/bookings?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setBookings(res.data);
    });

    // axios.get(url,{withCredentials:true})
    // .then(res =>{
    //   setBookings(res.data)
    // })

    // fetch(url)
    //   .then((res) => res.json())z
    //   .then((data) => {
    //     console.log(data);
    //     setBookings(data);
    //   });
  }, [user, url]);

  const handleDelete = (id) => {
    const url = `https://car-doctor-server-khaki-nu.vercel.app/bookings/${id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("deleted successfully");
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        }
      });
  };

  const handleUpdateBooking = (id) => {
    fetch(`https://car-doctor-server-khaki-nu.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      });
  };

  return (
    <div>
      <DetailsBanner />

      <div className="overflow-x-auto h-[60vh] mb-6  max-w-7xl dark:bg-black mx-auto text-white">
        <table className="table">
          <thead>
            <tr className="text-center  bg-red-300">
              <th className="font-bold">Delete</th>
              <th className="font-bold">Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Price </th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleUpdateBooking={handleUpdateBooking}
                status={status}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
