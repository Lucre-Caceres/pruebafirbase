import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import CartContextProvider from './contexts/CartContext.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi4DM50jbKTTltEBlm_rpHET0vXK6n0hs",
  authDomain: "primerproyectoreact-2ee07.firebaseapp.com",
  projectId: "primerproyectoreact-2ee07",
  storageBucket: "primerproyectoreact-2ee07.appspot.com",
  messagingSenderId: "159882698111",
  appId: "1:159882698111:web:2ac06b48ffd39cf40f0e4a"
};

// Initialize Firebase
initializeApp = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <CartContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartContextProvider>
)
