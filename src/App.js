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
import Delete from "./Component/Admin/ManageFacility";
import { AuthContext } from "./Component/Context/AuthContex";
import Sport from "./Component/Pages/Sport";
import Classroom from "./Component/Pages/Classroom";
import HallCard from "./Component/Pages/HallCard";
import Edit from "./Component/Admin/Edit";
import { useContext } from "react";
import Protectedroute from "./Routes/Protectedroute";
import UserBooking_Detail from "./Component/Admin/UserBooking_Detail";
//import { FirebaseApp } from "firebase/app";

import UserManagement from "./Component/Admin/UserManagement";
import Editsubadmin from "./Component/Admin/Editsubadmin";
import AddDepartment from "./Component/Admin/AddDepartment";
import ManageDepartment from "./Component/Admin/ManageDepartment";
import ManageFacility from "./Component/Admin/ManageFacility";
import Search from "./Component/logincomp/Search";
import ForgotPassword from "./Component/logincomp/ForgotPassword";

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
            <Route path="/admin/add_department" element={<AddDepartment />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/admin/add_subadmin" element={<Signup />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/" element={<Home />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/admin/Edit" element={<Edit />} />
          <Route path="/admin/create" element={<Create />} />
          <Route path="/admin/delete" element={<ManageFacility />} />
          <Route path="Sport" element={<Sport />} />
          <Route path="/admin/booking" element={<UserBooking_Detail />} />
          <Route path="Classroom" element={<Classroom />} />
          <Route path="HallCard" element={<HallCard />} />
          <Route path="/manageDepartment" element={<ManageDepartment />} />

          <Route path="/search" element={<Search />} />

          <Route path="/manage" element={<UserManagement />} />
          <Route path="/admin/edit-subadmin" element={<Editsubadmin />} />
          <Route path="/forgot" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
