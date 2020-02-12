import React from "react";
import Matched from "./Matched";
import Waiting from "./Waiting";

export default class Match extends React.Component{
    render(){
        const isMatched = Boolean("true");
        function match(){
            if (isMatched){
                return(<Matched />)
            }
            else {
                return (<Waiting />)
            }
        }
        
        return({match})
        
    }
}