import React, { useState } from "react";

const App = () =>{
    const [ name ,setName]=useState();
    const [ fullname, setFullname ] = useState();

    const [ lastname ,setLastname]=useState();
    const [ lastnamenew, setLastnamenew ] = useState();


    const  inputEvent = (event) =>{
        setName(event.target.value) ;   
    };

    const inputEventTwo = (event) =>{
        setLastname(event.target.value)
    };
    const onsubmits = () =>{
        setFullname(name);
        setLastnamenew(lastname);
    } 
    return(
        <>
            <div>
                <h1>Hello {fullname} {lastnamenew} </h1>
                <input type="text"   value = {name } placeholder="Enter Your Name " onChange={inputEvent}/>
                <input type="text"   value = { lastname} placeholder="Enter Your Lastname " onChange={inputEventTwo}/>
                <button onClick={onsubmits}>Click Me</button>
            </div>
        </>
    );
};

export default App;