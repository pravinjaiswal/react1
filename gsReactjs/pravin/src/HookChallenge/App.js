import React ,{useState} from "react";
const App = () =>{
    let newTime = new Date().toLocaleTimeString();
    const [cTime, setTime] =useState(newTime);

    const UpdateTime = () =>{
        newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    return(

        <div className="med">
        <h1>{cTime}</h1>
        <button onClick={UpdateTime}>GET TIME</button>
        </div>
    );

}
export default App;