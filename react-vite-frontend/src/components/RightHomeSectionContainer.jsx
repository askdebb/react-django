import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Intro.css';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './RightHomeSectionContainer.css';
import Placeholder from 'react-bootstrap/Placeholder';


const RightHomeSectionContainer = ({ selectedSchool }) => {
  return (
    <>
      {selectedSchool ? (
        <Card className="text-center shadow-sm">
        <Card.Header className='card-head'>{selectedSchool.school_name}</Card.Header>
        <Card.Body>
          <Card.Title>School Info</Card.Title>
          <Card.Text>
            <Row>
              <Col >
              <Card className='mx-5 my-2 bg-primary effect' style={{ width: '17rem' , fontSize: '15px' }}>
                <Card.Body>
                  <Card.Text style={{marginLeft: '-2rem'}}>
                    <ul style={{listStyle: 'none', textAlign: 'left'}}>
                      <li><b>Year Est:</b> {selectedSchool.year ?? 'N/A'}</li>
                      <li><b>Location:</b> {selectedSchool.location ?? 'N/A'}</li>
                      <li><b>GPS Address:</b> {selectedSchool.gps_address ?? 'N/A'}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
            </Card>

              </Col>
              <Col>
              <Card className='mx-5 my-2 bg-info effect' style={{ width: '17rem', fontSize: '15px' }}>
                <Card.Body>
                  <Card.Text style={{marginLeft: '-2rem'}}>
                  <ul style={{listStyle: 'none', textAlign: 'left'}}>
                      <li><b>Circuit Name:</b> {selectedSchool.circuit_name ?? 'N/A'}</li>
                      <li><b>SISO's Name:</b> {selectedSchool.siso_name ?? 'N/A'}</li>
                      <li><b>Galop:</b> {selectedSchool.isGALOP !== undefined ? (selectedSchool.isGALOP ? 'Yes' : 'No') : 'N/A'}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
            <Row>
              <Col>
              <Card className='mx-5 my-2 bg-warning effect' style={{ width: '17rem' , fontSize: '15px' }}>
                <Card.Body>
                  <Card.Text style={{marginLeft: '-2rem'}}>
                  <ul style={{listStyle: 'none', textAlign: 'left'}}>
                      <li><b>HeadTeacher:</b> {selectedSchool.headteacher ?? 'N/A'}</li>
                      <li><b>Facilitators:</b> {selectedSchool.facilitators ?? 'N/A'}</li>
                      <li><b>Learners:</b> {selectedSchool ? selectedSchool.learners : 'N/A'}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card className='mx-5 my-2 bg-danger effect' style={{ width: '17rem' , fontSize: '15px' }}>
                <Card.Body>
                  <Card.Text style={{marginLeft: '-2rem'}}>
                  <ul style={{ listStyle: 'none', textAlign: 'left'}}>
                      <li><b>Type:</b> {selectedSchool.school_type ?? 'N/A'}</li>
                      <li><b>Level:</b> {selectedSchool.level ?? 'N/A'}</li>
                      <li><b>Core Subject Pst:</b> {selectedSchool.core_subject_position ?? 'N/A'}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </Card.Text>
          
        </Card.Body>
        <Card.Footer><Button className='btn'>Read more</Button></Card.Footer>
        </Card>
      ) : (
        <Card className="text-center shadow-sm">
          <Placeholder as={Card.Header} animation="glow">
          <Placeholder xs={6} />
          {/* <Card.Header className='card-head'>Loading...</Card.Header> */}
          </Placeholder>
          <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={4} />
            {/* <Card.Title>Loading...</Card.Title> */}
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
            
              <Row>
                <Col>
                <Card className='mx-5 my-2' style={{ width: '17rem' , fontSize: '15px' }}>
                  <Card.Body>
                  <Card.Text style={{marginLeft: '-2rem'}}>
                    <ul style={{listStyle: 'none', textAlign: 'left'}}>
                      <li>
                      <Placeholder xs={6} />{' '}
                      </li>
                      <li>
                      <Placeholder xs={7} />{' '}
                      </li>
                      <li>
                      <Placeholder xs={6} />{' '}
                      </li>
                    </ul>
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card className='mx-5 my-2' style={{ width: '17rem' , fontSize: '15px' }}>
                  <Card.Body>
                  <Card.Text style={{marginLeft: '-2rem'}}>
                    <ul style={{listStyle: 'none', textAlign: 'left'}}>
                      <li>
                      <Placeholder xs={10} />{' '}
                      </li>
                      <li>
                      <Placeholder xs={12} />{' '}
                      </li>
                      <li>
                      <Placeholder xs={9} />{' '}
                      </li>
                    </ul>
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                <Card className='mx-5 my-2' style={{ width: '17rem' , fontSize: '15px' }}>
                  <Card.Body>
                  <Card.Text style={{marginLeft: '-2rem'}}>
                    <ul style={{listStyle: 'none', textAlign: 'left'}}>
                      <li>
                      <Placeholder xs={7} />{' '}
                      </li>
                      <li>
                      <Placeholder xs={9} />{' '}
                      </li>
                      <li>
                      <Placeholder xs={8} />{' '}
                      </li>
                    </ul>
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card className='mx-5 my-2' style={{ width: '17rem' , fontSize: '15px' }}>
                  <Card.Body>
                  <Card.Text style={{marginLeft: '-2rem'}}>
                    <ul style={{listStyle: 'none', textAlign: 'left'}}>
                      <li>
                      <Placeholder xs={7} />{' '}
                      </li>
                      <li>
                      <Placeholder xs={9} />{' '}
                      </li>
                      <li>
                      <Placeholder xs={12} />{' '}
                      </li>
                    </ul>
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
             
           
          </Placeholder>
  
          </Card.Body>
          <Card.Footer><Placeholder.Button variant="primary" xs={2} /></Card.Footer>

        </Card>
      )}
    </>
  );
};

RightHomeSectionContainer.propTypes = {
  selectedSchool: PropTypes.object
};

export default RightHomeSectionContainer;
