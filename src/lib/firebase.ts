import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCoxsayU9VuWHltmLxpTzC-mvIdVpMZ7Zs",
  authDomain: "cevremis-4bfe2.firebaseapp.com",
  projectId: "cevremis-4bfe2",
  storageBucket: "cevremis-4bfe2.firebasestorage.app",
  messagingSenderId: "888264885271",
  appId: "1:888264885271:web:490bdce00821efd1d24852",
  measurementId: "G-NR2EN2WC0V"
};

// Initialize Firebase (singleton pattern)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
