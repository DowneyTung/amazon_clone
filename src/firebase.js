// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
 apiKey: "AIzaSyCfvdI9R9S4lleg-Ar-Aw6tHiDcU-Rb8E0",
 authDomain: "clone-f59fd.firebaseapp.com",
 projectId: "clone-f59fd",
 storageBucket: "clone-f59fd.appspot.com",
 messagingSenderId: "412700482966",
 appId: "1:412700482966:web:cb2d1cdee2da700237d1b7",
 measurementId: "G-T8PMRXHDZ4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };