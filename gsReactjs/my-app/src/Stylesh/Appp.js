import React, { Component } from 'react'

export default class Appp extends Component {
    state ={
        change : false
    }
    clickHandle = () =>{
        this.setState({change:true});
    };
    render() {
        const btnstyle ={
            color:" blue",
            backgroundColor:"orange"
        };
        if(this.state.change){
            btnstyle.backgroundColor ="white";
        }
        return (
            <div>
                <button onClick={this.clickHandle} style ={btnstyle}>Button</button>
            </div>
        )
    }
}
