import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "tchatreact-6f8df.firebaseapp.com",
  projectId: "tchatreact-6f8df",
  storageBucket: "tchatreact-6f8df.appspot.com",
  messagingSenderId: "349388605977",
  appId: "1:349388605977:web:37581ae055559ee02bb888"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()