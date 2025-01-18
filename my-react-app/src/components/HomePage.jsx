import React from 'react'
import Container from 'react-bootstrap/Container';
import JoinCreate from './HomePage/JoinCreate';
import AboutBox from './HomePage/AboutBox';

const HomePage = () => {
  return (
    <>
      <Container fluid="true" className="p-4 mb-4 w-100"> 
        <AboutBox />
      </Container>
      <Container fluid="true" className="p-4 w-100"> 
        <JoinCreate />
      </Container>
    </>
  );
};

export default HomePage

