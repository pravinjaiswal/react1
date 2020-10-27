import React,{useState} from "react";
const Hook =() =>{
    const [name,setName] = useState("Rahul");
    const[roll ,setRoll] = useState("405");
    //const name =nameStateVariable[0];

    
    const handleClick =() =>{
        setName("Pravin");
        setRoll("102");
        
    }
    return(
    <React.Fragment>
    <h1>Name : {name}</h1>
    <h2>Roll number : {roll}</h2>
    <button type="button" onClick={handleClick}>Click me</button>
    </React.Fragment>
    );
    }

export default Hook;