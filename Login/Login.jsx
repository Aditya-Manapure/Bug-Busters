import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Login extends Component {
    render(){
        return(<>
            <form>
                <h3>Sign In</h3>

                <div className="form-group my-3">
                    <label>Username</label>
                    <input type="text" className="form-control my-1" placeholder="Enter username" />
                </div>

                <div className="form-group my-3">
                    <label>Password</label>
                    <input type="password" className="form-control my-1" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block my-3">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <NavLink to = {"/ForgetPassword"}>password?</NavLink>
                </p>
                <p className = "text-right">
                    <NavLink to = {"/Signup"}> New User? </NavLink>
                </p>
            </form>
        </>);
    }
}