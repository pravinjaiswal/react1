import React, { Component } from 'react'

export default class App extends Component {
    render() {
        const btnstyle ={
            
            backgroundColor :"skyblue",
            color:"white"
        }
        return (
            <div>
                <button style={btnstyle}>Click here</button>
            </div>
        )
    }
}
