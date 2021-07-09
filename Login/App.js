import React from 'react'
import './App.css'
import Login from './Login';
import Signup from './Signup';
import './index.css';
import { BrowserRouter, Switch, Route , Redirect, Link } from '../node_modules/react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ForgetPassword from './ForgetPassword';
export default class App extends React.Component {
  render(){
    return(<>
      <div className = "auth-wrapper">
      <div className="auth-inner">
          <Switch>
            <Route exact path = "/" component = {Login} />
            <Route exact path = "/Login" component = {Login} />
            <Route exact path = "/Signup" component = {Signup} />
            <Route exact path = "/ForgetPassword" component = {ForgetPassword} />
            <Redirect to = "/" />
          </Switch>
      </div>

      </div>
    </>)
  }

}