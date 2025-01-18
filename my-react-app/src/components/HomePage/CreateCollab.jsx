import React from 'react'
import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { createCollab } from '../../logic/createCollabFunctions';
import { useNavigate } from 'react-router-dom';

const CreateCollab = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleCreateSession = async () => {
    console.log('Collab session created:', name);
    const code = await createCollab(name)
    navigate(`/collab/${code}`)
  };
  return (
    <>
    <Container className='pb-5'>
      <h1>Create New Collab Session </h1>
      <Form>
            <Form.Group controlId="name">
              <Form.Label>Name your session:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleCreateSession} disabled={!name} className='m-2'>
              Create Collab
            </Button>
          </Form>
    </Container>
    </>
  )
}

export default CreateCollab