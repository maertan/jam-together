import React from 'react';
import appLogo from "../assets/icon.png";
import './NavBar.css';
import { Link } from "react-router-dom";
import { Container, Row, Col} from 'react-bootstrap';

function NavBar() {
  return (
    <Container>
      <Row className="align-items-center" >
        <Col xs="auto">
            <Link to="/">
              <img src={appLogo} alt="JamTogether Icon" style={{ width:'100px', height:'100px' }}  />
            </Link>
          </Col>
          <Col>
            <Link to="/" style={{ paddingLeft: '1rem', textDecoration: 'none' }}>
              <h1 style={{ color: 'white' }}>JamTogether</h1>
            </Link>
          </Col>
      </Row>
    </Container>
  );
}

export default NavBar;