import React, { Component } from "react";
import axios from "axios";


class AddColor extends Component {
    state = {
        name: ''
    }
    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveColor = async (e) => {
        e.preventDefault();
        console.log(this.state)
        const res = await axios.post("http://localhost:8000/api/add-color", this.state);
        if (res.data.status === 200) {
            console.log(res.data.message);
            this.setState({
                name: ''
            })
        }
    }

    render() {
        
        return (

            <div className="container">
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div >
                                <h4>
                                    Add Products

                                </h4>
                                <a className="btn btn-primary" href="/colors">Back</a>
                            </div>
                            <div >

                                <form onSubmit={this.saveColor}>
                                    
                                    <div>
                                        <label>Product Name</label>
                                        <input type={"text"} name={"name"} onChange={this.handleInput} value={this.state.name} />
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