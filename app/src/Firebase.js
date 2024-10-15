// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXw9ohMbYCZJZeiBtHL-SM74ofI4EusQY",
  authDomain: "fir-auth-16012.firebaseapp.com",
  projectId: "fir-auth-16012",
  storageBucket: "fir-auth-16012.appspot.com",
  messagingSenderId: "742035790731",
  appId: "1:742035790731:web:560768f8c49dc5e29c6d8e",
  measurementId: "G-CQQRC66VKC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);