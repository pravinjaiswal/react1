import React, { Component } from 'react';
import "./Car.css";

export default class Car extends Component {
    render() {
        return (
            <>
                <h1 className={this.props.rang}>You are Really smart {this.props.name}</h1> 
                <h2 className="txtb">You are awesome man.</h2>
            </>
        )
    }
}
