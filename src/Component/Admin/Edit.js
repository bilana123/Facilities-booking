import React, { useEffect, useState } from "react";
import { db } from "../../Database/Firebase-config";
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Edit() {
  const [facilityList, setFacilityList] = useState([]);
  const [editedData, setEditedData] = useState(null);

  const get_facility_data = async () => {
    const facilitySnapshot = await getDocs(collection(db, "Facility"));
    const facilities = facilitySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFacilityList(facilities);
    console.log(facilities);
  };

  const handleEdit = (facility) => {
    // set the edited data to the facility object
    setEditedData(facility);
  };

  const handleSave = async () => {
    try {
      // update the facility data in Firebase
      const facilityRef = doc(db, "Facility", editedData.id);
      await updateDoc(facilityRef, editedData);

      // set the edited data to null to exit the edit mode
      setEditedData(null);

      // refresh the facility data
      get_facility_data();
    } catch (error) {
      console.error("Error updating facility: ", error);
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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {facilityList.map((facility) => {
          const isEditing = editedData && editedData.id === facility.id;
          return (
            <tr key={facility.id}>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedData.facility_name}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        facility_name: e.target.value,
                      })
                    }
                  />
                ) : (
                  facility.facility_name
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedData.Image}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        Image: e.target.value,
                      })
                    }
                  />
                ) : (
                  facility.Image
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedData.Facilities}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        Facilities: e.target.value,
                      })
                    }
                  />
                ) : (
                  facility.Facilities
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedData.Description}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        Description: e.target.value,
                      })
                    }
                  />
                ) : (
                  facility.Description
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedData.Department}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        Department: e.target.value,
                      })
                    }
                  />
                ) : (
                  facility.Department
                )}
              </td>
              <td>{facility.Image}</td>
              <td>{facility.Facilities}</td>
              <td>{facility.Description}</td>
              <td>{facility.Department}</td>
              <td>
                {isEditing ? (
                  <button className="btn-save" onClick={handleSave}>
                    Save
                  </button>
                ) : (
                  <button
                    className="btn-edit"
                    color="info"
                    onClick={() => handleEdit(facility)}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
