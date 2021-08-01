import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional(after installing firebase tools)
const firebaseConfig = {
    apiKey: "AIzaSyAGa_xskqS7jKJbu9aiECjJ96_uwWL1BDg",
    authDomain: "clone-3cadd.firebaseapp.com",
    projectId: "clone-3cadd",
    storageBucket: "clone-3cadd.appspot.com",
    messagingSenderId: "79749100140",
    appId: "1:79749100140:web:60f2b0d241e67fa4189e49",
    measurementId: "G-PQ2W0E7356"
  };

  
  // initilizing the firebaseapp (after installing firebase)
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db , auth};