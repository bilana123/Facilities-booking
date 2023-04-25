import React, { useEffect, useState } from "react";
import { db } from "../../Database/Firebase-config";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";

export default function Delete() {
  const [Facility, setFacility] = useState([]);

  const get_facility_data = async () => {
    const facilitySnapshot = await getDocs(collection(db, "Facility"));
    const facilityList = facilitySnapshot.docs.map((doc) => doc.data());
    setFacility(facilityList);
    console.log(facilityList); // add this line to check if the state is being updated
  };

  const onDelete = async (e, facility_name) => {
    e.preventDefault();
    console.log(facility_name);

    try {
      await deleteDoc(doc(db, "Facility", facility_name));
      console.log(`Facility '${facility_name}' deleted successfully.`);
      // fetch the updated data and update the state
      get_facility_data();
    } catch (error) {
      console.error(`Error deleting facility '${facility_name}':`, error);
    }
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
        </tr>
      </thead>
      <tbody>
        {Facility.map((Facility) => {
          return (
            <tr>
              <td>{Facility.facility_name}</td>
              <td>{Facility.Image}</td>
              <td>{Facility.Facilities}</td>
              <td>{Facility.Description}</td>
              <td>{Facility.Department}</td>
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  onDelete(e, Facility.facility_name);
                }}
              >
                Delete
              </button>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
