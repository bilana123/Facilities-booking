import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const usersList = usersSnapshot.docs.map((doc) => doc.data());
      setUsers(usersList);
    };

    getUsers();
  }, []);

  console.log(users);

  return (
    <div>
      <table
        className="booking-table mt-5 "
        align="center"
        style={{ width: "80%", height: "auto" }}
      >
        <thead>
          <tr>
            <th>Email</th>
            <th>Display Name</th>
            <th>Department</th>
            <th>CreatedAt</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.displayName}</td>
              <td>{user.department}</td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
