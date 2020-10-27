import React from "react";
import useCustom from "./Custom";

const Apk = () =>{
    const data= useCustom();

    return(
        <React.Fragment>
            <h1>Count up:{data.count}</h1>
            <button type ="button" onClick={data.handleIncremnet}>Clicke me This is a fun</button>
        </React.Fragment>
    );
}


export default Apk;