import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: 'coinsly-c4330.firebaseapp.com',
    projectId: 'coinsly-c4330',
    storageBucket: 'coinsly-c4330.appspot.com'
  });
}

const firestore = firebase.firestore();

export const api = firestore;
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const storage = firebase.storage();
