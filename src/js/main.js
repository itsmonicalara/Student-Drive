// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged
    } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
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

const text_1 = document.querySelector('#text_1');
const text_2 = document.querySelector('#text_2');
const form_ride = document.querySelector('#form_ride');
const card_mongo = document.querySelector('#card_mongo');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

//SignUp
const signupForm = document.querySelector('#signUp-form');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const signupEmail = document.querySelector('#signUp-email').value;
    const signupPassword = document.querySelector('#signUp-password').value;

    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then(userCredential =>{
            //Clear the form
            signupForm.reset();

            console.log('Creado');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          }); 
});

//SignIn
const login_form = document.querySelector('#login-form');
login_form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const loginEmail = document.querySelector('#login-email').value;
    const loginPassword = document.querySelector('#login-password').value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then(userCredential =>{
            //Clear the form
            login_form.reset();

            console.log('Logeado');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          }); 
});

//LogOut
const logOut = document.querySelector('#logOut');
logOut.addEventListener('click', e =>{
    e.preventDefault();

    signOut(auth).then(() => {
        // Sign-out successful.
        text_1.style.display = "block";
        text_2.style.display = "none";
        form_ride.style.display = "none";
        console.log('LogOut exitoso');
      }).catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
});

//Events
const sigIn_auth_Home = document.querySelector('#sigIn_auth_Home');
const sigIn_auth_ride = document.querySelector('#sigIn_auth_ride');
const sigOut_auth_about = document.querySelector('#sigOut_auth_about');
const sigIn_auth = document.querySelector('#sigIn_auth');
const sigOut_auth = document.querySelector('#sigOut_auth');
const about_auth = document.querySelector('#about_auth');
const ride_auth = document.querySelector('#ride_auth');
auth.onAuthStateChanged(user =>{
    if (user){
        sigIn_auth_Home.style.display = "block";
        sigIn_auth_ride.style.display = "block";
        logOut.style.display = "block";
        ride_auth.style.display = "block";
        card_mongo.style.display = "block";

        sigOut_auth_about.style.display = "none";
        sigIn_auth.style.display = "none";
        sigOut_auth.style.display = "none";
        about_auth.style.display = "none";
        console.log('Adentro del app');
    }else{
        sigIn_auth_Home.style.display = "none";
        sigIn_auth_ride.style.display = "none";
        logOut.style.display = "none";
        ride_auth.style.display = "none";
        card_mongo.style.display = "none";

        sigOut_auth_about.style.display = "block";
        sigIn_auth.style.display = "block";
        sigOut_auth.style.display = "block";
        about_auth.style.display = "block";
        console.log('No adentro del app');
    }
});

sigIn_auth_ride.addEventListener('click', e =>{
    e.preventDefault();
    text_1.style.display = "none";
    text_2.style.display = "block";
    form_ride.style.display = "block";
    ride_auth.style.display = "none";
    card_mongo.style.display = "none";
});

sigIn_auth_Home.addEventListener('click', e =>{
    e.preventDefault();
    text_1.style.display = "block";
    text_2.style.display = "none";
    form_ride.style.display = "none";
    ride_auth.style.display = "block";
    card_mongo.style.display = "block";
});