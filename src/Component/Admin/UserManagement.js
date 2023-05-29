import React, { useState, useEffect } from "react";
import { collection, query, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";
import { Link } from "react-router-dom";
import "./user.css";
import AdminHome from "./AdminHome";

function UserManagement() {
  const [users, setUsers] = useState([]);

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
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <AdminHome />
        </div>
        <div className="col">
          <div className="d-flex justify-content-center mt-5">
            <Link
              to="/admin/add_subadmin"
              state={users}
              className="btn btn-success col-md-3"
              style={{ width: "100px" }}
            >
              Add
            </Link>
          </div>

          <table
            className="booking-table mt-3"
            align="center"
            style={{ width: "80%", height: "auto" }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Category</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.Name}</td>
                  <td>{user.email}</td>
                  <td>{user.category}</td>
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
                      className="btn btn-danger mt-1 delete-button"
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
      </div>
    </div>
  );
}

export default UserManagement;
