import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        const arr =[10,20,30,40,50];
        const new_arr= arr.map(num => { return <li>{num * 2}</li>});
        return (
            <>
            return <ul> {new_arr}</ul>
            </>
        )
    }
}

