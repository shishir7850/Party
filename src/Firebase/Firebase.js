import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase with R51 Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyBizFJJlEg81pQ2HoGEX-gOK3XwEGnSaQQ",
  authDomain: "shishirs-dream-a9f70.firebaseapp.com",
  databaseURL: "https://shishirs-dream-a9f70.firebaseio.com",
  projectId: "shishirs-dream-a9f70",
  storageBucket: "",
  messagingSenderId: "358613537093",
  appId: "1:358613537093:web:41cdfe25f439890553ee2c"
});

// DATABASE
// const eventsCollection = store.collection('events');
const store = firebase.firestore();
const roomsCollection = store.collection('rooms');


// USERS & AUTHENTICATION
const auth = firebase.auth();

export { 
  firebase,
  store,
  roomsCollection,
  auth,
};

export default store;