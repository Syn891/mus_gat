import * as firebase from "firebase/app";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJAIL_T_tknb3N1GkjxrIkIRDC6ZjnjCM",
  authDomain: "parentapp-90a1c.firebaseapp.com",
  projectId: "parentapp-90a1c",
  storageBucket: "parentapp-90a1c.appspot.com",
  messagingSenderId: "111965434440",
  appId: "1:111965434440:web:f6c083af5af5421ee1de7d",
  measurementId: "G-ZS3HNXW9DY",
};

firebase.initializeApp(firebaseConfig);

export  { firebase };
