import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAVwOJkIurV47vZO7RxKVwKG76M_adqagg",
  authDomain: "chatapp-6060f.firebaseapp.com",
  projectId: "chatapp-6060f",
  storageBucket: "chatapp-6060f.appspot.com",
  messagingSenderId: "391016870626",
  appId: "1:391016870626:web:823186a02548cec3af64bb",
};

// initialize firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();
