import React, { useEffect, useState } from "react";
import { db } from "../../Database/Firebase-config";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";


export default function Delete() {
  const [facility, setFacility] = useState([])

  const get_facility_data = async () => {
     
  const facilitySnapshot = await getDocs(collection(db, "Facility"));
  const facilityList = facilitySnapshot.docs.map((doc) => doc.data());
  setFacility(facilityList)
  }

  const onDelete = async (e, facility_name) => {
    e.preventDefault();
    console.log(facility_name)

    await deleteDoc(doc(db, "Facility", facility_name)).then((result) => {
      console.log(result)
    });

  }

  useEffect(() => {
    get_facility_data();
  }, [])
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {facility.map((item, index) => {
          return (
            <div
            className="row border border-dark rounded-4 mt-4"
            id="row_for_delete_card"
            key={index}
          >
            <div className="col p-3">
              <p>{item.facility_name}</p>
              <img
                src={item.Image}
                alt="image"
              />
            </div>
            <div className="col-md-5 mt-5">
              <button className="btn btn-primary" onClick={(e) => {onDelete(e, item.facility_name)}}>Delete</button>
            </div>
          </div>

          )
          

        })}
      
      </div>
     
   
    </div>
  );
}
