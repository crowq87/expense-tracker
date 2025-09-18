// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
<<<<<<< HEAD
import { FirebaseApp, initializeApp } from "firebase/app";
=======
import { initializeApp } from "firebase/app";
>>>>>>> 19fe5090487c500cfdcc5c9f24cc4aed9c280cb2
import {
  browserLocalPersistence,
  getAuth,
  getReactNativePersistence,
  initializeAuth,
  setPersistence,
} from "firebase/auth";
<<<<<<< HEAD
import { getFirestore } from "firebase/firestore";
import { Platform } from "react-native";
// https://firebase.google.com/docs/web/setup#available-libraries
=======
import { Platform } from "react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

>>>>>>> 19fe5090487c500cfdcc5c9f24cc4aed9c280cb2
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOdnyKIgKqeglFaeKB6OHxRWFPRP_YnN8",
  authDomain: "expense-tracker-fc06f.firebaseapp.com",
  projectId: "expense-tracker-fc06f",
  storageBucket: "expense-tracker-fc06f.firebasestorage.app",
  messagingSenderId: "1056960234557",
  appId: "1:1056960234557:web:f132dce0751bd6ad895654"
};
<<<<<<< HEAD
=======

>>>>>>> 19fe5090487c500cfdcc5c9f24cc4aed9c280cb2
// Initialize Firebase
const app = initializeApp(firebaseConfig);

let FIREBASE_AUTH;

if (Platform.OS === "web") {
  const auth = getAuth(app);

<<<<<<< HEAD



=======
>>>>>>> 19fe5090487c500cfdcc5c9f24cc4aed9c280cb2
  // ✅ Set persistence properly on web
  setPersistence(auth, browserLocalPersistence).catch((err) => {
    console.error("Failed to set persistence:", err);
  });

  FIREBASE_AUTH = auth;
} else {
  FIREBASE_AUTH = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

<<<<<<< HEAD
const db = getFirestore(app);

export { db, FIREBASE_AUTH };

  function getFirestone(app: FirebaseApp) {
    throw new Error("Function not implemented.");
  }
=======
export { FIREBASE_AUTH };
>>>>>>> 19fe5090487c500cfdcc5c9f24cc4aed9c280cb2

