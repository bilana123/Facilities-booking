import React, { useState, useEffect, useContext } from "react";
import {
  collection,
  query,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../Database/Firebase-config";
import { Link } from "react-router-dom";
import "./user.css";
import { AuthContext } from "../Context/AuthContex";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [category, setCategory] = useState("");

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.uid);

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const usersQuery = query(usersCollection);
      const snapshot = await getDocs(usersQuery);
      const usersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsers(usersData);
    };
    const handleCategory = async () => {
      const roleDocRef = doc(db, "users", currentUser.uid);
      const roleDocSnap = await getDoc(roleDocRef);
      const roleData = roleDocSnap.data();
      console.log(roleData);
      setCategory(roleData.department);
    };

    fetchUsers();
    handleCategory();
  }, []);

  return (
    <div>
      <Link to="/admin/add_subadmin" state={users} className="btn btn-success">
        Add
      </Link>

      <table
        className="booking-table mt-5 "
        align="center"
        style={{ width: "80%", height: "auto" }}
      >
        <thead>
          <tr>
            <th>Display Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.displayName}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>{user.createdAt.toDate().toLocaleString()}</td>
              <td>
                <Link
                  to="/admin/edit-subadmin"
                  state={user}
                  className="btn btn-success"
                >
                  Edit
                </Link>
                <button
                  className="btn mt-1"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
