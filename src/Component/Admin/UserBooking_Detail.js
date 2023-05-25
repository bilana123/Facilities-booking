import React, { useState, useEffect, useContext } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  deleteDoc,
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

  const [searchQuery, setSearchQuery] = useState(""); // Added searchQuery state variable
  const [filteredUsers, setFilteredUsers] = useState([]);

  // const sendApprovalEmail = (user) => {
  //   const templateParams = {
  //     to_email: user.email,
  //     from_email: "05210220.jnec@rub.edu.bt",
  //     subject: "Your booking request has been approved",
  //     message: `Hi ${user.name}, your booking request for facility ${user.facility_Name} has been approved. from ${user.start_Time} to ${user.endTime}`,
  //   };
  //   emailjs
  //     .send(
  //       "service_11c12c7",
  //       "template_xzb7e69",
  //       templateParams,
  //       "KMZOReDKneLwcfgTZ"
  //     )
  //     .then((response) => {
  //       console.log("Email sent successfully!", response.text);
  //     })

  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // };

  // const sendRejectionEmail = (user) => {
  //   const templateParams = {
  //     to_email: user.email,
  //     from_email: "05210220.jnec@rub.edu.bt",
  //     subject: "Your booking request has been rejected",
  //     message: `Hi ${user.name}, your booking request for facility ${user.facility_Name}, has been approved.has been approved${user.start_Time},
  //     to ${user.endTime}`,
  //   };
  //   emailjs
  //     .send(
  //       "service_11c12c7",
  //       "template_xzb7e69",
  //       templateParams,
  //       "KMZOReDKneLwcfgTZ"
  //     )
  //     .then((response) => {
  //       console.log("Email sent successfully!", response.text);
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // };

  const handelapprove = async (e, id) => {
    e.preventDefault();
    const collectionRef = doc(db, "Users", id);
    await updateDoc(collectionRef, { status: "approved" }).catch((err) => {
      console.log(err);
    });
    alert("You have approved successfully");
    // Update state with new data
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.uid === id ? { ...user, status: "approved" } : user
      )
    );

    // Send email to user
    const user = Users.find((user) => user.uid === id);
    // sendApprovalEmail(user);
  };

  const handelreject = async (e, id) => {
    e.preventDefault();

    const collectionRef = doc(db, "Users", id);
    await updateDoc(collectionRef, { status: "rejected" }).catch((err) => {
      console.log(err);
    });
    alert("You have rejected successfully");
    // Update state with new data
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.uid === id ? { ...user, status: "rejected" } : user
      )
    );

    // Send email to user
    const user = Users.find((user) => user.uid === id);
    // sendRejectionEmail(user);
  };

  const onDelete = async (usersId) => {
    try {
      await deleteDoc(doc(db, "Users", usersId));
      console.log(`User '${usersId}' deleted successfully.`);
      // fetch the updated data and update the state
      const UsersSnapshot = await getDocs(collection(db, "Users"));
      const UsersList = UsersSnapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));
      setUsers(UsersList);
    } catch (error) {
      console.error(`Error deleting user '${usersId}':`, error);
    }
    alert("You have deleted successfully");
  };
  useEffect(() => {
    const filterUsers = () => {
      if (searchQuery === "") {
        // If the search query is empty, show all users
        setFilteredUsers(Users);
      } else {
        // Filter the users based on the search query
        const filtered = Users.filter((user) => {
          // Perform case-insensitive search on the desired fields
          const fieldsToSearch = [
            user.facility_Name,
            user.name,
            user.email,
            user.contactNo,
            user.programme,
            user.startTime,
            user.endTime,
            user.startDate,
            user.endDate,
          ];
          return fieldsToSearch.some((field) =>
            field.toLowerCase().includes(searchQuery.toLowerCase())
          );
        });
        setFilteredUsers(filtered);
      }
    };

    filterUsers();
  }, [Users, searchQuery]);

  useEffect(() => {
    const getUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "Users"));
      const usersList = usersSnapshot.docs.map((doc) => ({
        uid: doc.id,
        bookingTimestamp: doc.data().bookingTimestamp,
        ...doc.data(),
      }));

      // sort users by id in ascending order
      usersList.sort((a, b) => {
        const dateA = new Date(a.bookingTimestamp);
        const dateB = new Date(b.bookingTimestamp);
        return dateB - dateA;
      });

      setUsers(usersList);
    };
    const handleCategory = async () => {
      const roleDocRef = doc(db, "users", currentUser.uid);
      const roleDocSnap = await getDoc(roleDocRef);
      const roleData = roleDocSnap.data();
      console.log(roleData);
      setCategory(roleData.category);
    };

    getUsers();
    handleCategory();
  }, []);

  return (
    <div className="mb-5 ">
      <div className="input-group justify-content-end">
        <div className="col-md-3 mt-5 ml-6">
          <input
            type="text"
            className="form-control "
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="table-responsive mt-5">
        <table className="table table-striped table-bordered">
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
              <th>Status</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {!category
              ? filteredUsers.map((user) => {
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
                      <td>{user.status}</td>

                      <td>
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
                              className="btn btn-sucess mt-1"
                              onClick={(e) => {
                                handelreject(e, user.uid);
                              }}
                            >
                              Reject
                            </button>
                          </span>
                          <span>
                            <div className="">
                              <button
                                className="btn btn-danger mt-1  delete-button"
                                onClick={() => {
                                  onDelete(user.uid);
                                }}
                              >
                                Cancle
                              </button>
                            </div>
                          </span>
                        </>
                      </td>
                    </tr>
                  );
                })
              : filteredUsers
                  .filter((item) => category === item.category)
                  .map((user) => {
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
                        <td>{user.status}</td>
                        <td>
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
                                className="btn btn-sucess mt-1"
                                onClick={(e) => {
                                  handelreject(e, user.uid);
                                }}
                              >
                                Reject
                              </button>
                            </span>
                            <span>
                              <button
                                className="btn btn-sucess mt-1"
                                onClick={() => {
                                  onDelete(user.uid);
                                }}
                              >
                                Cancle
                              </button>
                            </span>
                          </>
                        </td>
                      </tr>
                    );
                  })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
