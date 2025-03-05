import { initializeApp } from "firebase/app";

export const loadFirebase = () => {// Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyC5AKNFzfUNbG9D9pLMy1C-ocan8htQEbg",
        authDomain: "estoque-deltaprice.firebaseapp.com",
        projectId: "estoque-deltaprice",
        storageBucket: "estoque-deltaprice.firebasestorage.app",
        messagingSenderId: "640328016998",
        appId: "1:640328016998:web:b7ab8d7fc61d5134afb9a7"
    };

    // Initialize Firebase
    return initializeApp(firebaseConfig);
}