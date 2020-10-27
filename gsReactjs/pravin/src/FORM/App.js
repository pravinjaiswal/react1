import React,{useState} from "react";

const App = () =>{

    const [name ,setName] =useState();
    const [fullname ,setFullname] = useState();
    const inputEvent = (event) =>{
        setName(event.target.value);

    };

    const onSubmit = () =>{
        setFullname(name);
    };
    return(
        <>
            <div>
                <h1>Hello {fullname}</h1>
                <input type= "text" placeholder="Enter Your Name" value={name}
                onChange={inputEvent}/>
                <button onClick={onSubmit}>Click Me</button>
            </div>
        </>
    );
}
export default App;