import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBu-Ew6i6aZlW0lTjF06EJPNP9Ja00yPi4",
    authDomain: "techheroes-17778.firebaseapp.com",
    projectId: "techheroes-17778",
    storageBucket: "techheroes-17778.appspot.com",
    messagingSenderId: "88875541630",
    appId: "1:88875541630:web:d2e999872ca95c1c64642f"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const firebaseAuth = firebaseApp.auth();
  export const firebaseDB = firebaseApp.database();