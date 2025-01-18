import React from 'react'
import Container from 'react-bootstrap/Container';
import JoinCreate from './JoinCreate';
import AboutBox from './AboutBox';

const HomePage = () => {
  return (
    <>
      <Container  className="p-4 mb-4 w-75 justify-content-center align-items-center"> 
        <AboutBox />
      </Container>
      <Container fluid="true" className="p-4 w-100"> 
        <JoinCreate />
      </Container>
    </>
  );
};

export default HomePage

