import React from "react";
import { AiOutlineBarcode  } from 'react-icons/ai';
import {RiLockPasswordLine  } from 'react-icons/ri';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Footer from "./Footer";
import Code from "./Code";
import Change from "./Change";


function Setting(){

    const navigate = useNavigate();

    const handlecode = () =>{
        navigate('/code')
    }

    const handlepassword = () =>{
        navigate('/change')
    }

    return(
      <div>
        <center><h4>Setting</h4></center>
        <div className="mybox" onClick={handlepassword}>
           <span><RiLockPasswordLine />&nbsp;Change Password</span>
        </div>
        <div className="mybox" onClick={handlecode}>
           <span><AiOutlineBarcode />&nbsp;Capital Code</span>
        </div>
        <Routes>
        
        <Route path="/change" element={<Change />} />
        <Route path="/code" element={<Code />} />
       
      </Routes>
      <Footer />
      </div>
    )
}

export default Setting