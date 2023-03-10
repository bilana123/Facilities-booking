//import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Login} from "./Component/Login";
import {Register} from './Component/Register';
import Navbar from "./Home/Navbar"; 
//import TopNavbar2 from "./Home/TopNavbar2";
//import logo from './jnec/public/logo.png'; 
//import { auth, db } from '.Database/Firebase.js';

function App() {
 return(

 <>
      <BrowserRouter>
      <Navbar/>
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>} />
            
            </Routes> 
         
      </BrowserRouter>
 
 </>

 
  );
}
export default App;