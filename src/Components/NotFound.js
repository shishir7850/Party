import React from 'react'

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NotFound = () => {

  return (
    <Container>
      <Row>
        <Col>
          <h1>can you maybe chill or idk go to an actual route</h1>
          <Link to='/'>Go home</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound;