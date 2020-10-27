import React, { Component } from "react";

// const Prop = (props) =>{
//     return <h1>Hello doofus {props.children}</h1>
// };

class Prop extends Component{
    render(){
        return(
            <h1>Hello Rahul, {this.props.children}</h1>
        );
    }
}

export default Prop;