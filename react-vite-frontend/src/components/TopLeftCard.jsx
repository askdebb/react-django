import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const TopLeftCard = () => {
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState('');

  const fetchSchools = async () => {
    const serverURL = `http://127.0.0.1:8000`;

    try {
      const res = await axios.get(`${serverURL}/schools`);
      setSchools(res.data);
    } catch (error) {
      console.error('Error fetching schools:', error.response ? error.response.data : error.message);
    }
  };

 
  useEffect(() => {
    fetchSchools();
  }, []); 

  const handleChange = (event) => {
    setSelectedSchool(event.target.value);
  };

  return (
    <>
      <div>TopLeftCard</div>
      <Card className='rounded shadow-sm' style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Choose your School</Card.Title>
          <Card.Text>
            <select
              name="schools"
              id="schools"
              className='form-control'
              value={selectedSchool}
              onChange={handleChange}
            >
              <option value="">Select a school</option>
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

export default TopLeftCard;
