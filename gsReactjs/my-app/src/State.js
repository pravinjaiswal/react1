import React, { Component } from "react";

class State extends Component{
    constructor(props){
        super(props)
            this.state={
                        name : "Rahul",
                        roll : this.props.roll
                        }
                }
            render(){
                return(
                        <h1>Hello, {this.state.name} and your roll number is {this.state.roll}?</h1>
                        );
                    }
        
    }
    // state={
    // name : "Rahul",
    // roll : this.props.roll
    // }
    // render(){
    //     return<h1>Hello, {this.state.name} and your roll number is {this.state.roll}?</h1>
    // }


export default State; 