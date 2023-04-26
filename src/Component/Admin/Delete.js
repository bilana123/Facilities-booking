import React, { useEffect, useState } from "react";
import { db } from "../../Database/Firebase-config";
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

export default function Delete() {
  const [facilityList, setFacilityList] = useState([]);

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

  const updateFacility = async (
    id,
    facility_name,
    Department,
    Description,
    Select_Image,
    Facilities
  ) => {
    const FacilityDoc = doc(db, "Facility", id);
    const newFields = { Facilities: Facilities + 1 };
    await updateDoc(FacilityDoc, newFields);
  };

  useEffect(() => {
    get_facility_data();
  }, []);

  return (
    <table className="booking-table mt-5">
      <thead>
        <tr>
          <th>facility_name</th>
          <th>Image</th>
          <th>Facilities</th>
          <th>Description</th>
          <th>Department</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {facilityList.map((facility) => {
          return (
            <tr key={facility.id}>
              <td>{facility.facility_name}</td>
              <td>{facility.Image}</td>
              <td>{facility.Facilities}</td>
              <td>{facility.Description}</td>
              <td>{facility.Department}</td>
              <td>
                <button className="btn" onClick={() => onDelete(facility.id)}>
                  Delete
                </button>
                <br></br>
                <button
                  className="btn"
                  onClick={() =>
                    updateFacility(
                      facility.id,
                      facility.facility_name,
                      facility.Department,
                      facility.Description,
                      facility.Select_Image,
                      facility.Facilities
                    )
                  }
                >
                  Update
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
