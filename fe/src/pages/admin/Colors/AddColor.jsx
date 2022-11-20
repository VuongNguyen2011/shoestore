import React, { Component } from "react";
import axios from "axios";

import "../../../assets/css/grid.css";
import "../../../assets/css/index.css";
import "../../../assets/css/theme.css";
import swal from "sweetalert";

class AddColor extends Component {
  state = {
    name: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  saveColor = async (e) => {
    e.preventDefault();
    console.log(this.state);
    const res = await axios.post(
      "http://localhost:8000/api/add-color",
      this.state
    );
    if (res.data.status === 200) {
      swal("Success","Thêm thành công","success");
      console.log(res.data.message);
      this.setState({
        name: "",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div>
                <h4>Add Colors</h4>
                <a className="btn btn-primary" href="/admin/colors">
                  Back
                </a>
              </div>
              <div>
                <form onSubmit={this.saveColor}>
                  <div>
                    <label>Name</label>
                    <input
                      type={"text"}
                      name={"name"}
                      onChange={this.handleInput}
                      value={this.state.name}
                    />
                  </div>

                  <div>
                    <button type="submit"> Save </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddColor;
