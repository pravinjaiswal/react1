import React, { Component } from 'react';
import User from "./User";
import Guest from "./Guest";


export default class App extends Component {
    state ={
        isLoggedin : true
    };

    clickLogin = () => {
        this.setState({isLoggedin : true});
    }

    clickLogout = () => {
        this.setState({isLoggedin : false});
    }

    clickLog
    render() {
        const isLoggedin = this.state.isLoggedin;
        
        if(isLoggedin){
            return <User clickData={this.clickLogout} />
        }else{
            return <Guest clickData={this.clickLogin}  />
        }
    }
}

