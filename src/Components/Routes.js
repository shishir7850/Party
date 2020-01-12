import React, { useContext, Fragment } from "react";

import { UserContext } from '../Contexts/UserContext';

import { Switch, Route, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import Home from './Home';
import NotFound from './NotFound';
import ViewRoom from './ViewRoom';
import JoinRoom from './JoinRoom';
import MakeRoom from './MakeRoom';
import Lyrics from './Lyrics';

const Routes = () => {

  const { userName, token, logUserOut } = useContext(UserContext);
  const url = 'https://accounts.spotify.com/en/logout'

  const logOut = (event) => {
    logUserOut()
    window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40')
  }

  return (
    <Fragment>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        {token && <Navbar.Brand>{userName}</Navbar.Brand>}
        <Form inline>
          {token && <Link to='/'><Button size="lg" variant="dark" onClick={logOut}>Logout</Button></Link>}
        </Form>
      </Navbar>
      <Container fluid={true} className="vh-100 pt-5" id="shishirs_dream_container">
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={ViewRoom} path="/view" exact />
          <Route component={Lyrics} path="/view/lyrics" exact />
          <Route component={JoinRoom} path="/joinroom" exact />
          <Route component={MakeRoom} path="/makeRoom" exact />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Fragment>
  )
}

export default Routes;