import React, { createContext, useReducer } from 'react';

// import { auth } from '../Firebase/firebase';
import RoomReducer from '../Reducers/Room.Reducer';

export const RoomContext = createContext();

export const RoomProvider = props => {

  const [room, dispatchToRoom] = useReducer(RoomReducer, {});

  return (
    <RoomContext.Provider value={{room, dispatchToRoom}}>
      {props.children}
    </RoomContext.Provider>
  )
};