import React, {useState} from 'react';
import "./SongManagerBar.css";
import { Form, Button } from 'react-bootstrap';
import { IoFilterOutline as FilterIcon} from "react-icons/io5";



function SongManagerBar(props) {
  const [inputName, setInputName] = useState('');
  const [submitPressed, setSubmitPressed] = useState(false);
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();  
    props.setUser(inputName);
    setSubmitPressed(true);
    console.log("Input Name: " + inputName);
  }

  const handleSearch = () => {
    console.log("Search Query: " + query);
  }

  return (
    <div className="manager-bar">
      <Form className="d-flex align-items-center ms-3 col-4" style={{ minWidth: '45%' }}> 
        <Form.Label className="col-3 mb-0" style={{ fontSize: '14px' }}>Enter Your Name: </Form.Label>
        <Form.Control 
          type="text" 
          id="name" 
          name="name" 
          required 
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="col-xs-1 ms-1 me-2 form-control-sm"
          style={{ minWidth: '80px' }}></Form.Control>
        <Button type="submit" onClick={handleSubmit} disabled={!inputName} className="border-0" style={{fontSize: '14px', backgroundColor: 'mediumslateblue'}}>Submit</Button>
      </Form>
      <div className="d-flex justify-content-end me-5" >
        <Form className="d-flex align-items-center"> 
          <Form.Control 
            type="text" 
            placeholder="Search for a song"
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
            disabled={!submitPressed}
            className="col-xs-1 me-2 form-control-sm"
            style={{ minWidth: '150px' }}
          />
          <Button 
            onClick={handleSearch} 
            disabled={!submitPressed}
            className="border-0 me-2" 
            style={{fontSize: '14px', backgroundColor: 'mediumslateblue'}}>Search</Button>
        </Form>
        <Button variant="outline-dark border-0" className="hover-icon"><FilterIcon /></Button>
      </div>   
    </div>
  )

}

export default SongManagerBar;