import React from 'react'
import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const JoinCollab = () => {
  const navigate = useNavigate()
  const [code, setCode] = useState('');

  const handleInputChange = (e) => {
    setCode(e.target.value);
  };

  const handleJoinCollab = () => {
    navigate(`/collab/${code}`,  { state: { code } });
  };

  return (
    <>
    <Container>
      <h1>Join Collab</h1>
      <Form>
            <Form.Group controlId="code">
              <Form.Label>Enter Collab session code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter code"
                value={code}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleJoinCollab} disabled={!code}>
              Join Collab
            </Button>
          </Form>
    </Container>
    </>
  )
}

export default JoinCollab