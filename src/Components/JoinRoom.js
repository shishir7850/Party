import React, { useState, useContext } from 'react';

import { RoomContext } from '../Contexts/RoomContext';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { auth } from '../Firebase/Firebase';
import store from '../Firebase/Firebase';

const JoinRoom = ({ history }) => {

  const { dispatchToRoom } = useContext(RoomContext)

  const [roomId, setRoomId] = useState('')
  const [password, setPassword] = useState('')

  const goBack = (event) => {
    event.preventDefault()
    history.push("/")
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    var rooms = store.collection('rooms');

    var query = rooms.where("roomId", "==", roomId);
    console.log(query);

    store.collection("rooms").where("roomId", "==", roomId)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data().roomPwd);
          if (doc.data().roomPwd === password) {
            const room = {
              access_token: doc.data().access_token,
              playlistId: doc.data().playlistId,
              roomId: doc.data().roomId,
              roomPwd: doc.data().roomPwd
            }
            dispatchToRoom({ type: 'JOIN', room })
            history.push('/view');
          } else {
            alert('Authentication failed');
          }
        });
      })


  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Join Room</h1>
        <Form.Group controlId="roomId">
          <Form.Label style={{ color: 'white' }}><b>Room ID</b></Form.Label>
          <Form.Control type="roomId" placeholder="Enter RoomID" value={roomId} onChange={(event) => {
            setRoomId(event.target.value)
          }} />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label style={{ color: 'white' }}><b>Password</b></Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => {
            setPassword(event.target.value)
          }} />
        </Form.Group>
        <Row className="justify-content-between">
          <Col xs="auto">
            <Button size="lg" onClick={goBack} variant="dark">
              <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            </Button>
          </Col>
          <Col xs="auto">
            <Button size="lg" variant="dark" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default JoinRoom;