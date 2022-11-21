import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";


export default function SignInPage() {
  return (
    <div className="text-center m-5-auto">
      <h2>Sign in to us</h2>
      {/* <form action="/home"> */}
        <p>
          <label>Email</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          <button id="sub_btn" type="submit" onClick={Dashboard}>
            Login
          </button>
        </p>
      {/* </form> */}
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
