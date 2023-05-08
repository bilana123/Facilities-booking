import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getusers = async () => {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const usersList = usersSnapshot.docs.map((doc) => doc.data());
      setUsers(usersList);
    };

    getusers();
  }, []);

  console.log(users);

  return (
    <table className="booking-table mt-5" align="center">
      <thead>
        <tr>
          <th>email</th>
          <th>displayName</th>
          <th>department</th>
          <th>createdAt</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr>
              <td>{user.email}</td>
              <td>{user.displayName}</td>
              <td>{user.department}</td>
              <td>{user.createdAt}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
