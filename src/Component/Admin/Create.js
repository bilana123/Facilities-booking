import React, { useState } from "react";
import "./Create.css";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../../Database/Firebase-config";

export default function Create() {
  const [facility, setFacility] = useState("");
  const [image, setImage] = useState(null);
  const [department, setdepartment] = useState("");
  const [Facilities, setfacilities] = useState("");
  const [description, setDescription] = useState("");

  const types = ["image/png", "image/jpeg"];
  const ImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (selectedFile && types.includes(selectedFile.type)) {
      // Generate a unique filename with a timestamp
      const filename = `${selectedFile.name}_${Date.now()}`;
      setImage({ file: selectedFile, name: filename });
    } else {
      setImage(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const uploadTask = ref(storage, `images/${image.name}`);
    await uploadBytes(uploadTask, image.file);
    console.log("file uploaded");

    // Get the download URL for the file
    const url = await getDownloadURL(uploadTask);
    console.log(url);
    console.log(`File URL: ${url}`);
    try {
      const docRef = await addDoc(collection(db, "Facility"), {
        facility_name: facility,
        Image: url,
        Department: department,
        Facilities: Facilities,
        Description: description,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div class="container justify-content-center" id="id_for_admin_div">
      <h5 class="Create m-2">Create Facilities</h5>
      <div class="row">
        <div class=""></div>
      </div>
      <br />
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-white shadow-lg p-1">
          <div class="row">
            <div class="col d-flex justify-content-center">
              <form onSubmit={handleSubmit} style={{ padding: "5" }}>
                <div class="form-group">
                  <label htmlFor="facilityname">Facility Name</label>
                  <input
                    type="text"
                    name="facilityname"
                    class="form-control rounded-3"
                    id="facilityname"
                    placeholder="Alpha Hall"
                    value={facility}
                    onChange={(e) => setFacility(e.target.value)}
                    style={{ width: "350px" }}
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="Selectimage">Select Image</label>
                  <input
                    type="file"
                    name="selectimage"
                    class="form-control rounded-3"
                    onChange={ImgHandler}
                    id="file"
                    placeholder="insert image"
                  />
                </div>
                <div class="form-group">
                  <label for="department">Department:</label>
                  <select
                    class="form-control"
                    id="department"
                    value={department}
                    onChange={(e) => setdepartment(e.target.value)}
                  >
                    <option value="">Select department</option>
                    <option value="IT">IT</option>
                    <option value="sports">sport</option>
                    <option value="HR ">HR</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="Facilities">Facilities:</label>
                  <select
                    class="form-control"
                    id="Facilities"
                    value={Facilities}
                    onChange={(e) => setfacilities(e.target.value)}
                  >
                    <option value="">Select Facilities</option>
                    <option value="Halls">Halls</option>
                    <option value="Sports">Sports</option>
                    <option value="Classrooms">Classrooms</option>
                  </select>
                </div>
                <div class="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    class="form-control rounded-3"
                    id="description"
                  ></textarea>
                </div>
                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    type="submit"
                    class="btn btn-success"
                    onClick={handleSubmit}
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
