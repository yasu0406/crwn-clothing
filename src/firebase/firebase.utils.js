import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDy5wjwgCAr8oEQubKWfYzdzH2HXH0sosA",
    authDomain: "crwn-28c16.firebaseapp.com",
    databaseURL: "https://crwn-28c16.firebaseio.com",
    projectId: "crwn-28c16",
    storageBucket: "",
    messagingSenderId: "82779136899",
    appId: "1:82779136899:web:5ad1e4aa7fc5983b"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;