import React, { useState, createContext, useEffect } from 'react';

// import { auth } from '../Firebase/firebase';
// import UserReducer from '../Reducers/User.Reducer';

export const UserContext = createContext();

export const UserProvider = props => {

  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState(null);

  const spotifyAuth = 'spotify-auth';
  const userAuth = 'user-auth';

  useEffect(() => {
    const tokenCheck = localStorage.getItem(spotifyAuth)
    if (tokenCheck != null) {
      setToken(tokenCheck);
    }
    const userCheck = localStorage.getItem(userAuth)
    if (userCheck != null) {
      setUserName(userCheck);
    }
  }, [])

  const logUserIn = (user, token) => {
    setUserName(user);
    localStorage.setItem(userAuth, user);
    setToken(token);
    localStorage.setItem(spotifyAuth, token);
  }

  const logUserOut = () => {
    setToken(null);
    localStorage.removeItem(spotifyAuth);
    setUserName(null);
    localStorage.removeItem(userAuth);
  }

  return (
    <UserContext.Provider value={{ token, logUserIn, logUserOut, userName, setUserName }}>
      {props.children}
    </UserContext.Provider>
  )
};