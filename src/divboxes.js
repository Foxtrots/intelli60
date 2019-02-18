import React,{Component} from "react";
import Small from "./small";
import Medium from "./medium";
import Large from "./large";
class Divbox extends Component{
    render(){
  
        return(
                <div className="container">
                        <Medium wid="2" len="2" />
                        <Small wid="1" len="1" color="black" />
                        <Small wid="1" len="1" color="#FFFF00"/>
                        <Small wid="1" len="1" color="black"/>
                        <Small wid="1" len="1" color="#FFFF00" />
                        <Small wid="1" len="1" color="#FFFF00"/>
                        <Small wid="1" len="1" color="black"/>
           
             
                        
                </div>
                );
    }
    
};
export default Divbox;
