import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-223a5.firebaseapp.com",
  projectId: "chatapp-223a5",
  storageBucket: "chatapp-223a5.appspot.com",
  messagingSenderId: "507436213202",
  appId: "1:507436213202:web:a6f4899a19e33b57f71e0b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
