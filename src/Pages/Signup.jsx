import React, { useState } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/images/user.png";
import login from "../assets/images/login.png";
import { createUser } from "../api/user";
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
  });
  const registerUser = async (e) => {
    e.preventDefault();
    createUser(user);
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
            <form
              method="post"
              onSubmit={registerUser}
              className="mx-auto w-[90%]"
            >
              <input
                placeholder="Full Name"
                onChange={(e) => setUser({ name: e.target.value })}
                value={user.name}
                className="block mt-8 outline-none mx-auto w-[80%]  p-2 rounded-md "
                type="text"
                name="name"
              />
              <input
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ email: e.target.value })}
                className="block mt-8 outline-none mx-auto w-[80%]  p-2 rounded-md "
                type="email"
                name="email"
              />
              <input
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ password: e.target.value })}
                className="block mt-8 outline-none mx-auto w-[80%]  p-2 rounded-md "
                type="password"
                name="password"
              />
              <div className="w-full mx-auto items-center flex justify-center">
                <button
                  type="submit"
                  className="w-[80%] mt-6 mb-[10%] mx-auto p-2 rounded-md text-[#fff] font-semibold bg-mid-dark "
                >
                  Register
                </button>
              </div>
            </form>
            <p className="text-sm text-center text-[#fff] m-4">
              Already have an account ?
              <span
                className="ml-2 text-[#000]
              cursor-pointer font-semibold hover:text-[#01f]"
              >
                <Link to="/signup">Login Here</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
