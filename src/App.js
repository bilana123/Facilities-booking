//import 'bootstrap/dist/css/bootstrap.min.css';
//import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Component/logincomp/Login";
import Signup from "./Component/Registercomp/Signup";

import Navbar from "./Home/Navbar";
//import TopNavbar2 from "./Home/TopNavbar2";
//import logo from './jnec/public/logo.png';
//import { auth, db } from '.Database/Firebase.js';
import Aboutus from "./Component/Pages/Aboutus";
import Home from "./Component/Pages/Home";
import Footer from "./Component/Pages/Footer";
import Facilities from "./Component/Pages/Facilities";
import AdminHome from "./Component/Admin/AdminHome";
import Create from "./Component/Admin/Create";
import Delete from "./Component/Admin/Delete";
import { AuthProvider } from "./Component/Context/AuthContex";
import HallCard from './Component/Pages/HallCard';
import Classroom from './Component/Pages/Classroom';
import Sport from './Component/Pages/Sport';
import Alpha from './Component/Pages/Alpha';
import { AuthContext } from "./Component/Context/AuthContex";
import Protectedroute from "./Routes/Protectedroute";
import { useContext } from "react";
import Booking_Detail from "./Component/Admin/Booking_Detail";
import Search from "./Component/Pages/Search";
//import { FirebaseApp } from "firebase/app";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<Protectedroute user={currentUser} />}>
            <Route path="/admin" element={<AdminHome />} />
          </Route>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Facilities" element={<Facilities />} />

          <Route path="/admin/create" element={<Create />} />
          <Route path="/admin/delete" element={<Delete />} />
          <Route path="Sport" element={<Sport />} />
          <Route path="/admin/booking" element={<Booking_Detail />} />
          <Route path="Classroom" element={<Classroom />} />
          <Route path="HallCard" element={<HallCard />} />
          <Route path="/facility_name" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
