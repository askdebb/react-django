import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftHomeSectionontainer from '../components/LeftHomeSectionontainer';
import RightHomeSectionContainer from '../components/RightHomeSectionContainer';

const Homepage = () => {


  return (
    <div>
        <h1>Homepage</h1>
        <Container fluid>
      <Row>
        <Col sm={3}>
            <h2>Left Column</h2>
            <div>
              <LeftHomeSectionontainer />
            </div>
        </Col>
        <Col sm={9}>
            <h2>Right Column</h2>
           <RightHomeSectionContainer /> 

        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Homepage