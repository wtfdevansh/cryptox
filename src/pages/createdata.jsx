import React from "react";

function createdata(props){
  
    return( <div className="paisabox">
            <h7>{props.name}</h7>
            <div><p>AvailableBalance: <span className="blue"> {props.ab}</span> &nbsp;  Frozen: <span className="blue">{props.fr} </span> &nbsp;  Balance: <span className="blue">{props.balance} </span></p></div>
        </div>
    )
}

export default createdata