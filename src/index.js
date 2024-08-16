import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/app.jsx' 
import { HashRouter } from 'react-router-dom';
import UserStore from './components/Wheel/userStore.jsx'

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={
    {user: new UserStore()}
  }>
    <HashRouter>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </HashRouter>
  </Context.Provider>
); 

