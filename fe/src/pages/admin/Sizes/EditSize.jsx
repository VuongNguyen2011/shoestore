import React, { Component } from "react";
import axios from "axios";

import "../../../assets/css/grid.css";
import "../../../assets/css/index.css";
import "../../../assets/css/theme.css";

class EditSize extends Component {
  state = {
    name: "",
    type: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await axios.get(`http://localhost:8000/api/edit-size/${id}`);
    if (res.data.status === 200) {
      this.setState({
        name: res.data.sizes.name,
        type: res.data.sizes.type,
      });
    }
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  updateSize = async (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    console.log(this.state);
    const res = await axios.put(
      `http://localhost:8000/api/update-size/${id}`,
      this.state
    );
    if (res.data.status === 200) {
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
                <h4>Update Size</h4>
                <a className="btn btn-primary" href="/admin/sizes">
                  Back
                </a>
              </div>
              <div>
                <form onSubmit={this.updateSize}>
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

export default EditSize;
