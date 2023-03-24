import React from 'react'
import { Link } from "react-router-dom";
import bilana from "../../Component/Image/bilana.jpg";
import lhaden from "../../Component/Image/lhaden.jpg";
import neten from "../../Component/Image/neten.jpg";
import './Aboutus.css'

function Aboutus() {
  return (
    
    
    <div class="JNEC Facilities booking system " id="about_container">   
     <div class='container'>
            <h3>Mission</h3>
                    <p>Our Mission is to provide Students and <br></br> 
                    staff with a user-friendly andefficient plateform to book<br></br>
                    appointments,event and reservation. we understand how<br></br>
                    challenging it can be to  coordinate schedules <br></br>
                    and manage booking, we are committed to making it as easy as <br></br>
                    possible for all </p> <br></br>
           <h3>vission</h3>
                   <p>To provide a convenient and effective way for Staffs <br></br>
                    and Students to reserve and book the various Facilities.<br></br>
                    The purpose of this system is to simplify the booking<br></br>
                     process for Staffs and Students </p>.<br></br>
          
            
                     </div>

       <div class="center">
          <h3>Meet our Team</h3>
                <p>Our team consists of experience developers and designer who are <br></br>
                desicated to providing you with the baest possible experience<br></br>
                Our team member</p>
                </div>
                <div class="billu">
                  <img src={bilana} alt="bilana.jpg"  height="200px" width="100px" />
                  <img src={lhaden} alt="lhaden.jpg"  height="200px" width="100px"/>
                  <img src={neten} alt="neten.jpg"  height="200px" width="100px"/>
                  </div>
                
                 
          <link to="/aboutus"> 
         

    </link>
    </div>
      
  )
}

export default Aboutus
