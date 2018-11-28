import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCMTbjdQrtR5dNpua0DKX3g7Ij-en5c60I",
    authDomain: "marioplan-b9aae.firebaseapp.com",
    databaseURL: "https://marioplan-b9aae.firebaseio.com",
    projectId: "marioplan-b9aae",
    storageBucket: "marioplan-b9aae.appspot.com",
    messagingSenderId: "550777684685"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase