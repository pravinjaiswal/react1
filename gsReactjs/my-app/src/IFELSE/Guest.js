import React, { Component } from 'react'

export default class Guest extends Component {
    render() {
        return (
            <>
                <h1>Welcome User</h1>
                <button onClick={this.props.clickData}>Login</button>
                <button>Signup</button>
            </>
        )
    }
}
