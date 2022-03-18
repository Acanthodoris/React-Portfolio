import React from "react";
import "../styles/Navigation.css";
import { Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
            <Nav.Link id="navAboutMe" href="/">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link id="navPortfolio" href="/protfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link id="navContacts" href="/contacts">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link id="navResume" href="/resume">Resume</Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default Navigation;