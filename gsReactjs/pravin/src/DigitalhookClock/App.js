import React, { useState } from "react";

const App = () =>{
    let newTime = new Date().toLocaleTimeString();
    const [cTime ,setCtime]=useState(newTime);

    const UpdateTime = () =>{
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }
    setInterval(UpdateTime,1000);
    return(
        <div  className ="med">
        <h1>{cTime}</h1>
        
        </div>
    );
}

export default App;