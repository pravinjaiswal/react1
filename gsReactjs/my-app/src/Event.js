import React from 'react'


    // constructor(){
    //     super()
    //         this.handleClick= this.handleClick.bind(this);
    //             }
    // handleClick(){
    //     console.log("Button clicked",this)
    // }
    // render(){
    //     return(
    //         <div>
    //         <h1>Hello Event</h1>
    //         <button onClick={this.handleClick}>Click To Know  More</button>
    //         </div>
    //     )
    // }
const Event = () =>{
    
    
    const handleClick = () =>{
        console.log("Button Clicked",this);
    }
    return(
        <div>
            <h2>Hello rahul</h2>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}
    


export default Event;