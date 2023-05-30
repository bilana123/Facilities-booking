import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";
import { storage, db } from "../../Database/Firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Edit = () => {
  const [facility, setFacility] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const locate = useLocation();
  const facilitys = locate.state;

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    const uploadTask = ref(storage, `images/${image.name}`);
    await uploadBytes(uploadTask, image.file);
    console.log("file uploaded");

    // Get the download URL for the file
    const url = await getDownloadURL(uploadTask);
    console.log(url);
    console.log(`File URL: ${url}`);

    const data = {
      id: facilitys.id,
      name: facility,
      image: url,
      description: description,
    };

    const collectionRef = doc(db, "Facility", data.id);
    await updateDoc(collectionRef, {
      facility_name: data.name,
      Image: data.image,
      Description: data.description,
    }).catch((err) => {
      console.log(err);
    });
    alert("Updated successfully");
    navigate("/admin/managefacility");
  };

  // Set the initial form field values based on the existing data
  useEffect(() => {
    setFacility(facilitys.facility_name || "");
    setDescription(facilitys.Description || "");
    setImage({ file: null, name: "" }); // Set initial image state to null or provide default image state object
  }, [facilitys]);

  return (
    <div className="pad">
      <div className="d-flex justify-content-center align-items-center p-20">
        <div className="col-6 ">
          <Container>
            <Form onSubmit={handleUpdate}>
              <Form.Group>
                <Form.Label>Facility Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter facility name"
                  value={facility}
                  onChange={(e) => setFacility(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={ImgHandler} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <br></br>
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button type="submit" variant="primary">
                  Edit
                </Button>
              </div>
            </Form>
          </Container>
        </div>
      </div>
      <div style={{ marginBottom: "60px" }}></div>{" "}
      {/* Add margin to create a gap */}
    </div>
  );
};

export default Edit;
