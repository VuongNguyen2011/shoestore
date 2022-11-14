import React, { Component } from "react";
import axios from "axios";

class EditColor extends Component {
  state = {
    name: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await axios.get(`http://localhost:8000/api/edit-color/${id}`);
    if (res.data.status === 200) {
      this.setState({
        name: res.data.colors.name,
      });
    }
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  updateColor = async (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const res = await axios.put(
      `http://localhost:8000/api/update-color/${id}`,
      this.state
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
                <h4>Update Color</h4>
                <a className="btn btn-primary" href="/colors">
                  Back
                </a>
              </div>
              <div>
                <form onSubmit={this.updateColor}>
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

export default EditColor;
