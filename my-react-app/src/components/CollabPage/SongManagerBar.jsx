import React from 'react';
import "./SongManagerBar.css";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { IoFilterOutline as FilterIcon} from "react-icons/io5";
import { MdAddCircleOutline as AddIcon } from "react-icons/md";
import { AiOutlineMinusCircle as DeleteIcon } from "react-icons/ai";



function SongManagerBar() {
  return (
    <div className="manager-bar">
      <Form className="d-flex align-items-center ms-3 col-4"> 
        <Form.Label className="col-3 mb-0" style={{ fontSize: '14px' }}>Enter Your Name: </Form.Label>
        <Form.Control 
          type="text" 
          id="name" 
          name="name" 
          required 
          className="flex-grow-1 col-xs-1 ms-1 me-2 form-control-sm"
          style={{ minWidth: '80px' }}></Form.Control>
        <Button type="submit" className="bg-black border-0" style={{fontSize: '14px'}}>Submit</Button>
      </Form>
      <div className="d-flex justify-content-end me-5">
        <Button variant="outline-dark"><FilterIcon /></Button>
        <Button variant="outline-dark"><AddIcon /></Button>
        <Button variant="outline-dark"><DeleteIcon /></Button>
      </div>   
    </div>
  )

}

export default SongManagerBar;