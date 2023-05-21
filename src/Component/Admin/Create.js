import React, { useState, useContext, useEffect } from "react";
import "./Create.css";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { storage, db } from "../../Database/Firebase-config";
import { AuthContext } from "../Context/AuthContex";
import { useNavigate } from "react-router-dom";

export default function Create({ userRole }) {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const [Users, setUsers] = useState([]);
  const [category, setcategory] = useState("");
  const [facility, setFacility] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

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

        Category: category,
        Description: description,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    alert("You have successfully created");
    navigate("/admin/managefacility");
  };

  useEffect(() => {
    const getUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "Users"));
      const usersList = usersSnapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
    };
    console.log(currentUser.uid);
    const handleCategory = async () => {
      const DocRef = doc(db, "users", currentUser.uid);
      const DocSnap = await getDoc(DocRef);

      if (DocSnap.exists()) {
        const Data = DocSnap.data();
        const category = Data.category;
        console.log(category);
        setcategory(category);
      } else {
        console.log("User document does not exist.");
        // Handle the case when the user document doesn't exist
      }
    };

    getUsers();
    handleCategory();
  }, []);

  return (
    <div className="padding mt-5">
      <div class="container justify-content-center" id="id_for_admin_div">
        <div class="row">
          <br />

          <div className="bg-white shadow col-15 ">
            <div class="row">
              <div class="col d-flex justify-content-center ">
                <form onSubmit={handleSubmit}>
                  <div class="form-group mt-5">
                    <label htmlFor="facilityname">Facility Name</label>
                    <input
                      type="text"
                      name="facilityname"
                      class="form-control rounded-3"
                      id="facilityname"
                      placeholder="Type Name"
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
    </div>
  );
}
