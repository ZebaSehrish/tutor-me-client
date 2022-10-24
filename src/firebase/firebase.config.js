// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIp96eMEVoo_3KS2Z8AqebdSg6kqqwUzc",
    authDomain: "tutor-me-site.firebaseapp.com",
    projectId: "tutor-me-site",
    storageBucket: "tutor-me-site.appspot.com",
    messagingSenderId: "36641818761",
    appId: "1:36641818761:web:64bb38f4b84a27e74cde58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;