import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBGTwPdIoMCBGaRtR62pl7WF1aZbUcYRh4",
  authDomain: "crekty-48b2a.firebaseapp.com",
  databaseURL: "https://crekty-48b2a.firebaseio.com",
  storageBucket: "gs://crekty-48b2a.appspot.com"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
export const database = firebase.database();
