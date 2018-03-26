import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBDmyLf6HuwhFgUucjHXgKjn1fWFpABrxk',
  authDomain: 'coins-b08dd.firebaseapp.com',
  databaseURL: 'https://coins-b08dd.firebaseio.com',
  projectId: 'coins-b08dd',
  storageBucket: 'coins-b08dd.appspot.com',
  messagingSenderId: '503864470113'
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
