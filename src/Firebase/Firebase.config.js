// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLFpjqX4RgbiTn8Aglmyu3zzTc9roKeIE",
    authDomain: "tech-matrix-ba545.firebaseapp.com",
    projectId: "tech-matrix-ba545",
    storageBucket: "tech-matrix-ba545.appspot.com",
    messagingSenderId: "981752393389",
    appId: "1:981752393389:web:0445b6700fc14a00d4a024"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app