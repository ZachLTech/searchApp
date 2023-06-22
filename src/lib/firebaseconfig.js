
import { initializeApp } from "firebase/app";
import { getFunctions } from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyColGn9GuxaraL1PXj85TCvY6dz7TE5bF4",
  authDomain: "searchapp-b11bc.firebaseapp.com",
  projectId: "searchapp-b11bc",
  storageBucket: "searchapp-b11bc.appspot.com",
  messagingSenderId: "352359466428",
  appId: "1:352359466428:web:7aa6c7095b0e3c903bd7b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  /*
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



//firestore
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2023, 6, 25);
    }
  }
}


  */