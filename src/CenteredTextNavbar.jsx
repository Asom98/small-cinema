import React from 'react';
import { Navbar } from 'react-bootstrap';

function CenteredTextNavbar() {
  const navbarStyle = {
    background: 'gray',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.7)',
  };

  const brandStyle = {
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', 
  };

  return (
    <Navbar style={navbarStyle} variant="dark">
      <Navbar.Brand className="mx-auto" style={brandStyle}>
        The Cinema
      </Navbar.Brand>
    </Navbar>
  );
}

export default CenteredTextNavbar;
