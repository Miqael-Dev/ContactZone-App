import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDvp-X0wJwOAx08daPL9YbuEwQGcILlT6M",
    authDomain: "contactzone-2ad8c.firebaseapp.com",
    projectId: "contactzone-2ad8c",
    storageBucket: "contactzone-2ad8c.appspot.com",
    messagingSenderId: "112703384869",
    appId: "1:112703384869:web:f22f828eea1a493f4e3ecc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
// Initialize Cloud Firestore and get a reference to the service
export default getFirestore(app);
