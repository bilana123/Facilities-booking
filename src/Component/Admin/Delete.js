import React, { useEffect, useState } from "react";
import { db } from "../../Database/Firebase-config";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Create from "./Create";

import { Button, Box, Typography } from "@mui/material";
//import { Create } from "@mui/icons-material";
//import { Edit } from "@mui/icons-material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Delete() {
  const [facilityList, setFacilityList] = useState([]);

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
    get_facility_data();
  }, []);

  return (
    <div>
      <Button onClick={handleOpen}>Create</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            minWidth: "300px",
          }}
        >
          <Create CloseEvent={handleClose} />
        </Box>
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
          {facilityList.map((facility) => {
            return (
              <tr key={facility.id}>
                <td>{facility.facility_name}</td>
                <td>
                  <img src={facility.Image} width="50" />
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
