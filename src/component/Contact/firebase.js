import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_mwKr655o6Kh7QQm4CcIx9SB_IbIU6yI",
  authDomain: "sayafolio.firebaseapp.com",
  projectId: "sayafolio",
  storageBucket: "sayafolio.appspot.com",
  messagingSenderId: "178763832942",
  appId: "1:178763832942:web:af89ea05b21a29d2b2d07f",
});

var db = firebase.firestore();

export { db };
