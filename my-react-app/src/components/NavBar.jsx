import React from 'react';
import appLogo from "../assets/icon.png";
import './Navbar.css';
import { Link } from "react-router-dom";
import { Container, Row, Col} from 'react-bootstrap';

function NavBar() {
  return (
    <Container>
      <Row className="align-items-center" >
        <Col xs="auto">
            <Link to="/">
              <img src={appLogo} alt="JamTogether Icon" id="logo" />
            </Link>
          </Col>
          <Col>
            <Link to="/" className="site-title" style={{ textDecoration: 'none' }}>
              <h1 style={{ color: 'white' }}>JamTogether</h1>
            </Link>
          </Col>
      </Row>
    </Container>
  );
}

export default NavBar;