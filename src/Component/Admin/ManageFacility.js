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

export default function ManageFacility() {
  const [facilityList, setFacilityList] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const get_facility_data = async () => {
    const facilitySnapshot = await getDocs(collection(db, "Facility"));
    const facilities = facilitySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFacilityList(facilities);
    console.log(facilities); // add this line to check if the state is being updated
  };

  const onDelete = async (facilityId) => {
    try {
      await deleteDoc(doc(db, "Facility", facilityId));
      console.log(`Facility '${facilityId}' deleted successfully.`);
      // fetch the updated data and update the state
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

  return (
    <div>
      <div className=" input-group justify-content-end ">
        <div className="mt-5 col-md-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search facility"
          />{" "}
        </div>
      </div>
      <div className=" col-md-2 ">
        <div className="justify-content-center">
          <Link
            to="/admin/create"
            className="btn btn-primary btn-sm  ml-3 btn-short"
          >
            Add
          </Link>
        </div>
      </div>
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
                            className="btn btn-danger mt-1  delete-button"
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
                            className="btn mt-5"
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
