import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCS0kdARpMkTCcWrOC6a-qcQTr2CkzmoMg",
    authDomain: "linkedin-5da42.firebaseapp.com",
    projectId: "linkedin-5da42",
    storageBucket: "linkedin-5da42.appspot.com",
    messagingSenderId: "843344634995",
    appId: "1:843344634995:web:9958777135098afcf17606",
    measurementId: "G-0ZCXCQDFRS"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore()
  const auth= firebase.auth()

  export {db,auth};