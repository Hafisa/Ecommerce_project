// // Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIZAKevf4K3zaOYjY4pNtHiuSfyAIOwcA",
    authDomain: "reactnativefirebase-7ca5c.firebaseapp.com",
    projectId: "reactnativefirebase-7ca5c",
    storageBucket: "reactnativefirebase-7ca5c.appspot.com",
    messagingSenderId: "833188616852",
    appId: "1:833188616852:web:3b8ba146593dcc5b067281",
    measurementId: "G-TXDZ4D7WQ4"
  };
  const app= firebase.initializeApp(firebaseConfig);
const db=firebase.firestore(app)
export const userRef= db.collection('users')
export default Firebase
//   export const Firebase= initializeApp(firebaseConfig)

// firebase.initializeApp(firebaseConfig);

// firebase.firestore();

// export default firebase;