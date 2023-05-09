import React from "react";
import "./Aboutus.css";

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-heading-container "></div>
      <div className="about-paragraph-container">
        <div className="paragraph-container">
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide students and staff with a user-friendly
            and efficient platform to book appointments, events, and
            reservations. We understand how challenging it can be to coordinate
            schedules and manage bookings, and we are committed to making it as
            easy as possible for everyone.
          </p>
        </div>
        <div className="paragraph-container">
          <h3>Our Vision</h3>
          <p>
            Our vision is to provide a convenient and effective way for staff
            and students to reserve and book various facilities. The purpose of
            this system is to simplify the booking process for staff and
            students.
          </p>
        </div>
      </div>

      <div className="team-container"></div>
    </div>
  );
}
export default AboutUs;
