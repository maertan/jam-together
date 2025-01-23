import React, {useState} from 'react';
import "./SongManagerBar.css";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { IoFilterOutline as FilterIcon} from "react-icons/io5";
import {searchForSongs} from "../../logic/searchForSongs";
import SearchListPopup from "./SearchListPopup";

function SongManagerBar(props) {
  const [inputName, setInputName] = useState('');
  const [submitPressed, setSubmitPressed] = useState(false);
  const [query, setQuery] = useState('');
  const [songsFound, setSongsFound] = useState(null);

  
  const handleSubmit = (e) => {
    e.preventDefault();  
    props.setUser(inputName);
    setSubmitPressed(true);
    console.log("Input Name: " + inputName);
  }

  const handleSearch = async () => {
    console.log("Search Query: " + query);
    const trimmedQuery = query.trim()
    if (!trimmedQuery) {
      return;
    }

    // Format query string for Spotify API Search Request
    const queryString = trimmedQuery.replace(" ", "+");

    try {
      setSongsFound(await searchForSongs(queryString));
      console.log("songs found:", songsFound);
    } catch (error) {
      console.error(error);
    }
  }

  const resetSongsFound = () => setSongsFound(null);

  return (
    <Container>
      <Row className="w-100 mx-auto justify-content-between" xs={1} md={3} lg={3} >
        <Col xs={12} md={4} lg={4} className="p-2">
          <Form className="d-flex">
            <Form.Control 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your name"
              required 
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              onKeyDown={(e) => {if (e.key === 'Enter') {
                handleSubmit(e);
              }}}
              className="me-2 form-control-sm"
              style={{ minWidth: '80px' }}></Form.Control>
            <Button onClick={handleSubmit} disabled={!inputName} className="border-0" style={{fontSize: '14px', backgroundColor: 'mediumslateblue'}}>Submit</Button>
          </Form>
        </Col>
        <Col xs={12} md={6} lg={6} className="p-2">
          <Form className="d-flex"> 
            <Form.Control 
              type="text" 
              placeholder="Search for a song"
              value={query} 
              onChange={(e) => setQuery(e.target.value)}
              disabled={!submitPressed}
              className="col-xs-1 me-2 form-control-sm"
              style={{ minWidth: '150px' }}
              onKeyDown={(e) => {if (e.key === 'Enter') {
                e.preventDefault()
                handleSearch();
              }}}
            />
            <Button 
              onClick={handleSearch} 
              disabled={!submitPressed}
              className="border-0" 
              style={{fontSize: '14px', backgroundColor: 'mediumslateblue'}}>Search</Button>
          </Form>
          { 
          songsFound && <SearchListPopup show={true} resetSongs={resetSongsFound} songs={songsFound} owner={inputName} handleSongLoading={props.handleSongLoading} collab_id={props.collab_id}/> 
          }
          
        </Col>
        {/* <Col xs={2} md={2} lg ="auto" className="p-2">
          <Button variant="outline-light border-0" className="hover-icon"><FilterIcon /></Button>
        </Col> */}
      </Row>
    </Container>
    
  )

}

export default SongManagerBar;