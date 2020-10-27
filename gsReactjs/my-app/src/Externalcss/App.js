import React, { Component } from 'react';
import "./App.css";
//import User from "./User";
import Car from "./Car";

export default class App extends Component {
    render() {
        let style = true;
        return (
            <React.Fragment>
                <h1 className="txt">Hello rahul</h1>
                <Car  name = "Pravin" rang={style? "txtb" : "txtg"}/>
            </React.Fragment>
        )
    }
}
