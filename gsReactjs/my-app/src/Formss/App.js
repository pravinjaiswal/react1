import React, { Component } from 'react'

export default class App extends Component {
    state ={
        value : "",
        text : ""
    }
    handleChange = (e) =>{
        this.setState({value:e.target.value})
        console.log(e.target.value);
    };

    handlesChange = (e) =>{
        this.setState({text:e.target.value.substr(0 , 10) });
        console.log(e.target.value);
    };
    render() {
        return (
            <div>
                <form>
                <h1>Controlled by react</h1>
                    <input type= "text" value={this.state.value} 
                        onChange={this.handleChange}
                    />

                <h2>Write your knowledge about this topic</h2>
                    <textarea type="text" vale ={this.state.name}
                    onChange={this.handlesChange}></textarea>
                
                </form>
            </div>
        )
    }
}
