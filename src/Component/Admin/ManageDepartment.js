import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./manage.css";
import AddDepartment from "../Admin/AddDepartment";

function ManageDepartment({ category }) {
  const [departments, setDepartments] = useState([]);
  const [showAddDepartment, setShowAddDepartment] = useState(false);

  const getDepartmentsData = async () => {
    const departmentsSnapshot = await getDocs(collection(db, "departments"));
    const departmentsList = departmentsSnapshot.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data(),
    }));
    setDepartments(departmentsList);
  };

  useEffect(() => {
    getDepartmentsData();
  }, []);

  const onDelete = async (departmentId) => {
    try {
      await deleteDoc(doc(db, "departments", departmentId));
      console.log(`Department '${departmentId}' deleted successfully.`);
      // fetch the updated data and update the state
      getDepartmentsData();
    } catch (error) {
      console.error(`Error deleting department '${departmentId}':`, error);
    }
  };
  const handleRefresh = () => {
    getDepartmentsData();
  };

  const handleClose = () => setShowAddDepartment(false);
  const handleShow = () => setShowAddDepartment(true);

  return (
    <div>
      <div className="col-7 mt-5">
        <div className="add">
          <Button variant="primary" className="btn btn-sm" onClick={handleShow}>
            Add
          </Button>

          <Button
            variant="primary"
            className="btn btn-sm ml-2"
            onClick={handleRefresh}
          >
            Refresh
          </Button>
        </div>
      </div>
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
                    className="btn btn-danger mt-1 delete-button"
                    onClick={() => onDelete(dept.uid)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal show={showAddDepartment} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Programme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddDepartment
            onClose={handleClose}
            getFacilityData={getDepartmentsData}
          />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default ManageDepartment;
