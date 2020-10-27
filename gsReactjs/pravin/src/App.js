import React, { Component } from 'react'
import { add, sub , mul ,divi  } from "./Calc";
export default class App extends Component {
    render() {
        return (
            <>
            <ol>
                <li>{add(20,4)}</li>
                <li>{sub(40,8)}</li> 
                <li>{mul(40,8)}</li>
                <li>{divi(40,8)}</li>
            </ol>
            </>
        )
    }
}
