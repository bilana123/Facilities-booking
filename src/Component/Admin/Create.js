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
    <div
      className="container justify-content-center mt-5"
      id="id_for_admin_div"
    >
      <div className="row">
        <div className="col mt-5">
          <h1 className="Create">Create Facilities</h1>
        </div>
      </div>
      <br />
      <div
        className="border border-secondary rounded p-10"
        style={{ height: "400px" }}
      >
        <div
          className="border border-secondary rounded p-2"
          style={{ height: "100%" }}
        >
          <div className="row ">
            <div className="col d-flex justify-content-center">
              <form onSubmit={handleSubmit} style={{ padding: "0" }}>
                <div className="group ">
                  <label htmlFor="facilityname">Facility Name</label>
                  <input
                    type="text"
                    name="facilityname"
                    className="form-control rounded-3"
                    id="facilityname"
                    placeholder="Alpha Hall"
                    value={facility}
                    onChange={(e) => setFacility(e.target.value)}
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="group">
                  <label htmlFor="Selectimage">Select Image</label>
                  <input
                    type="file"
                    name="selectimage"
                    className="form-control rounded-3"
                    onChange={ImgHandler}
                    id="file"
                    placeholder="insert image"
                  />
                </div>
                <label className="form-label">
                  <span
                    className={`form-span ${department && "form-span--bold"}`}
                    // add form-span--bold class if department is not empty
                  >
                    <br></br>
                    Department:
                  </span>
                  <select
                    value={department}
                    onChange={(e) => setdepartment(e.target.value)}
                    className="form-input"
                  >
                    <option value="">Select department</option>
                    <option value="IT">IT</option>
                    <option value="sports">sport</option>
                    <option value="HR ">HR</option>
                  </select>
                </label>
                <label className="form-label">
                  <span
                    className={`form-span ${Facilities && "form-span--bold"}`}
                    // add form-span--bold class if department is not empty
                  >
                    <br></br>
                    Facilities:
                  </span>
                  <select
                    value={Facilities}
                    onChange={(e) => setfacilities(e.target.value)}
                    className="form-input"
                  >
                    <option value="">Select Facilities</option>
                    <option value="Halls">Halls</option>
                    <option value="Sports">Sports</option>
                    <option value="Classrooms">Classrooms</option>
                  </select>
                </label>
                <div className="group">
                  <label htmlFor="time">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    className="form-control rounded-3"
                    id="description"
                  ></textarea>
                </div>
                <br></br>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    type="submit"
                    className="btn"
                    onClick={handleSubmit}
                    style={{
                      backgroundColor: "green",
                      fontSize: "12px",
                      padding: "5px 10px",
                      width: "100px",
                    }}
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
