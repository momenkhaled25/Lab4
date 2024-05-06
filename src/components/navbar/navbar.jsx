// import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">MovieDB</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/movies" className="nav-link">Movies</Link>
  
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;




{/* <Link to="/tv-shows" className="nav-link">TV Shows</Link>
<Link to="/profile" className="nav-link">Profile</Link>
</Nav>
<Nav>
<Link to="/login" className="nav-link">Login</Link>
<Link to="/signup" className="nav-link">Sign Up</Link> */}
