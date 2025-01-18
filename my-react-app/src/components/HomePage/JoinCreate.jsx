import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

import JoinSession from './JoinSession'
import CreateSession from './CreateSession'

const JoinCreate = () => {
  return (
    <Container>
        <Row className="justify-content-md-center">
        <Col xs={12} md={6} lg={6}>
          <CreateSession/>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <JoinSession/>
        </Col>
      </Row>
    </Container>
  )
}

export default JoinCreate