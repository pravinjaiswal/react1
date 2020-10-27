import React ,{useState} from 'react';

const App = () =>{
    const [ count , setCount] = useState(0);

    const IncNum =() =>{
        setCount(count + 1);
    };
    return(
        <div className="med">
        <h1> {count} </h1>
        <button onClick={IncNum}> click Me</button>
        </div>
    )
}

export default App;