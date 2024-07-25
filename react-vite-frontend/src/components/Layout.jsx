import PropTypes from 'prop-types';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import './Layout.css'; 

const Layout = ({leftCard, schoolDetail, homeIntro }) => {
  return (
    <div className="layout-container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">School Profiler</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/add-school">Add School</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
      <Container fluid className="my-4 flex-grow-1">
      <div className='my-3 mx-auto container'>
        {homeIntro}
        </div>
        <Row gap={5} className='d-flex justify-content-evenly px-2 py-5 bg-light mx-auto'>
          <Col md={3}>{leftCard}</Col>
          <Col md={8}>{schoolDetail}</Col>
        </Row>
      </Container>

      <footer className="footer bg-dark text-white text-center py-3">
        codeBOLT | &copy; {new Date().getFullYear()} School Profiler. All rights reserved.
      </footer>
    </div>
  );
};

Layout.propTypes = {
    leftCard: PropTypes.node,       
    schoolDetail: PropTypes.node,  
    homeIntro: PropTypes.node  
};

export default Layout;
