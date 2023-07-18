import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import Context, { FirebaseContext } from './store/Context';
import firebase from './firebase/config'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FirebaseContext.Provider value={{firebase}}>
        <Context>
          <App />
        </Context>
      </FirebaseContext.Provider>
    </Router>
  </React.StrictMode>
);