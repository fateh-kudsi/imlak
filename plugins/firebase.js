import firebase from "firebase/app";
import "firebase/firestore";
if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyA1mkF7Dtgw3VqIm7QcCUMLG97viYmBfh8",
    authDomain: "prop-12.firebaseapp.com",
    databaseURL: "https://prop-12.firebaseio.com",
    projectId: "prop-12",
    storageBucket: "prop-12.appspot.com",
    messagingSenderId: "936615762659",
    appId: "1:936615762659:web:fac311d337c235b88d03d6",
    measurementId: "G-2ZYXPZ60WD"
  };
  firebase.initializeApp(config);
}
const fireDb = firebase.firestore();

export { fireDb };
