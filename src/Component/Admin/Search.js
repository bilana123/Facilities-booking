import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db, { getFacility } from "../firebase";
import { Link } from "react-router-dom";

export default function Search() {
  const { id } = useParams();
  const [FacilityList, setFacilityList] = useState([]);

  console.log(id);

  useEffect(() => {
    getFacility(db).then((a) => {
      setFacilityList(a);
    });
  }, []);

  return (
    <>
      <div class="row mt-4" id="mainrow">
        {FacilityList.filter((Facility) =>
          Facility.facility_name.includes(id)
        ).map((pro) => (
          <div class="col">
            <div class="card">
              <img
                src={pro.Facility_image}
                class="card-img-top"
                height="200"
                alt="..."
              />

              <div class="card-body">
                <h5 class="card-title">{pro.facility_name}</h5>

                <Link to={`/detail/ ${pro.facility_id}`} class="btn" state={pro}>
                  Book now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
