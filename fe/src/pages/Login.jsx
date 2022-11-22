import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";

export default function SignInPage() {
  return (
    <div className="text-center col-3" style={{margin: '0 auto'}} >
      <form>
        <h2>Login</h2>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"  
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
