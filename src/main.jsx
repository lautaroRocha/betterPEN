import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './redux/store'
import {Provider} from'react-redux'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD2JrCXAK0st1YU0wEqaHSg8OTYzdn3te0",
  authDomain: "share-pen.firebaseapp.com",
  projectId: "share-pen",
  storageBucket: "share-pen.appspot.com",
  messagingSenderId: "731516834958",
  appId: "1:731516834958:web:dfbfadabb1fc45553525df",
  measurementId: "G-Q9E2NXZY4E"
};
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
)
