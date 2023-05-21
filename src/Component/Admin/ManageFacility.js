import React, { useEffect, useState, useContext } from "react";
import { db } from "../../Database/Firebase-config";
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContex";
import { Modal, Button } from "react-bootstrap";
import Create from "../Admin/Create"; // Import the CreateFacilityForm component

export default function ManageFacility() {
  const [facilityList, setFacilityList] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false); // State to control the visibility of the create facility form

  const get_facility_data = async () => {
    const facilitySnapshot = await getDocs(collection(db, "Facility"));
    const facilities = facilitySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFacilityList(facilities);
    console.log(facilities);
  };

  const onDelete = async (facilityId) => {
    try {
      await deleteDoc(doc(db, "Facility", facilityId));
      console.log(`Facility '${facilityId}' deleted successfully.`);
      get_facility_data();
    } catch (error) {
      console.error(`Error deleting facility '${facilityId}':`, error);
    }
  };

  useEffect(() => {
    const handleCategory = async () => {
      const roleDocRef = doc(db, "users", currentUser.uid);
      const roleDocSnap = await getDoc(roleDocRef);
      const roleData = roleDocSnap.data();

      setCategory(roleData.category);
    };

    handleCategory();

    get_facility_data();
  }, []);

  const handleClose = () => setShowCreateForm(false);
  const handleShow = () => setShowCreateForm(true);

  const handleRefresh = () => {
    get_facility_data();
  };

  return (
    <div className="mt-5">
      <div className="col-8 pt-3">
        <div className="d-flex align-items-center mb-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search facility"
            className="form-control mr-2"
          />

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
        <div className="mb-3">{/* Content below the buttons */}</div>
      </div>

      {/* Render the create facility form as a modal */}
      <Modal show={showCreateForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Facility</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Create onClose={handleClose} getFacilityData={get_facility_data} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <table className="booking-table mt-5 mb-5" align="center">
        <thead>
          <tr>
            <th>facility_name</th>
            <th>Image</th>
            <th>Category</th>
            <th>Description</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!category
            ? facilityList
                .filter((item) => item.facility_name.includes(searchQuery))
                .map((facility) => {
                  return (
                    <tr key={facility.id}>
                      <td>{facility.facility_name}</td>
                      <td>
                        <img
                          src={facility.Image}
                          width="50"
                          alt={facility.facility_name}
                        />
                      </td>
                      <td>{facility.Category}</td>
                      <td>{facility.Description}</td>

                      <td>
                        <span>
                          <Link
                            to="/admin/Edit"
                            state={facility}
                            className="btn btn-success"
                          >
                            Edit
                          </Link>
                        </span>
                        <span>
                          <button
                            className="btn mt-2"
                            onClick={() => onDelete(facility.id)}
                          >
                            Delete
                          </button>
                        </span>
                      </td>
                    </tr>
                  );
                })
            : facilityList
                .filter(
                  (item) =>
                    item.Category === category &&
                    item.facility_name.includes(searchQuery)
                )
                .map((facility) => {
                  return (
                    <tr key={facility.id}>
                      <td>{facility.facility_name}</td>
                      <td>
                        <img
                          src={facility.Image}
                          width="50"
                          alt={facility.facility_name}
                        />
                      </td>
                      <td>{facility.Category}</td>
                      <td>{facility.Description}</td>

                      <td>
                        <span>
                          <Link
                            to="/admin/Edit"
                            state={facility}
                            className="btn btn-success"
                          >
                            Edit
                          </Link>
                        </span>
                        <span>
                          <button
                            className="btn mt-1"
                            onClick={() => onDelete(facility.id)}
                          >
                            Delete
                          </button>
                        </span>
                      </td>
                    </tr>
                  );
                })}
        </tbody>
      </table>
    </div>
  );
}
