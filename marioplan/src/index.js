import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProjectContextProvider} from './components/context/ProjectContext'
import {UserContextProvider} from './components/context/UserContext'
import reportWebVitals from './reportWebVitals';
import firebase from './components/config/fbConfig'

firebase.auth().onAuthStateChanged(user =>{
  if (user) {
    ReactDOM.render(
      <React.StrictMode>
        <UserContextProvider>
          <ProjectContextProvider>
            <App />
          </ProjectContextProvider>
        </UserContextProvider>
    
      </React.StrictMode>,
      document.getElementById('root')
    )
  }
  else {
    ReactDOM.render(
      <React.StrictMode>
        <UserContextProvider>
          <ProjectContextProvider>
            <App />
          </ProjectContextProvider>
        </UserContextProvider>
    
      </React.StrictMode>,
      document.getElementById('root')
    )
  }
}


)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
