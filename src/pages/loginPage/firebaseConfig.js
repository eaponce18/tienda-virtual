// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhSSUQw8GsEUWSBP_nJouDr8l0s_nMHy4",
  authDomain: "bajamar-45ca9.firebaseapp.com",
  projectId: "bajamar-45ca9",
  storageBucket: "bajamar-45ca9.appspot.com",
  messagingSenderId: "115620361657",
  appId: "1:115620361657:web:179aea8470047b8df43268",
  measurementId: "G-YPBC6P17RV"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Exporta la autenticación para usarla en otros archivos