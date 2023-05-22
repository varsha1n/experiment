import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">MERN Stack CRUD Operations</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
