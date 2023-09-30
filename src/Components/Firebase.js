import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCDPuspiRJLWF7HMDcVr9tKoG8IahvgHj0",   
    authDomain: "testify-da596.firebaseapp.com",   
    projectId: "testify-da596",   
    storageBucket: "testify-da596.appspot.com",   
    messagingSenderId: "1079209837185",   
    appId: "1:1079209837185:web:b2310fd711a50495b18380",   
    measurementId: "G-HZSSSKHJ3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export default getFirestore();
