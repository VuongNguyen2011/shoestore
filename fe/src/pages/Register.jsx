import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-3">
        <div className="card p-4">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Họ và tên"
              id="email"
            />
          </div>

          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              id="email"
            />
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Mật khẩu"
              id="pwd"
            />
          </div>
          <button type="button" class="btn btn-primary mt-3">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
