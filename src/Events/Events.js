import React, { Component } from "react";

class Events extends Component{
    constructor(){
        super();
        this.state = {
            number: 0
        }

        this.add = this.add.bind(this);
    }
    add(){
        this.setState(prevState => {
           return({
            number: prevState.number + 1
           })
        })
    }
    render(){
        return (
            <div className="container">
                <h1>{this.state.number}</h1>
                <button className="btn btn-success" onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default Events;