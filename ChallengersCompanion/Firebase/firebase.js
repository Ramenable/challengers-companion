// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTkgA3_qiin6RZV5pcD9mgmDhexYzL9xk",
  authDomain: "companion-3145c.firebaseapp.com",
  databaseURL: "https://companion-3145c-default-rtdb.firebaseio.com",
  projectId: "companion-3145c",
  storageBucket: "companion-3145c.appspot.com",
  messagingSenderId: "269239082795",
  appId: "1:269239082795:web:c9dd23e54521cd30f86f6e",
  measurementId: "G-YE4KDWFP5F",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://companion-3145c-default-rtdb.firebaseio.com/",

};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, database };