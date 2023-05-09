import React, { useState } from "react";
import { Link } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

function Editsubadmin(props) {
  const [users, setusers] = useState(props.location.state.users);
  const [email, setemail] = useState("");
  const [displayName, setdisplayName] = useState("");
  const [department, setdepartment] = useState("");
  const [createdAt, setcreatedAt] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Implement your update functionality here
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = {
      id: users.id,
      email: email,
      displayName: displayName,

      department: department,
      createdAt: createdAt,
    };
    console.log(data.id);
    console.log(data.name);
    const collectionRef = doc(db, "users", "SoLT4MTdSQVwdgBuFXunHp519kx2");
    await updateDoc(collectionRef, { email: data.name }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Display Name:</label>
          <input
            type="text"
            name="displayName"
            value={users.displayName}
            onChange={(e) =>
              setusers({ ...users, displayName: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={users.email}
            onChange={(e) => setemail({ ...users, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={users.department}
            onChange={(e) => setdepartment({ ...users, email: e.target.value })}
            required
          />
        </div>
        <button type="submit">Save</button>
        <Link to="/admin/user-management" className="btn btn-secondary">
          Cancel
        </Link>
      </form>
    </div>
  );
}
export default Editsubadmin;
