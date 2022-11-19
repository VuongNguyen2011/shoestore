import React, { Component } from "react";
import axios from "axios";

import "../../../assets/css/grid.css";
import "../../../assets/css/index.css";
import "../../../assets/css/theme.css";

export default class Orders extends Component {
  state = {
    name: "",
    order: [],
    loading: true,
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:8000/api/oders");
    console.log(res.data.status);
    if (res.data.status === 200) {
      this.setState({
        order: res.data.order,
        loading: false,
      });
    }
  }


  render() {
    var HTMLTable = "";
    if (this.state.loading) {
      HTMLTable = (
        <tr>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
          <td>loading...</td>
        </tr>
      );
    } else {
      HTMLTable = this.state.order.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.memberID}</td>
            <td>{item.cost}</td>
            <td>{item.status}</td>
            <td>
              <a
                href={`orderdetail/${item.id}`}
                className="btn btn-primary btn-sm"
              >
                Detail
              </a>
            </td>
          </tr>
        );
      });
    }
    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div
                  className="card-header"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>Orders</h4>
                </div>
                <div className="card-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">MemberID</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>{HTMLTable}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}