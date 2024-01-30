import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpwdRwd7u7-lFI0ul1R4ELOekpLHu0EvI",
  authDomain: "ecommerce-34c39.firebaseapp.com",
  projectId: "ecommerce-34c39",
  storageBucket: "ecommerce-34c39.appspot.com",
  messagingSenderId: "223940248347",
  appId: "1:223940248347:web:39d7d676b4131cf89949be",
  measurementId: "G-NJRC05KGLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();