// src/components/Sidebar.jsx

import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light p-3" style={{ width: '250px', height: '100vh', position: 'fixed' }}>
      <h4 className="mb-4">Navigation</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/add-school">Add School</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
