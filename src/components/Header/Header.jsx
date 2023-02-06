import React, { useState } from "react";
import "./Header.css";
import { HiMenuAlt4 } from "react-icons/hi";
import { BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenu, setIsMenu] = useState(true);
  const menuStatus = () => {
    if (isMenu) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  };
  return (
    <div className="block  text-text-header w-full  z-50 shadow-md">
      <div
        className="h-[60px] top-0 left-0 right-0 mx-auto shadow-sm w-full
       text-white  grid grid-cols-12"
      >
        <div className=" my-auto w-full col-span-4 ">
          <h1 className="flex pl-4 w-full text-[#ec2b2b] font-bold ml-2 mr-2 text-left font-fancy text-3xl cursor-pointer">
            Pets - Mart
          </h1>
        </div>

        <div className="col-span-8 items-end place-items-end text-sm  flex mr-6 w-full my-auto justify-around font-medium font-primary   text-[#000] ">
          <div className="w-full justify-evenly mx-auto flex sm:invisible md:invisible">
            <h1>Home</h1>
            <Link to="/pets">
              <h1 className="cursor-pointer">All Pets</h1>
            </Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">
              <button className="ml-2 mr-2  bg-button-primary text-[#fff]  rounded-md pl-2 pr-2 p-1 ">
                Register
              </button>
            </Link>
            <h1>Cart</h1>
          </div>

          <div className="md:visible my-auto invisible sm:visible cursor-pointer">
            {isMenu ? (
              <HiMenuAlt4 color="#000" size={25} onClick={menuStatus} />
            ) : (
              <BiHide color="#000" size={25} onClick={menuStatus} />
            )}
          </div>
        </div>
      </div>
      <div>
        {isMenu ? (
          <></>
        ) : (
          <div className="text-[#000] [h-300px] w-[100%] top-[60px] left-0 right-0 sticky text-white">
            <h1 className="pl-10 font-bold  p-4  w-[100%] cursor-pointer">
              Hello
            </h1>
            <h1 className="pl-10 font-bold  p-4  w-[100%] cursor-pointer">
              Hello
            </h1>
            <h1 className="pl-10 font-bold  p-4  w-[100%] cursor-pointer">
              Hello
            </h1>
            <h1 className="pl-10 font-bold p-4 cursor-pointer mb-4 w-[100%]">
              Hello
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
