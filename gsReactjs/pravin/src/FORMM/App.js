import React, { useState } from 'react';

const App = () =>{

const [name ,setName ]=useState();
const [fullname ,setFullname ]=useState();
const [lastname,setLastname]=useState();
const [lastNamenew,setlastNamenew]=useState();

const inputEvent = (event) =>{
    setName(event.target.value);

};

const onSubmit = (event) =>{
    event.preventDefault();
    setFullname(name);
    setlastNamenew(lastname);
};

const inputEvents = (event) =>{
    setLastname(event.target.value)
};
return(
    <>
        <form>
            <div>
                <h1>Hello {fullname} {lastNamenew}</h1>
                <input type="text" placeholder="Enter your name" value={name} onChange={inputEvent}/>
                <input type="text" placeholder="Enter your Lastname" value={lastname} onChange={inputEvents}/>
                <button onClick={onSubmit}>Click Me</button>
            </div>
        </form>
    </>

);
}
export default App;