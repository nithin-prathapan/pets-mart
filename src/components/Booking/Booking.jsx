import React from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Booking = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "demo@gamil.com",
    fullName: "Nithin prathapan",
    phone: "8848946278",
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(credentials);
    navigate("/thankyou");
  };
  return (
    <div className="booking w-[100%] p-4 shadow-md col-span-4 mr-1">
      <div className="price justify-between text-lg  flex w-[90%] mx-auto shadow-md m-4">
        <h1 className="my-auto text-3xl font-semibold p-4">$40</h1>
        <h1 className="my-auto p-4 font-semibold text-xl flex">
          5
          <span className="my-auto ml-1  mr-1">
            <AiFillStar color="orange" />
          </span>
        </h1>
      </div>
      <div className="info w-full">
        <div className="information w-full">
          <h1 className="p-4 font-semibold text-xl">Information</h1>
        </div>
        <div className="form pl-4  w-full mx-auto">
          <form action="" onSubmit={handleClick}>
            <input
              onChange={handleChange}
              placeholder="Enter Name"
              id="name"
              className="w-[90%] shadow-md m-2 h-8 mx-auto p-6 outline-none"
              type="text"
            />
            <input
              onChange={handleChange}
              placeholder="Enter Mobile"
              id="mobile"
              className="w-[90%] shadow-md m-2 h-8 mx-auto p-6 outline-none"
              type="text"
            />
            <input
              onChange={handleChange}
              placeholder="Enter Email"
              id="email"
              className="w-[90%] shadow-md m-2 h-8 mx-auto p-6 outline-none"
              type="email"
            />{" "}
          </form>
        </div>
      </div>
      <div className="booking w-full mt-4">
        <div className="w-[90%] mx-auto flex justify-between mt-4 ">
          <h1>Price</h1>
          <h1>$40</h1>
        </div>
        <div className="w-[90%] mx-auto flex justify-between mt-4 ">
          <h1>Service Charge</h1>
          <h1>$10</h1>
        </div>
        <div className="w-[90%] mx-auto flex justify-between mt-4 ">
          <h1>Total Amount</h1>
          <h1>$50</h1>
        </div>
        <div className="w-[90%] mx-auto flex justify-between mt-4 ">
          <button
            onClick={handleClick}
            className="bg-button-primary w-full p-2 rounded-3xl text-[#fff] font-semibold"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
