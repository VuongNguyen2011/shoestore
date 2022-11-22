import React from "react";
import { Link, useHistory } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const processLogin = () => {

  };


  return (
        <div className=" row justify-content-center pt-5" style={{margin: '150px auto'}}>
          <div className=" col-sm-3">
            <div className=" card p-4" style={{backgroundColor: '#eff'}}>
              <center><h3>ADMIN LOGIN</h3></center>
              <div className="form-group mt-3">
                <input type="email" className="form-control" placeholder="Email" id="email"
                />
              </div>
              <br />
              <div className="form-group mt-3">
                <input
                  type="password" className="form-control" placeholder="Password"  id="password"
                />
              </div>

              <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default Login;