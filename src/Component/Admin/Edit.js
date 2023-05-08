import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { setDoc, doc, updateDoc, collection } from "firebase/firestore";
import { db } from "../../Database/Firebase-config";

const Edit = () => {
  const [facility, setFacility] = useState("");
  const [image, setImage] = useState(null);
  const [department, setdepartment] = useState("");
  const [Facilities, setfacilities] = useState("");
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
      department: department,
      facilities: Facilities,
      description: description,
    };
    console.log(data.id);
    console.log(data.name);
    const collectionRef = doc(db, "Facility", "23eyIQdsCC1MhpoO26jy");
    console.log(collectionRef);
    await updateDoc(collectionRef, {
      facility_name: data.name,
    }).catch((err) => {
        console.log(err);
    });
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
          <Form.Label>Department</Form.Label>
          <Form.Select
            defaultValue={facilitys.Department}
            value={department}
            onChange={(e) => setdepartment(e.target.value)}
            required
          >
            <option value="">Select department</option>
            <option value="Department A">Department A</option>
            <option value="Department B">Department B</option>
            <option value="Department C">Department C</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Facilities</Form.Label>
          <Form.Select
            defaultValue={facilitys.Facilities}
            rows="3"
            value={Facilities}
            onChange={(e) => setfacilities(e.target.value)}
            required
          >
            <option value="">Select facilities</option>
            <option value="Facility A">Facility A</option>
            <option value="Facility B">Facility B</option>
            <option value="Facility C">Facility C</option>
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
