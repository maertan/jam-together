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
    navigate(`/collab/${code}`)
  };

  return (
    <>
    <Container className='pb-5'>
      <h1>Join Collab Session</h1>
      <Form>
            <Form.Group controlId="code">
              <Form.Label>Enter session code:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter code"
                value={code}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleJoinCollab} disabled={!code} className='m-2'>
              Join Collab
            </Button>
          </Form>
    </Container>
    </>
  )
}

export default JoinCollab