


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import copy from '../Image/copy.jpg';

function Facilities() {
  return (
    <div className='container mt-5 p-5'>
      <div className="card mb-3 m-5 p-5" >
        <div className="row g-2">
          <div className="col-md-4 ">
          <img src={copy} className="img-fluid rounded-start w-100 h-100" alt="..."  />

          </div>
          <div className="col-md-8 ">
          
            <div className="card-body">
            <h5 class="card-title">MPH </h5>
            <div className="group">
                <label htmlFor="time">Start-Time</label>
                <input
                  type="time"
                  className="form-control rounded-3"
                  id="time"
                  placeholder="Enter time in HH:MM AM/PM format"
                />
                 <label htmlFor="time">End-Time</label>
                <input
                  type="time"
                  className="form-control rounded-3"
                  id="time"
                  placeholder="Enter time in HH:MM AM/PM format"
                />
                 
                <div className="group">
                <label htmlFor="date">date</label>
                <input
                  type="date"
                  className="form-control rounded-3"
                  id="date"
                  
                  placeholder="Enter time in MM/dd/yyyy format"
                 
                />
                <div className="col-md-2 mt-5">
                    <button className="btn btn-primary booked-btn" style={{fontSize: '10px'}}>BOOKED</button>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facilities;
