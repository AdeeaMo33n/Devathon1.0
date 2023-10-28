// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-5GZb43QOXAnEDs0B8ihrMQaHCqti0Js",
  authDomain: "devathon-4077b.firebaseapp.com",
  projectId: "devathon-4077b",
  storageBucket: "devathon-4077b.appspot.com",
  messagingSenderId: "568488452721",
  appId: "1:568488452721:web:9436a38a03b2913fe071d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}