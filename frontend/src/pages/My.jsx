import React from "react";
import { AiFillSetting,AiOutlineMessage,AiFillCreditCard } from 'react-icons/ai';
import {  BiHelpCircle } from 'react-icons/bi';
import Footer from "./Footer";
import {Routes, Route, useNavigate} from 'react-router-dom'
import Nullpage from "./Nullpage";
import Setting from "./Setting";
import { RiRegisteredFill } from "react-icons/ri";
import Register from "./Register"

function My(props){
   const email = props.email
   const navigate = useNavigate();

   if(email === "ggsgs"){
      navigate('/')
      return(
         <Routes> <Route path="/" element={<Register  />} /></Routes>
         
      )
      
   }else{

  

   const handleinformation = () => {
     navigate('/information')
   }

   const handlemessage = () => {
      navigate('/message')
   }

   const handlehelp = () => {
      navigate('/help')
   }

   const handlesetting= () => {
      navigate('/setting')
   }
   


return(
    <>
     
        <div className="profile">
            <h7></h7>{props.email}<br></br>
            <h7>UID:47w54 </h7><br></br>
            <h7 style = {{color: "green"}}>CREDIT SCORE: 100</h7>
        </div>

        <div className="mybox" onClick={handleinformation}>
           <span><AiFillCreditCard />&nbsp;Collection Information</span>
        </div>
        <div className="mybox" onClick={handlemessage}>
           <span><AiOutlineMessage />&nbsp;User Message</span>
        </div>
        <div className="mybox" onClick={handlehelp}>
           <span><BiHelpCircle  />&nbsp;Help Center</span>
        </div>
        <div className="mybox" onClick={handlesetting}>
           <span><AiFillSetting /> &nbsp;Settings</span>
        </div>
        
    <Footer/>
    <Routes>
        
        <Route path="/information" element={<Nullpage name ={"Collection Information"} />} />
        <Route path="/message" element={<Nullpage name ={"User Message"} />} />
        <Route path="/help" element={<Nullpage name ={"Help Center"} />} />
        <Route path="/setting" element={<Setting  />} />
        
       
      </Routes>
    </>
)
   }
}

export default My