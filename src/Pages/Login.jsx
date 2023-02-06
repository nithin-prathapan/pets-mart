import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/images/user.png";
import login from "../assets/images/login.png";
const Login = () => {
  const handleChange = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-[full]  flex items-center justify-center h-full  align-middle">
      <div className="flex p-4 sm:block  shadow-md drop-shadow-md w-[80%] md:w-full sm:w-full mt-[10%] mb-[10%]  justify-between">
        <div className="mx-auto w-[50%] sm:w-full ">
          <img className="w-[80%] sm:[90%] mx-auto" src={login} alt="login" />
        </div>
        <div className="form  bg-button-primary rounded-md  top-0 col-span-2 min-h-full mx-auto sm:w-full  w-[50%]">
          <div>
            <img
              className="w-[15%] -translate-y-[50%] mx-auto"
              src={userIcon}
              alt=""
            />
          </div>
          <div className="form w-[90%] mt-[10%] mx-auto ">
            <form action="" onSubmit={handleSubmit} className="mx-auto w-[90%]">
              <input
                placeholder="Enter Your Email"
                onChange={handleChange}
                className="block mt-8 outline-none mx-auto w-[80%]  p-2 rounded-md "
                type="text"
              />
              <input
                placeholder="Enter Your Email"
                onChange={handleChange}
                className="block mt-8 outline-none mx-auto w-[80%]  p-2 rounded-md "
                type="text"
              />
              <div className="w-full mx-auto items-center flex justify-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-[80%] mt-6 mb-[10%] mx-auto p-2 rounded-md text-[#fff] font-semibold bg-mid-dark "
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-sm text-center text-[#fff] m-4">
              No Account ? Create a new One
              <span
                className="ml-2 text-[#000]
              cursor-pointer font-semibold hover:text-[#01f]"
              >
                <Link to="/signup">Click Here</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
