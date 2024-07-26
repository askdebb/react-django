import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { ToastContainer, toast } from "react-toastify";

const AddSchoolComponent = () => {
  const initialFormState = {
    school_name: "",
    year_established: "",
    location: "",
    gps_address: "",
    headteacher: "",
    facilitators: "",
    learners: "",
    core_subjects_pst: "",
    circuit_name: "",
    siso_name: "",
    level: "",
    school_type: "",
    isGalop: false,
  };

  const [postSchool, setPostSchool] = useState(initialFormState);

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    setPostSchool({
      ...postSchool,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serverURL = "http://127.0.0.1:8000";
    console.log(postSchool);
    try {
      const response = await axios.post(`${serverURL}/schools/`, postSchool);
      toast.success("School Profile saved!");
      console.log(response);
      setPostSchool(initialFormState);
    } catch (error) {
      toast.error("Failed to save school profile");
      if (error.response) {
        console.log("Error Response Data:", error.response.data);
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  return (
    <div className="container mx-auto my-5" style={{ width: "40rem" }}>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="schoolName"
          label="School Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="school_name"
            value={postSchool.school_name}
            placeholder="Kofi Donkor M/A"
            onChange={handleInput}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="year_est"
          label="Year Established"
          className="mb-3"
        >
          <Form.Control
            type="number"
            name="year_established"
            value={postSchool.year_established}
            placeholder="1900"
            onChange={handleInput}
          />
        </FloatingLabel>
        <FloatingLabel controlId="location" label="Location" className="mb-3">
          <Form.Control
            type="text"
            name="location"
            value={postSchool.location}
            placeholder="Nsamwam"
            onChange={handleInput}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="gps_address"
          label="GPS Address"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="gps_address"
            value={postSchool.gps_address}
            placeholder="GH-XXX-XXXX"
            onChange={handleInput}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="headteacher"
          label="Headteacher's Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="headteacher"
            value={postSchool.headteacher}
            placeholder="Mr. Koranteng"
            onChange={handleInput}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="facilitators"
          label="No. of Facilitators"
          className="mb-3"
        >
          <Form.Control
            type="number"
            name="facilitators"
            value={postSchool.facilitators}
            placeholder="21"
            onChange={handleInput}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="learners"
          label="No. of Learners"
          className="mb-3"
        >
          <Form.Control
            type="number"
            name="learners"
            value={postSchool.learners}
            placeholder="21"
            onChange={handleInput}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="coreSubjectsPosition"
          label="Core Subject Position"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="core_subjects_pst"
            value={postSchool.core_subjects_pst}
            placeholder="1st"
            onChange={handleInput}
          />
        </FloatingLabel>

        <FloatingLabel controlId="level" label="Level">
          <Form.Select
            className="mb-3"
            aria-label="Floating label select example"
            name="level"
            value={postSchool.level}
            onChange={handleInput}
          >
            <option value="">Open this select menu</option>
            <option value="KG">KG</option>
            <option value="PRIMARY">Primary</option>
            <option value="JHS">JHS</option>
            <option value="BASIC">Basic</option>
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel controlId="circuitName" label="Circuit Name">
          <Form.Select
            className="mb-3"
            aria-label="Floating label select example"
            name="circuit_name"
            value={postSchool.circuit_name}
            onChange={handleInput}
          >
            <option value="">Open this select menu</option>
            <option value="Adjiringanor">Adjiringanor</option>
            <option value="Nmai Dzorn">Nmai Dzorn</option>
            <option value="Adenta">Adenta</option>
            <option value="Botwe">Botwe</option>
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel controlId="sisoName" label="SISO's Name">
          <Form.Select
            className="mb-3"
            aria-label="Floating label select example"
            name="siso_name"
            value={postSchool.siso_name}
            onChange={handleInput}
          >
            <option value="">Open this select menu</option>
            <option value="Florence Kushitor">Florence Kushitor</option>
            <option value="Isaac Paintsil">Isaac Paintsil</option>
            <option value="Joana Kumi">Joana Kumi</option>
            <option value="Kingsley David">Kingsley David</option>
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel controlId="school_type" label="School Type">
          <Form.Select
            className="mb-3"
            aria-label="Floating label select example"
            name="school_type"
            value={postSchool.school_type}
            onChange={handleInput}
          >
            <option value="">Open this select menu</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </Form.Select>
        </FloatingLabel>

        <Form.Group className="mb-3" controlId="isGalop">
          <Form.Check
            className="mb-3"
            type="checkbox"
            name="isGalop"
            checked={postSchool.isGalop}
            onChange={handleInput}
            label="Is Galop School?"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddSchoolComponent;
