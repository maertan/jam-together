import React from 'react';
import { useState } from 'react';
import "./SongManagerBar.css";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { IoFilterOutline as FilterIcon} from "react-icons/io5";



function SongManagerBar() {
  const [inputName, setInputName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();  
    props.setUser(inputName)
    console.log("Input Name: " + inputName)
  }

  return (
    <div className="manager-bar">
      <Form className="d-flex align-items-center ms-3 col-4"> 
        <Form.Label className="col-3 mb-0" style={{ fontSize: '14px' }}>Enter Your Name: </Form.Label>
        <Form.Control 
          type="text" 
          id="name" 
          name="name" 
          required 
          onChange={(e) => setInputName(e.target.value)}
          className="flex-grow-1 col-xs-1 ms-1 me-2 form-control-sm"
          style={{ minWidth: '80px' }}></Form.Control>
        <Button onClick={handleSubmit} className="bg-black border-0" style={{fontSize: '14px'}}>Submit</Button>
      </Form>
      <div className="d-flex justify-content-end me-5">
        <Button variant="outline-dark border-0"><FilterIcon /></Button>
      </div>   
    </div>
  )

}

export default SongManagerBar;