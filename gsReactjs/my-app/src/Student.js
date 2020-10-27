import React, { Component } from "react";
import PropTypes from "prop-types";


class Student extends Component{
    render(){
        return(
            <div>
            <h1>Hello {this.props.name}</h1>
            <h2>Roll no. {this.props.roll}</h2>
            </div>
        );
    }
}

Student.propTypes ={
name: PropTypes.string.isRequired,
roll: PropTypes.number.isRequired
};

Student.defaultProps ={
    name :`Technical`
}

export default Student;
