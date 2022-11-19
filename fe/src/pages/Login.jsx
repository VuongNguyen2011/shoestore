import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AuthUser from "./AuthUser";

const Login = () => {
  const { http } = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = () => {
    // api call
    http.post("/login", { email: email, password: password }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-3">
        <div className="card p-4">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control"
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
              id="pwd"
            />
          </div>

          <button
            type="button"
            onClick={submitForm}
            className="btn btn-primary mt-4"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
