import React, { useState } from "react";

const App = () =>{

const [fullName , setFullName]= useState({
    fname : '',
    lname : '',
});

const inputEvent = (event) =>{
    // console.log(event.target.value);
    // console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const {name  , value } = event.target;

setFullName((preValue) => {
    return{
        ...preValue,
    [name] : value,
};
    // if (name === "fName") {
    //     return {
    //         fname: value,
    //         lname : preValue.lname
    //         };
    //     }else{
    //         if (name === "lName") {
    //             return {
    //                 fname: preValue.lname,
    //                 lname : value,
    //                 };
    //             }
    //     }
    });
};
const onsubmits = (event) =>{
    event.preventDefault();
};
    return(
        <>
            <div className="main_div">
                <form onSubmit={onsubmits}>
                    <div>
                        <h1>Hello {fullName.fname} {fullName.lname}</h1>
                        <input type="text" 
                        placeholder="Enter Your Name"
                        name ="fname" 
                        vlaue ={fullName.fname}
                        onChange={inputEvent}/>
                        <br/>
                        <input type="text"
                        placeholder="Enter Your Lastname" 
                        name = "lname" 
                        value ={fullName.lname} 
                        onChange={inputEvent}/>
                        <button>Click Me!!!</button>
                    </div>
                </form>
            </div>
    
        </>
    );
}
export default App;