import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";
import "./Booking.css";

export default function Booking_Detail() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const UsersSnapshot = await getDocs(collection(db, "Users"));
      const UsersList = UsersSnapshot.docs.map((doc) => doc.data());
      setUsers(UsersList);
    };

    getUsers();
  }, []);

  console.log(Users);

  return (
    <div>
      <table className="booking-table mt-5">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Location</th>
            <th>Department</th>
            <th>Start_Time</th>
            <th>End_Time</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user) => {
            return (
              <tr>
                <td>{user.Username}</td>
                <td>{user.Email}</td>
                <td>{user.Location}</td>
                <td>{user.Department}</td>
                <td>{user.Start_Time}</td>
                <td>{user.End_Time}</td>
                <td>{user.date}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
