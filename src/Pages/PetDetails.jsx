import React from "react";
import { useParams } from "react-router-dom";
import PetData from "../assets/data/pets";
import { AiFillStar } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useRef } from "react";
import Booking from "../components/Booking/Booking";
const PetDetails = () => {
  const [petRating, setPetRating] = useState();
  const date = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const { id } = useParams();
  const pet = PetData.find((pet) => pet.id === id);
  const { photo, name, species, birthYear, favFoods } = pet;
  const reviewMsgRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    alert(`${reviewText} and ${petRating}`);
  };
  return (
    <div className="grid grid-cols-12 m-4 w-full font-primary">
      <div className="col-span-7 mx-auto">
        <div className="image-container ">
          <img className="rounded-lg" src={photo} alt={name} />
        </div>
        <div className="description shadow-md p-2 mb-4 mt-4">
          <div className="name ">
            <h1 className="uppercase text-lg font-semibold">{name}</h1>
          </div>
          <div className=" w-[50%] items-start ">
            <div className="w-full flex p-1 justify-between">
              <h1>location</h1>
              <h1>Reviews</h1>
            </div>
            <div className="flex w-full p-1 justify-between">
              <h1>Price</h1>
              <h1>{species}</h1>
              <h1>{birthYear}</h1>
            </div>
          </div>
          <div className="name mt-10 w-[50%] mb-4">
            <div className="w-full mt-2">
              <h1 className=" text-lg font-semibold">Description</h1>
            </div>
            <div className="w-full mt-2">
              <h1 className=" text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                autem ducimus aspernatur fugiat?
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full shadow-md p-2">
          <div className="reviews">
            <h1 className="text-lg font-semibold">
              Reviews <span>(2 Reviews)</span>
            </h1>
          </div>
          <div className="rating-demo mt-2 mb-2 flex w-[60%]">
            <h1 onClick={() => setPetRating(1)} className="flex ml-2">
              1
              <span className="my-auto ml-1 mr-1">
                <AiFillStar color="orange" />
              </span>
            </h1>
            <h1 onClick={() => setPetRating(2)} className="flex ml-2">
              2
              <span className="my-auto ml-1 mr-1">
                <AiFillStar color="orange" />
              </span>
            </h1>
            <h1 onClick={() => setPetRating(3)} className="flex ml-2">
              3
              <span className="my-auto ml-1 mr-1">
                <AiFillStar color="orange" />
              </span>
            </h1>
            <h1 onClick={() => setPetRating(4)} className="flex ml-2">
              4
              <span className="my-auto ml-1 mr-1">
                <AiFillStar color="orange" />
              </span>
            </h1>
            <h1 onClick={() => setPetRating(4)} className="flex ml-2">
              5
              <span className="my-auto ml-1 mr-1">
                <AiFillStar color="orange" />
              </span>
            </h1>
          </div>
          <div className="share bg-[#fff] p-2 border rounded-xl flex w-[80%] justify-between">
            <form
              className="flex w-full justify-between"
              onSubmit={handleSubmit}
              action=""
            >
              <input
                ref={reviewMsgRef}
                className="outline-none w-full "
                type="text"
                placeholder="share your thoughts"
                name=""
                id=""
                required
              />
              <button
                type="submit"
                className="bg-button-primary pl-2 pr-2 p-1 border-[1px] rounded-3xl"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="user-reviews w-full flex justify-between  mt-4">
            <div className="user-review w-[40%] justify-start flex">
              <div className="image  m-2 my-auto">
                <FaUserCircle size={30} />
              </div>
              <div className="details my-auto m-2 w-full">
                <h1>John Doe</h1>
                <h1>{date.toLocaleDateString()}</h1>
                <h1 className="text-sm mt-1">Lorem ipsum dolor sit.</h1>
              </div>
            </div>
            <div className="stars my-auto m-2">5</div>
          </div>
          <div className="user-reviews w-full flex justify-between  mt-4">
            <div className="user-review w-[40%] justify-start flex">
              <div className="image  m-2 my-auto">
                <FaUserCircle size={30} />
              </div>
              <div className="details my-auto m-2 w-full">
                <h1>John Doe</h1>
                <h1>{date.toLocaleDateString()}</h1>
                <h1 className="text-sm mt-1">Lorem ipsum dolor sit.</h1>
              </div>
            </div>
            <div className="stars my-auto m-2">5</div>
          </div>
        </div>
      </div>
      {/* ==========BOOKING==================== */}
      <Booking />
      {/* ==========BOOKING==================== */}
    </div>
  );
};

export default PetDetails;
