import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
export default function SignInPage() {
  return (
    <div className="text-center col-3" style={{margin: '0 auto'}} >
      <form style={{border: '1px solid ', color: 'white', }}>
        <div style={{backgroundColor: 'lightseagreen', padding: '10px'}}><h2 >Login Form</h2></div>
        

        <div className="content" style={{padding: '15px', backgroundColor: '#eee'}}>
          <div class="form-group">
            <label style={{color: 'black'}} for="lblEmail">Email address</label>
            <i class="fas fa-user"></i>
            <input style={{borderRadius:'0px'}}
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              pattern="^[\D\.]+@([\w-]+\.)+[\w-]{2,4}$"
            />
            
          </div>
          <br />
          <div class="form-group">
            <label style={{color: 'black'}} for="lblPassowrd">Enter password</label>
            <input style={{borderRadius:'0px'}}
              type="password"
              class="form-control"  
              id="password"
              placeholder="Password"
            />
          </div>
          <br /> 
          <button style={{backgroundColor: 'lightseagreen', border: 'none', borderRadius:'0px'}} type="submit" class="btn btn-primary">
            Login
          </button>
        </div>
        
      </form>
    </div>
  );
}
