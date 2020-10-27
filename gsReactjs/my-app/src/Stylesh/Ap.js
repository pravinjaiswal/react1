import React, { Component } from 'react'

export default class Ap extends Component {
    render() {
        const txtc= {
            color : "blue"
        };
        const txts = {
            fontSize : "50px"
        }
        return (
            <div>
            <h1 style={{...txtc, ...txts}}>Hello Pravin</h1>
            </div>
        )
    }
}
