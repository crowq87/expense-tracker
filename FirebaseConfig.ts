// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  getReactNativePersistence,
  initializeAuth,
  setPersistence,
} from "firebase/auth";
import { Platform } from "react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOdnyKIgKqeglFaeKB6OHxRWFPRP_YnN8",
  authDomain: "expense-tracker-fc06f.firebaseapp.com",
  projectId: "expense-tracker-fc06f",
  storageBucket: "expense-tracker-fc06f.firebasestorage.app",
  messagingSenderId: "1056960234557",
  appId: "1:1056960234557:web:f132dce0751bd6ad895654"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let FIREBASE_AUTH;

if (Platform.OS === "web") {
  const auth = getAuth(app);

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

export { FIREBASE_AUTH };

