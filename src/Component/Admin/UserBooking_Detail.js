import React, { useState, useEffect, useContext } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../Database/Firebase-config";
import emailjs from "emailjs-com";
import "./Booking.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContex";

export default function UserBooking_Detail() {
  const { currentUser } = useContext(AuthContext);
  const [Users, setUsers] = useState([]);
  const [category, setCategory] = useState("");
  const [showButtons, setShowButtons] = useState(true);
  //const sendApprovalEmail = (user) => {
  //  const templateParams = {
  //  to_email: user.email,
  //  from_email: "05210220.jnec@rub.edu.bt",
  //  subject: "Your booking request has been approved",
  //  message: `Hi ${user.name}, your booking request for facility ${user.facility_Name} has been approved.`,
  // };
  //  emailjs
  //.send(
  //  "service_11c12c7",
  //  "template_xzb7e69",
  //   templateParams,
  //   "KMZOReDKneLwcfgTZ"
  //  )
  //  .then((response) => {
  //    console.log("Email sent successfully!", response.text);
  //  })
  //   .catch((error) => {
  //    console.error("Error sending email:", error);
  //   });
  // };

  // const sendRejectionEmail = (user) => {
  // const templateParams = {
  //  to_email: user.email,
  //  from_email: "05210220.jnec@rub.edu.bt",
  //  subject: "Your booking request has been rejected",
  // message: `Hi ${user.name}, your booking request for facility ${user.facility_Name} has been rejected.`,
  // };
  //  emailjs
  // .send(
  //  "service_11c12c7",
  //  "template_zw1l2lf",
  //  templateParams,
  //   "KMZOReDKneLwcfgTZ"
  //  )
  // .then((response) => {
  //  console.log("Email sent successfully!", response.text);
  //  })
  //  .catch((error) => {
  //    console.error("Error sending email:", error);
  //  });
  //};

  const handelapprove = async (e, id, email) => {
    e.preventDefault();

    const collectionRef = doc(db, "Users", id);
    await updateDoc(collectionRef, { status: "approved" }).catch((err) => {
      console.log(err);
    });

    // Update state with new data
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.uid === id ? { ...user, status: "approved" } : user
      )
    );

    // Send email to user
    const user = Users.find((user) => user.uid === id);
    // sendApprovalEmail(user);
    setShowButtons(false);
  };

  const handelreject = async (e, id) => {
    e.preventDefault();

    const collectionRef = doc(db, "Users", id);
    await updateDoc(collectionRef, { status: "rejected" }).catch((err) => {
      console.log(err);
    });

    // Update state with new data
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.uid === id ? { ...user, status: "rejected" } : user
      )
    );

    // Send email to user
    const user = Users.find((user) => user.uid === id);
    //  sendRejectionEmail(user);
    setShowButtons(false);
  };

  useEffect(() => {
    const getUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "Users"));
      const usersList = usersSnapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));

      // sort users by id in ascending order
      usersList.sort((a, b) => a.uid.localeCompare(b.uid));

      setUsers(usersList);
    };
    const handleCategory = async () => {
      const roleDocRef = doc(db, "users", currentUser.uid);
      const roleDocSnap = await getDoc(roleDocRef);
      const roleData = roleDocSnap.data();
      console.log(roleData);
      setCategory(roleData.department);
    };

    getUsers();
    handleCategory();
  }, []);

  return (
    <div>
      <table
        className="booking-table mt-5 "
        align="center"
        style={{ width: "80%", height: "auto" }}
      >
        <thead>
          <tr>
            <th>Facility_Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact_No</th>
            <th>programme</th>
            <th>Start_Time</th>
            <th>End_Time</th>
            <th>Start_date</th>
            <th>End_date</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {Users.filter((item) => category === item.category).map((user) => {
            return (
              <tr>
                <td>{user.facility_Name}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contactNo}</td>
                <td>{user.programme}</td>
                <td>{user.startTime}</td>
                <td>{user.endTime}</td>
                <td>{user.startDate}</td>
                <td>{user.endDate}</td>

                <td>
                  {showButtons && (
                    <>
                      <span>
                        <Link
                          to=""
                          onClick={(e) => {
                            handelapprove(e, user.uid, user.email);
                          }}
                          className="btn btn-success"
                        >
                          Approve
                        </Link>
                      </span>
                      <span>
                        <button
                          className="btn btn-sucess mt-5"
                          onClick={(e) => {
                            handelreject(e, user.uid);
                          }}
                        >
                          Reject
                        </button>
                      </span>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
