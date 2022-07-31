import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


export const environment = {
  production: true
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH8vVq-_Ty_pG-9zlSZsTaTvBb1I3yN78",
  authDomain: "noahortegaportfolio.firebaseapp.com",
  projectId: "noahortegaportfolio",
  storageBucket: "noahortegaportfolio.appspot.com",
  messagingSenderId: "457809759411",
  appId: "1:457809759411:web:288c01f1c36e0a0320f4c6",
  measurementId: "G-MGBXCLSJ2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
