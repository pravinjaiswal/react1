import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <>
                <h1>Welcome user</h1>
                <button onClick={this.props.clickData}>Log out</button>
            </>
        )
    }
}
