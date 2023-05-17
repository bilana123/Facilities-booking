import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";
import { Link } from "react-router-dom";
import "./manage.css";
function ManageDepartment({ category }) {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const get_departments_data = async () => {
      const departmentsSnapshot = await getDocs(collection(db, "departments"));
      const departmentsList = departmentsSnapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));
      setDepartments(departmentsList);
    };
    get_departments_data();
  }, []);

  const onDelete = async (DepartmentsId) => {
    try {
      await deleteDoc(doc(db, "departments", DepartmentsId));
      console.log(`Department '${DepartmentsId}' deleted successfully.`);
      // fetch the updated data and update the state
      const departmentsSnapshot = await getDocs(collection(db, "departments"));
      const departmentsList = departmentsSnapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));
      setDepartments(departmentsList);
    } catch (error) {
      console.error(`Error deleting department '${DepartmentsId}':`, error);
    }
  };

  return (
    <div>
      <Link
        to="/admin/add_department"
        className="btn btn-primary btn-sm mt-5 col-lg-2 w-auto"
      >
        Add
      </Link>
      <table
        className="booking-table mt-3"
        align="center"
        style={{ width: "80%", height: "20%" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments
            .filter((item) => category === item.category)
            .map((dept) => (
              <tr key={dept.uid}>
                <td>{dept.name}</td>
                <td>
                  <button
                    className="btn mt-2"
                    onClick={() => onDelete(dept.uid)}
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

export default ManageDepartment;
