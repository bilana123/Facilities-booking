import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { setDoc, doc, updateDoc, collection } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

const Edit = () => {
  const [facility, setFacility] = useState("");
  const [image, setImage] = useState(null);

  const [Category, setCategory] = useState("");
  const [description, setDescription] = useState("");

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
    const data = {
      id: facilitys.id,
      name: facility,
      image: image,

      Category: Category,
      description: description,
    };
    console.log(data.id);
    console.log(data.name);
    const collectionRef = doc(db, "Facility", data.id);
    await updateDoc(collectionRef, { facility_name: data.name }).catch(
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <Container>
      <Form onSubmit={handleUpdate}>
        <Form.Group>
          <Form.Label>Facility Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={facilitys.facility_name}
            value={facility}
            onChange={(e) => setFacility(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" onChange={ImgHandler} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Select
            defaultValue={facilitys.Category}
            rows="3"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="Choose Type" style={{ fontWeight: "bold" }}>
              Select Type
            </option>
            <option value="Halls">Halls</option>
            <option value="Sports">Sports</option>
            <option value="Classrooms">Classrooms</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder={facilitys.Description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button type="submit" variant="primary">
            Edit
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default Edit;
