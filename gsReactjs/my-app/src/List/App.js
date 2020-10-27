import React, {Component } from "react";

class App extends Component{
    render(){
        const arr = [10,20,30,40,50];
        return(
        <>
        <ul>
        {
            arr.map(num => {return <li>{num}</li>})
            
            /* <ul>
            <li>{arr[0]}</li>
            <li>{arr[1]}</li>
            <li>{arr[2]}</li>
            <li>{arr[3]}</li>
            <li>{arr[4]}</li> */}

        </ul>

        </>
        );
    }
}
export default App;