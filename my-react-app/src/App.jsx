import './App.css'
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomePage from './components/HomePage/HomePage';
import CollabPage from "./components/CollabPage/CollabPage"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {

  return (
    <div style={{
      backgroundColor: "#00043F",
      minHeight: "100vh", 
      color: "white",
    }}>
      <Container>
        <NavBar />
      
      </Container>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collab/:code" element={<CollabPage />} />
        </Routes>
    </div>
  );
}

export default App