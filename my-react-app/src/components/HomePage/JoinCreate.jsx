import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

import JoinCollab from './JoinCollab'
import CreateCollab from './CreateCollab'

const JoinCreate = () => {
  return (
    <Container>
        <Row className="justify-content-md-center">
        <Col xs={12} md={6} lg={6}>
          <CreateCollab/>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <JoinCollab/>
        </Col>
      </Row>
    </Container>
  )
}

export default JoinCreate