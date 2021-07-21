import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/messaging";
import axios from 'axios';





const rootEelment = document.getElementById('root');


ReactDOM.render(<App />, rootEelment);

reportWebVitals();

const initialiseFirebase = async function() {
  
}
