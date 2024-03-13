import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAJemYZsgjISzYRq996p1nThgYz1gR-eVM",
  authDomain: "flowing-encoder-394417.firebaseapp.com",
  projectId: "flowing-encoder-394417",
  storageBucket: "flowing-encoder-394417.appspot.com",
  messagingSenderId: "1064433201566",
  appId: "1:1064433201566:web:72670e24b811b9d5af268f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const databaseApp = getFirestore(app)