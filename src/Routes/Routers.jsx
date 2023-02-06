import React from "react";
import { Routes, Route } from "react-router-dom";
import AllPets from "../Pages/AllPets";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PetDetails from "../Pages/PetDetails";
import Signup from "../Pages/Signup";
import ThankYou from "../Pages/ThankYou";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/pets" element={<AllPets />}></Route>
        <Route path="/pet-details/:id" element={<PetDetails />}></Route>
        <Route path="/thankyou" element={<ThankYou />}></Route>
      </Routes>
    </>
  );
};

export default Layout;
