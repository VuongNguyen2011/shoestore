import React, { Component } from "react";
import axios from "axios";

import "../../../assets/css/grid.css";
import "../../../assets/css/index.css";
import "../../../assets/css/theme.css";

class AddCategory extends Component {
  state = {
    name: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  saveCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", this.state.name);
    console.log(this.state);
    const res = await axios.post(
      "http://localhost:8000/api/add-category",
      formData
    );
    if (res.data.status === 200) {
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
                <h4>Add Category</h4>
                <a className="btn btn-primary" href="/admin/categories">
                  Back
                </a>
              </div>
              <div>
                <form onSubmit={this.saveCategory}>
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

export default AddCategory;
