
import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBS5aS5TdlaOG82oqJ8VxE5Dtudfjoe6vI",
  authDomain: "mechshop-505ac.firebaseapp.com",
  projectId: "mechshop-505ac",
  storageBucket: "mechshop-505ac.firebasestorage.app",
  messagingSenderId: "603720244109",
  appId: "1:603720244109:web:9c507f500757bf3a5c7bc4"
};


const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
const db= getFirestore(app);

export {app, auth, db}