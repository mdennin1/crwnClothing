import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
////////////////////////////////////////////////
const firebaseConfig = {
  apiKey: "AIzaSyDYUqBUgzpb9qgOhh9vs7lp7gR3ItPgLak",
  authDomain: "crwn-clothing-dev-c9a87.firebaseapp.com",
  projectId: "crwn-clothing-dev-c9a87",
  storageBucket: "crwn-clothing-dev-c9a87.appspot.com",
  messagingSenderId: "54067722805",
  appId: "1:54067722805:web:4fdf6c531e527f22f74f7c",
  measurementId: "G-MQM95CF8R9"
};
firebase.initializeApp(firebaseConfig);
//
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider().setCustomParameters({prompt:'select_account'}));
//
export default firebase;