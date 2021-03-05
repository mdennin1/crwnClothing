import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
//   };
const firebaseConfig = {
  apiKey: "AIzaSyDYUqBUgzpb9qgOhh9vs7lp7gR3ItPgLak",
  authDomain: "crwn-clothing-dev-c9a87.firebaseapp.com",
  projectId: "crwn-clothing-dev-c9a87",
  storageBucket: "crwn-clothing-dev-c9a87.appspot.com",
  messagingSenderId: "54067722805",
  appId: "1:54067722805:web:4fdf6c531e527f22f74f7c",
  measurementId: "G-MQM95CF8R9"
};
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // const provider = new firebase.auth.GoogleAuthProvider();
  // provider.setCustomParameters({prompt: 'select_account'});
  // export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  export const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider().setCustomParameters({prompt:'select_account'}));
  //
  export default firebase; //firebaseApp;