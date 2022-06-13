// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxlRrRVNI8h8fxfFkcpTXYfWbXCg1EyUI",
  authDomain: "tec-ride.firebaseapp.com",
  projectId: "tec-ride",
  storageBucket: "tec-ride.appspot.com",
  messagingSenderId: "691643358319",
  appId: "1:691643358319:web:f8c884e1cc77249c4ec19a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const signupForm = document.querySelector('#signUp-form');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const signupEmail = document.querySelector('#signUp-email').value;
    const signupPassword = document.querySelector('#signUp-password').value;

    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then(userCredential =>{
            console.log('Creado');
        }); 
});