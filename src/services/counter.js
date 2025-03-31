import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc, setDoc, increment } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};


// Ensure Firebase Config is Loaded
if (!firebaseConfig.apiKey) {
  throw new Error("Missing Firebase configuration! Check your .env file.");
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Increment Counter Function
export async function incrementCounter() {
  const counterRef = doc(db, "counters", "visits");
  const snapshot = await getDoc(counterRef);

  if (!snapshot.exists()) {
    await setDoc(counterRef, { count: 1 }); // Create document if missing
  } else {
    await updateDoc(counterRef, { count: increment(1) });
  }
}

// Get Counter Value Function
export async function getCount() {
  const counterRef = doc(db, "counters", "visits");
  const snapshot = await getDoc(counterRef);
  return snapshot.exists() ? snapshot.data().count : 0;
}
