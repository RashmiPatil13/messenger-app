import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWiT6KofEcCUX5w88OM7z2QTo9w4pPLKw",
  authDomain: "messenger-app-5d7a2.firebaseapp.com",
  databaseURL: "https://messenger-app-5d7a2-default-rtdb.firebaseio.com",
  projectId: "messenger-app-5d7a2",
  storageBucket: "messenger-app-5d7a2.appspot.com",
  messagingSenderId: "43106450396",
  appId: "1:43106450396:web:8ec04cbb2210f6050e2d19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
