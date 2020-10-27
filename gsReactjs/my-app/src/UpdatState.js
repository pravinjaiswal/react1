import React, { Component } from 'react'

export default class  extends Component {
    constructor(props){
        super(props)
        this.state={
            name :"Pravin",
            roll : this.props.roll
        }
    }
    handleClick = () =>{
    this.setState({name:"Vishal" , roll:"105"});
    }
    render() {
        return (
            <div>
                <h1>Hello {this.state.name} is your roll no. is {this.state.roll}?.</h1>
                <button onClick={this.handleClick}>Know More</button>
            </div>
        )
    }
}
