import React, { Component } from "react";

class SocialItems extends Component{
    render() {
        return(
            <li className="social-list list-group-item">
                <div className="lista">
                    <input type="checkbox" id={this.props.p.id}/>
                    <label htmlFor={this.props.p.id}> <img alt={`icon of ${this.props.p.id}`} src={this.props.p.img}/> </label>
                </div>
            </li>
        )
    }
}


export default SocialItems;
