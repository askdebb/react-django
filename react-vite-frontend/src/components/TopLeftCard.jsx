import {  useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TopLeftCard = ({ schools, selectedSchool, setSelectedSchool }) => {

  const handleChange = (event) => {
    const selectedSchoolID = parseInt(event.target.value, 10);
    const selectedSchool = schools.find((school) => school.id === selectedSchoolID);
    setSelectedSchool(selectedSchool || null);
  };

  useEffect(() => {
    if (selectedSchool === null) {
      toast.warning("Schools Loaded but not selected");
    } else if (selectedSchool) {
      toast.success(`${selectedSchool.school_name} is selected.`);
    } else {
      toast.warning("Schools Loaded");
    }
  }, [selectedSchool]);
  return (
    <>
     
     <ToastContainer />
      <Card className='rounded shadow-sm' style={{ width: '20rem', height: '14rem' }}>
        <Card.Body>
          <Card.Title>Choose your School</Card.Title>
          <Card.Text>
            <select
              name="schools"
              id="schools"
              className='form-control'
              value={selectedSchool ? selectedSchool.id : ''}
              onChange={handleChange}
            >
              <option value="">Select a school</option> :
              
              {schools.map((school, index) => (
                <option key={index} value={school.id}>{school.school_name}</option>
              ))}
            </select>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

TopLeftCard.propTypes = {
  schools: PropTypes.array.isRequired,
  selectedSchool: PropTypes.object,
  setSelectedSchool: PropTypes.func.isRequired
};

export default TopLeftCard;
