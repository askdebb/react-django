import { useState, useEffect } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftHomeSectionontainer from '../components/LeftHomeSectionontainer';
import RightHomeSectionContainer from '../components/RightHomeSectionContainer';
import Intro from '../components/Intro'

const Home = () => {

  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);
  
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

  return (
    <div className="mb-4">
        <Container className="my-5 mx-auto">
          <Intro />
        </Container>
        <Container fluid className="my-4 flex-grow-1">
      <Row className='d-flex justify-content-evenly px-2 py-5 bg-light mx-auto'>
        <Col sm={3}>
            <div>
              <LeftHomeSectionontainer  schools={schools} selectedSchool={selectedSchool} setSelectedSchool={setSelectedSchool}/>
            </div>
        </Col>
        <Col sm={8}>
           <RightHomeSectionContainer selectedSchool={selectedSchool} /> 

        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Home;