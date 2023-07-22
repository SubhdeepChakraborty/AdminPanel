import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_BASE_KEY,
  authDomain: "netflix-2e9ae.firebaseapp.com",
  projectId: "netflix-2e9ae",
  storageBucket: "netflix-2e9ae.appspot.com",
  messagingSenderId: "16093105421",
  appId: "1:16093105421:web:0067529b53228c349df444",
  measurementId: "G-MF6XSP6YWK",
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
