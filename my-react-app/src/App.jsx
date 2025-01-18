import { useState, useEffect} from 'react'
import './App.css'
import { supabase } from './client';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </>
  );
}

export default App