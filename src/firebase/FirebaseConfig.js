import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAadDY7G2_NKcxfotWC1Mz0EvvRGIIEXc",
  authDomain: "my-kitchen-90217.firebaseapp.com",
  projectId: "my-kitchen-90217",
  storageBucket: "my-kitchen-90217.appspot.com",
  messagingSenderId: "27815755990",
  appId: "1:27815755990:web:247440f7597674cf714977",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
