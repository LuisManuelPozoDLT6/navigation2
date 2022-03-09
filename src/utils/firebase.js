// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2qAj8ywWjY8PUwlHdC1llZ2mnlbxogNo",
  authDomain: "navegacion-cdbf0.firebaseapp.com",
  projectId: "navegacion-cdbf0",
  storageBucket: "navegacion-cdbf0.appspot.com",
  messagingSenderId: "570692242717",
  appId: "1:570692242717:web:e21706a6305140c22425f4"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);