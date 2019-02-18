import React,{Component} from "react";
class Error extends Component{

    render(){
        return(
                <div class="outer" id="out">
                    <div class="middle">
                        <div className="popup" id="pop">
                        <span class="closebtn" id="clsbtn"><strong>&times;</strong></span>
                            <p id="popup-text"></p>
                            <center><iframe src="https://giphy.com/embed/1UX0CBjMp1rAePQVsa" width="50px" height="50px" className="giphy-embed"></iframe></center>
                               <p id="popup-text2"></p>
                </div>
                    </div>
                </div>
                
                );
    }
    
}
export default Error;
