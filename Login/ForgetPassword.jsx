import React, { Component } from "react";
import { FormGroup } from "react-bootstrap";
import './index.css';

export default class ForgetPassword extends Component 
{
    render()
    {
        return(
            <>
                <form>
                    <div className = "form-group my-2">
                        <label>Enter Email Address</label>
                        <input type = "email" className="form-control my-1" placeholder = "Email address" /> 
                    </div>

                    <div className = "form-group my-2">
                        <label>Enter Username</label>
                        <input type = "text" className="form-control my-1" placeholder = "Username" /> 
                    </div>

                    <button type="submit" className="btn btn-primary btn-block my-2">Verify</button>
                </form>
            </>
        );
    }
}