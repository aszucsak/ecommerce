import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB5rjPWnDbJm9TOuA_aEq0NrePV7x52eKQ',
  authDomain: 'crown-db-93672.firebaseapp.com',
  databaseURL: 'https://crown-db-93672.firebaseio.com',
  projectId: 'crown-db-93672',
  storageBucket: 'crown-db-93672.appspot.com',
  messagingSenderId: '928220645675',
  appId: '1:928220645675:web:03e592f7b07388f9245d6e',
  measurementId: 'G-MXF7M4XL5Y',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
