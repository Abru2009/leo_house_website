// Replace this config with your actual Firebase project configuration
// 1. Go to Firebase Console (console.firebase.google.com)
// 2. Create a new project or open an existing one
// 3. Add a Web App to your project
// 4. Copy the config object below
// 5. IMPORTANT: In Firebase Console, go to "Realtime Database" and click "Create Database"
// 6. Set the rules for Realtime Database to allow read/write (for testing only, or set up Auth later):
//    {
//      "rules": {
//        ".read": true,
//        ".write": true
//      }
//    }

const firebaseConfig = {

    apiKey: "AIzaSyBOrz9bOr7Os3201e-VP0_jWf086B4cdQs",
    authDomain: "leo-house.firebaseapp.com",
    databaseURL: "https://leo-house-default-rtdb.firebaseio.com",
    projectId: "leo-house",
    storageBucket: "leo-house.firebasestorage.app",
    messagingSenderId: "1020954822712",
    appId: "1:1020954822712:web:5ca735126b502d07e97ecd",
    measurementId: "G-35WJDW9MBL"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
