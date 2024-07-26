import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const AddSchoolComponent = () => {
  return (
    <div className="container mx-auto my-5" style={{ width: "40rem" }}>
      <Form>
        <FloatingLabel
          controlId="schoolName"
          label="School Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Kofi Donkor M/A" />
        </FloatingLabel>

        <FloatingLabel
          controlId="year_est"
          label="Year Established"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="1900" maxLength={4} />
        </FloatingLabel>
        <FloatingLabel controlId="location" label="Location" className="mb-3">
          <Form.Control type="text" placeholder="Nsamwam" />
        </FloatingLabel>
        <FloatingLabel
          controlId="gps_address"
          label="GPS Address"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="GH-XXX-XXXX" />
        </FloatingLabel>
        <FloatingLabel
          controlId="headteacher"
          label="Headteacher's Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Mr. Koranteng" />
        </FloatingLabel>
        <FloatingLabel
          controlId="facilitators"
          label="No. of Facilitators"
          className="mb-3"
        >
          <Form.Control type="number" placeholder="21" />
        </FloatingLabel>
        <FloatingLabel
          controlId="learners"
          label="No. of Learners"
          className="mb-3"
        >
          <Form.Control type="number" placeholder="21" />
        </FloatingLabel>
        <FloatingLabel
          controlId="coreSubjectsPosition"
          label="Core Subject Position"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="1st" />
        </FloatingLabel>

        <FloatingLabel controlId="level" label="Level">
          <Form.Select
            className="mb-3"
            aria-label="Floating label select example"
          >
            <option>Open this select menu</option>
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
          >
            <option>Open this select menu</option>
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
          >
            <option>Open this select menu</option>
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
          >
            <option>Open this select menu</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </Form.Select>
        </FloatingLabel>

        <Form.Group className="mb-3" controlId="isGalop">
          <Form.Check className="mb-3" type="checkbox" label="Is Galop School?" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddSchoolComponent;
