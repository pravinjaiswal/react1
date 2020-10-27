import {useState} from "react" ;
const useCustom = () =>{
    const[count , setCount]= useState(0);

    const handleIncremnet = () => {
        setCount(count +1);
    }

    return{
        count,
        handleIncremnet
    }
}
export default useCustom;