import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomePage from './components/HomePage/HomePage';
import CollabPage from "./components/CollabPage"

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collab/:code" element={<CollabPage />} />
        </Routes>
    </>
  );
}

export default App