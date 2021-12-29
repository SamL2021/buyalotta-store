import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdROyxraT04jXXtHlylOAHqsG8YlPdFWk",
    authDomain: "fir-test-3bc23.firebaseapp.com",
    projectId: "fir-test-3bc23",
    storageBucket: "fir-test-3bc23.appspot.com",
    messagingSenderId: "482520997913",
    appId: "1:482520997913:web:ab2b44efed61aa60dd0a88",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
