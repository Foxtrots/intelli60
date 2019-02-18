import React,{Component} from "react";
class Large extends Component{
    render(){
        return(
                <div className={(this.props.len==3&&this.props.wid==3)?'len3-wid3':'default-tile'} >
                <p>Large tile .dkfhjsd dsfh ;ushfl/sfj </p>
                </div>
                );
    }
    
};
export default Large;
