import React, { useState } from "react";
import axios from "axios"

function Change(props){
  const[newpass,setnewpass] = useState()
  const[newpass2,setnewpass2] = useState()
  const emails = props.email

  const handleclick = () => {

    if(newpass === newpass2){

      axios({ 
        method: 'post', 
        url: 'http://localhost:5000/change', 
        data: { email: emails,password: newpass} 
        }).then(response => {
           
        });

        alert("successfully update")

    }else{
      alert("password not matched")
    }

  }

  const handlechangeone = (e) => {
    setnewpass(e.target.value)
  }

  const handlechangetwo = (e) => {
    setnewpass2(e.target.value)
  }



    return(
      <div className="formwala">
        <form>
           <div className="new">
            <label>NEW PASSWORD</label><br></br>
            <input type="password" value={newpass} onChange={handlechangeone}/><br></br>
            </div>
            <div className="confirm">
            <label>CONFIRM  PASSWORD</label><br></br>
            <input type="password" value={newpass2} onChange={handlechangetwo}/><br></br>
            </div>
            <center><input className="submitb" type="submit" value="Submit" onClick={handleclick}></input></center>
        </form>
      </div>
    )
}

export default Change;