import React,{useState}  from "react";
import data from "../walletdata";
import Createdata from "./createdata";
import Footer from "./Footer";
import {Routes, Route, useNavigate} from 'react-router-dom'
import Withdraw from "./Withdraw";
import Recharge from "./Recharge";
import { useEffect } from "react";
import axios from 'axios'
import Register from "./Register";

function createdata(data){
   
  
    return (< Createdata key = {data.id} name = {data.title} ab = {data.availableBalance} fr = {data.frozen} balance = {data.balance} />
  )}

function Wallet(props){
   const [Fund,setFund] = useState()
  const navigate = useNavigate();

  const handlewithdraw = () =>{
     navigate('/withdraw')
  }
  const handlerecharge = () =>{
   window.location.replace('https://bit.ly/446aqC8');
   }
   const emails = props.email;

   useEffect(() => {
   
    axios({ 
      method: 'post', 
      url: 'http://localhost:5000/wallet', 
      data: { email: emails } 
      }).then(response => {
         const funds = response.data
         console.log(funds)
         const fund = funds[0].funds
         setFund(fund)
      });
    
    
  });

  if(emails === "ggsgs"){
   navigate('/')
   return(
      <Routes> <Route path="/" element={<Register  />} /></Routes>
      
   )
   
}else{

    return(
        <section>
         
         <div className="wallet">
         <h5>Fund information </h5>
         <h7 className="total">Total funds</h7>
         <h1 className="paisa">{Fund} INR</h1>
         </div>

         <div className="withdraw">
            <button className="rech" onClick={handlerecharge}>Recharge</button>
            <button className="with" onClick={handlewithdraw}>withdraw</button>
         </div>
         <center>
         {data.map(createdata)}
         </center>
         <div className="extrax"></div>
         <Footer/>
         <Routes>
        
          <Route path="/withdraw" element={<Withdraw />} />
          
         
        </Routes>
        </section>
    )
}

}

export default Wallet;