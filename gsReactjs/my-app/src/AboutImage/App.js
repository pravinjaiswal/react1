import React ,{Component} from "react";

export default class App extends Component{
    render(){
        return(
            <div>
                <img src={process.env.PUBLIC_URL+ "/pic.jpeg"} alt="mpic" width = "300px" />
            </div>
        );
    
        }
}