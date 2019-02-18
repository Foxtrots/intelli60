import React,{Component} from "react";
class Medium extends Component{

    render(){
        const boxstyle={
           
//            backgroundColor:this.props.color,{this.props.newDataValue}, {this.props.oldDataValue}
           position:"absolute",
            top:this.props.top*20+'%',//20
            width:this.props.wid+'%',//11.1
            height:this.props.len*20+'%',//20
            left:this.props.left+'%',//11.1
           padding:"2px",
           zIndex:"-1",
           boxSizing:"border-box"
        };
        
        return(
                <div style={boxstyle} className={this.props.newDataValue!==this.props.oldDataValue?"flip":"def-flip"}>
                    <div className="innercontainer">
                    <div className="oldData">
                        <h5>{this.props.heading}</h5>
                        <center><img src={this.props.img} /></center>
                        <center><p id="datavalue">{this.props.newDataValue}<span id="units">{this.props.units}</span></p></center>
                    </div>
                    <div className="newData">
                        <h5>{this.props.heading}</h5>
                        <center><img src={this.props.img} /></center>
                        <center><p id="datavalue">{this.props.newDataValue}<span id="units">{this.props.units}</span></p></center>
                    </div>
                    
                    </div>     
                    
                </div>
                
                );
    }
    
};
export default Medium;
