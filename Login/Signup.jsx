import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import './index.css';


export default class Signup extends Component {
    render(){
        return(<>
            <div className = "container-fluid mx-auto">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group my-2">
                    <label>First name</label>
                    <input type="text" className="form-control my-1" placeholder="First name" />
                </div>

                <div className="form-group my-2">
                    <label>Last name</label>
                    <input type="text" className="form-control my-1" placeholder="Last name" />
                </div>

                <div className="form-group my-2">
                    <label>Email address</label>
                    <input type="email" className="form-control my-1" placeholder="Enter email" />
                </div>

                <div className="form-group my-2">
                    <label>Username</label>
                    <input type="text" className="form-control my-1" placeholder="Username" />
                </div>

                <div className="form-group my-2">
                    <label>Password</label>
                    <input type="password" className="form-control my-1" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block my-2">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <NavLink to = {"/Login"}>sign in?</NavLink>
                </p>
            </form>
            </div>
        </>);
    }
}