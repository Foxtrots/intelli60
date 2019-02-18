import React,{Component} from "react";
import Medium from "./medium"
class Small extends Component{
 
//update=()=>{
//    if (this.state.lef>12)
//        this.state.lef=this.state.lef%12;
//    else
//        this.state.lef=this.state.lef+1;
//}
    render(){
    


        return(this.props.data.map(d=>(
                
                <div key={d.key}> 
                    <Medium newDataValue={d.new_value} oldDataValue={d.old_value} datKey={d.key} wid={d.wid} len={d.len} left={d.left} top={d.top} heading={d.heading} units={d.unit} img={d.image}/>
                </div>
               
                ))
                
                
                );
    }
    
};
export default Small;
