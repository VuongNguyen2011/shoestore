import React, { Component } from "react";
import axios from "axios";

import "../../../assets/css/grid.css";
import "../../../assets/css/index.css";
import "../../../assets/css/theme.css";
import swal from "sweetalert";

class AddSize extends Component {
  state = {
    name: "",
    type: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  saveSize = async (e) => {
    e.preventDefault();
    this.state.type = "1";
    console.log(this.state);
    const res = await axios.post(
      "http://localhost:8000/api/add-size",
      this.state
    );
    if (res.data.status === 200) {
      swal("Success","Thêm thành công","success");

      console.log(res.data.message);
      this.setState({
        name: "",
        type: "",
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
                <h4>Add Size</h4>
                <a className="btn btn-primary" href="/admin/sizes">
                  Back
                </a>
              </div>
              <div>
                <form onSubmit={this.saveSize}>
                  <div>
                    <label>Size</label>
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

export default AddSize;
