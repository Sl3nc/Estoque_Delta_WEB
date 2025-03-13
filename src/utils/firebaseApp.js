import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5AKNFzfUNbG9D9pLMy1C-ocan8htQEbg",
  authDomain: "estoque-deltaprice.firebaseapp.com",
  projectId: "estoque-deltaprice",
  storageBucket: "estoque-deltaprice.firebasestorage.app",
  messagingSenderId: "640328016998",
  appId: "1:640328016998:web:b7ab8d7fc61d5134afb9a7"
};

// apiKey: process.env.FIREBASE_API_KEY,
// authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// projectId: process.env.FIREBASE_PROJECT_ID,
// storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.FIREBASE_API_ID

export const app = initializeApp(firebaseConfig);