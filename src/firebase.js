import firebase from "firebase";
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCh9LEoiMzOSKp_3xYHB-t0bmz0C6qrFno",
    authDomain: "instafeed-aeb7e.firebaseapp.com",
    databaseURL: "https://instafeed-aeb7e-default-rtdb.firebaseio.com",
    projectId: "instafeed-aeb7e",
    storageBucket: "instafeed-aeb7e.appspot.com",
    messagingSenderId: "602959978996",
    appId: "1:602959978996:web:23c89e4aa72b3e524a19a1",
    measurementId: "G-ML3SD3XFKJ"
  });

  const datab = firebaseApp.firestore();
  const authentication = firebase.auth();
  const storage = firebase.storage();

  export { datab, authentication, storage };