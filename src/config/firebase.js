import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP7u_zhvTQSLcW_k_OSf6Grw0Zx283pKw",
  authDomain: "rn-exemplo01-61c71.firebaseapp.com",
  databaseURL: "https://rn-exemplo01-61c71-default-rtdb.firebaseio.com",
  projectId: "rn-exemplo01-61c71",
  storageBucket: "rn-exemplo01-61c71.appspot.com",
  messagingSenderId: "854327596853",
  appId: "1:854327596853:web:b84ed588d78a0fe7eede7c",
  measurementId: "G-5ZKJZ4ELF2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);