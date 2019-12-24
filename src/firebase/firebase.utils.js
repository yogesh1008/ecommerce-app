import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDM93ilCiV6ixbIDmlsXc7xi17dhP16ltI",
    authDomain: "ecommerce-8b3bf.firebaseapp.com",
    databaseURL: "https://ecommerce-8b3bf.firebaseio.com",
    projectId: "ecommerce-8b3bf",
    storageBucket: "ecommerce-8b3bf.appspot.com",
    messagingSenderId: "304210525547",
    appId: "1:304210525547:web:f0ca4050c0888afae2a02e"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  
  export default firebase;
