import React, { Component } from 'react';

export default class Statis extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Rahul",
            roll:this.props.roll
    }
}
    render() {
        return (
            <div>
                <h1>Hello {this.state.name}, is your roll number is {this.state.roll}?</h1>
            </div>
        )
    }
}
