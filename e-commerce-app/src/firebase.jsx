import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9YbNg_MZIwhOtRsJad03Sk3MDi01bMcs",
  authDomain: "e-commerce-app1-17b21.firebaseapp.com",
  projectId: "e-commerce-app1-17b21",
  storageBucket: "e-commerce-app1-17b21.firebasestorage.app",
  messagingSenderId: "88700208673",
  appId: "1:88700208673:web:bb875af97c160ca4bec560"
};

// Initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };