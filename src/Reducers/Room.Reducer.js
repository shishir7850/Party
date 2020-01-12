import { roomsCollection } from '../Firebase/Firebase';

const RoomReducer = (room, action) => {

  switch (action.type) {
    case "CREATE":
      room = action.room;
      roomsCollection.add(room);
      return room;
    case "JOIN":
      room = action.room;
      return room;
    default:
      return room;
  }
};

export default RoomReducer;