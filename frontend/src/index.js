import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import App from './App';
import Admin from './Admin';
import Header from './Components/Header';
import SignIn from './Components/Login';
import Logout from './Components/Logout';
import Aprobar from './Components/Aprobar';
import Rechazar from './Components/Rechazar';


const routing = (
  <Router>
    <React.StrictMode>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/aprobar/:id" component={Aprobar} />
        <Route exact path="/admin/rechazar/:id" component={Rechazar} />
      </Switch>
    </React.StrictMode>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
