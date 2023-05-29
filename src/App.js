import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Component/logincomp/Login";
import Signup from "./Component/Registercomp/Signup";
import Navbar from "./Home/Navbar";
import Aboutus from "./Component/Pages/Aboutus";
import Home from "./Component/Pages/Home";
import Footer from "./Component/Pages/Footer";
import Facilities from "./Component/Pages/Facilities";
import AdminHome from "./Component/Admin/AdminHome";
import Create from "./Component/Admin/Create";
import UserBooking_Detail from "./Component/Admin/UserBooking_Detail";
import Sport from "./Component/Pages/Sport";
import Classroom from "./Component/Pages/Classroom";
import HallCard from "./Component/Pages/HallCard";
import Edit from "./Component/Admin/Edit";
import Protectedroute from "./Routes/Protectedroute";
import UserManagement from "./Component/Admin/UserManagement";
import Editsubadmin from "./Component/Admin/Editsubadmin";
import AddDepartment from "./Component/Admin/AddDepartment";
import ManageDepartment from "./Component/Admin/ManageDepartment";
import ManageFacility from "./Component/Admin/ManageFacility";
import ForgotPassword from "./Component/logincomp/ForgotPassword";
import AdminDasboard from "./Component/Admin/AdminDasboard";
import { AuthContext } from "./Component/Context/AuthContex";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<Protectedroute user={currentUser} />}>
            <Route path="/admin/add_department" element={<AddDepartment />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/managefacility" element={<ManageFacility />} />
            <Route path="/admin/create" element={<Create />} />
            <Route path="/admin/booking" element={<UserBooking_Detail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/admin/add_subadmin" element={<Signup />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/" element={<Home />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/admin/Edit" element={<Edit />} />
          <Route path="/admin/user" element={<AdminDasboard />} />

          <Route path="Sport" element={<Sport />} />

          <Route path="Classroom" element={<Classroom />} />
          <Route path="HallCard" element={<HallCard />} />
          <Route path="/manageDepartment" element={<ManageDepartment />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          <Route path="/manage" element={<UserManagement />} />
          <Route path="/admin/edit-subadmin" element={<Editsubadmin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
