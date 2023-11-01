import React from "react";
import toast from "react-hot-toast";

const BookingRow = ({ booking, handleDelete, handleUpdateBooking, status }) => {
  return (
    <>
      <tr key={booking._id} className="text-center bg-gray-300">
        <td>
          <button
            onClick={() => handleDelete(booking._id)}
            className="btn btn-circle btn-sm btn-outline bg-error"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar text-center mx-auto">
              <div className="mask mask-squircle  w-12 h-12">
                <img
                  className=""
                  src={booking.img}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>

        <td className="text-black font-semibold">{booking.CustomerName}</td>
        <td className="text-black">{booking.email}</td>
        <td className="flex items-center justify-center">
          <h2 className="text-black mt-4">{booking.date}</h2>
        </td>

        <td className="text-black">{booking?.price}</td>

        <th>
          {status === 'confirm' ? (
            <span className="font-bold text-2xl text-red-400">Confirmed</span>
          ) : (
            <button
              onClick={() => handleUpdateBooking(booking._id)}
              type="submit"
              className="btn btn-ghost bg-red-500 py-2 lg:py-3 px-3 text-white "
            >
             Please confirm
             
            </button>
          )}
        </th>
      </tr>
    </>
  );
};

export default BookingRow;
