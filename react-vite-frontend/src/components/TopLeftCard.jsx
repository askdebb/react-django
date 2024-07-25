import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const TopLeftCard = ({ schools, selectedSchool, setSelectedSchool }) => {

  const handleChange = (event) => {
    const selectedSchoolID = parseInt(event.target.value, 10);
    const selectedSchool = schools.find((school) => school.id === selectedSchoolID);
    setSelectedSchool(selectedSchool);
  };

  return (
    <>
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

TopLeftCard.propTypes = {
  schools: PropTypes.array.isRequired,
  selectedSchool: PropTypes.object,
  setSelectedSchool: PropTypes.func.isRequired
};

export default TopLeftCard;
