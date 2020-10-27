import React,{ Component }from "react";
import User from "./User";
import Guest from "./Guest";
class App extends Component {
render()
{
const isRegistered  = this.props.consumer;
    if(isRegistered){
        return <User />;
    }else{
    return <Guest />;
    }
}

}

export default App;