import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';

import Button from "react-bootstrap/Button";

export const authEndpoint = 'https://accounts.spotify.com/authorize?';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "58216d6dbbb34c9c978c4e37204558ee";
const redirectUri = "http://localhost:3000/makeRoom";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-modify-private",
  "playlist-modify-public",
  "playlist-read-private",
  "user-read-currently-playing"
];

const Home = ({history}) => {

  return (
    <Container>
    <Fragment>
      <div>
        <Row className="justify-content-center py-4">
          <Col xs={10}>
            <div>
              <a href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`}>
                <Button block size="lg" variant="dark">
                  Make room
                </Button>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center py-4">
          <Col xs={10}>
            <Link to="/joinroom">
              <Button block size="lg" variant="dark">
                Join room
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Fragment>
    </Container>
  );
};

export default Home;
