import React from "react";
import Footer from "./Footer";

function Nullpage(props){
    return(
       <div>
        <center>
            <h4>{props.name}</h4>
        </center>
        <hr></hr>
        <Footer/>
       </div>
    )
}

export default Nullpage