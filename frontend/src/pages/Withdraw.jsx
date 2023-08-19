import React from "react";

function Withdraw(){

  const chutiya = () =>{
    alert("unable to process contact admin")
  }
    return(
        
      <div className="withdrawala">
       <h5>WITHDRAW MONEY</h5>
        <form>
        <div className="new">
            <label>ENTER ACCOUNT NO</label><br></br>
            <input type="STRING"/><br></br>
            </div>
            <div className="new">
            <label>ENTER IFSC</label><br></br>
            <input type="STRING"/><br></br>
            </div>
            <div className="new">
            <label>ENTER CAPITAL CODE</label><br></br>
            <input type="STRING"/><br></br>
            </div>
           <div className="new">
            <label>ENTER AMOIUNT</label><br></br>
            <input type="STRING"/><br></br>
            </div>
          
            
            <center><input className="submitb" type="submit" value="Proceed" onClick={chutiya}></input></center>
        </form>
      </div>
    )
}

export default Withdraw;