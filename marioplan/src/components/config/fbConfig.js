  
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDrm3bdMNgx_Usq9QoOecV625pHMvkdp2E",
    authDomain: "marioplan-11894.firebaseapp.com",
    projectId: "marioplan-11894",
    storageBucket: "marioplan-11894.appspot.com",
    messagingSenderId: "413048439528",
    appId: "1:413048439528:web:ae0735ddf9cc6417c1ff5d",
    measurementId: "G-2F11B0E4JM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})
  // firebase.analytics();

  export default firebase;