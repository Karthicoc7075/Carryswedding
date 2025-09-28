
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBut21AKAUBV0cVn_H8y5kVL0Vur6MnnKs",
  authDomain: "caryswedding-72c28.firebaseapp.com",
  projectId: "caryswedding-72c28",
  storageBucket: "caryswedding-72c28.firebasestorage.app",
  messagingSenderId: "658101148919",
  appId: "1:658101148919:web:26909186c385d2593307f2",
  measurementId: "G-C3VDGC5FK6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;