import React, {useState} from "react";
import "./Create.css";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../../Database/Firebase-config";

export default function Create() {
 const [facility, setFacility] = useState("")
 const [image, setImage] = useState(null)
 const [description, setDescription] = useState("")

 const types = ["image/png", "image/jpeg"];
 const ImgHandler = (e) => {
  
  let selectedFile = e.target.files[0];
  console.log(selectedFile)
  if (selectedFile && types.includes(selectedFile.type)) {
    setImage(selectedFile);

   
  } else {
    setImage(null);
 
  }
};

  const handleSubmit = async (event) => {
    event.preventDefault();

    const uploadTask = ref(storage, `images/${image}`);
    await uploadBytes(uploadTask, image);
    console.log("file uploaded");

    // Get the download URL for the file
    const url = await getDownloadURL(uploadTask);
    console.log(`File URL: ${url}`);
    try {
      const docRef = await addDoc(collection(db, "Facility"), {
       facility_name: facility,
       Image:url,
       Description:description
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div
      className="container justify-content-center mt-5"
      id="id_for_admin_div"
    >
      <div className="row">
        <div className="col mt-5">
          <h1>Create Facilities</h1>
        </div>
      </div>
      <div
        className="form-container"
        style={{
          height: "300px",
          padding: "10px",
          margin: "0 auto",
          maxWidth: "400px",
        }}
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
