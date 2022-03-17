import React from "react";
import "../styles/Navigation.css";
import { Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Nav>
        <div class="navButtons">
            <Nav.Item>
                <Nav.Link href="/">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/protfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contacts">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/resume">Resume</Nav.Link>
            </Nav.Item>
        </div>
    </Nav>
  );
}

export default Navigation;