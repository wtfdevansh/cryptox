import React,{useEffect, useState} from "react";
import Footer from "./Footer";
import axios from "axios"
import {Routes, Route, useNavigate} from 'react-router-dom'

import Register from "./Register";



function Orderbook(props){

  const emails = props.email
  const[items,setItem] = useState(" ")
  const[amount,setAmount] = useState()
  const[buyat,setBuyat] = useState()
  const[direction,setDirection] = useState()
  const[time,setTime] = useState()
  const[data,setData] = useState('')
  const[path,setpath] = useState(false)
  const navigate = useNavigate();
 

  async function closedown () {
    setpath(true)
   console.log(data)
       
   
      
    
       
      
  }

  const cross = () =>{
    setpath(false)
   
  }

  
  

 


  useEffect( () => {
   
    axios({ 
      method: 'post', 
      url: 'https://cryptox-backend.vercel.app/wallet', 
      data: { email: emails } 
      }).then(response => {
        console.log(response)
        setData(response)
        const datas = response.data
        const temp = datas[0].position
        setItem(temp.item)
        setAmount(temp.amount)
        setBuyat(temp.buyat)
        setDirection(temp.direction)
        setTime(temp.time)
        
       
      });
    
    
  });
  if(emails === "ggsgs"){
    navigate('/')
    return(
       <Routes> <Route path="/" element={<Register  />} /></Routes>
       
    )
    
 }
 else{

  if(path === true){
    return(
      <section>
      <center>
      <div className="orderrecord">Order Record</div>
        <div className="buttons">
          <button className="position" onClick={cross}>position order</button>
          <button className="closing" onClick={closedown}>closing order</button>
        </div>
        </center>
       
        {(data.data[0].closed).map((res,index) =>{
          
          return(
            <div className="dibbax">
            <hr></hr>
            <center><span className="styling">{res.item}</span></center>
            <hr></hr>
          <div><span className="orderhatja1">Investment amount</span><span className="orderhatja2">Direction</span><span className="orderhatja3">Investment Time</span></div>
          <div><span className="orderjyadax styling">{res.amount} </span><span className="orderjyada styling">{res.direction}</span><span className="styling">{res.time} </span></div>
          <div className="uparhoja">Buy price:<span className="styling">{res.buyat}</span></div>
          <div className="uparhoja">Closing price: <span className="styling">{res.closeat}</span></div>
          <div className="uparhoja">Profit: {(res.profit)>0  ?<span className="styling profitup">{res.profit}</span> :<span className="styling profitdown">{res.profit}</span>} </div>
          </div>
          )
        } )}
        <div className="extrax"></div>
        <Footer/>
      </section>
    )
  }else{

    return(
        <section>
        <center>
        <div className="orderrecord">Order Record</div>
          <div className="buttons">
            <button className="position" onClick={cross}>position order</button>
            <button className="closing" onClick={closedown}>closing order</button>
          </div>
          </center>
          
          <div className="dibbax">
            <hr></hr>
            <center><span className="styling">{items}</span></center>
            <hr></hr>
          <div><span className="orderhatja1">Investment amount</span><span className="orderhatja2">Direction</span><span className="orderhatja3">Investment Time</span></div>
          <div><span className="orderjyadax styling">{amount} </span><span className="orderjyada styling">{direction === "BUY" ?<span className="green styling">{direction} </span>:<span className="red styling">{direction}</span>}</span><span className=" styling">{time}</span></div>
          <div className="uparhoja">Buy price:<span className="styling">{buyat}</span></div>
          <div className="uparhoja">Closing price: ___</div>
          <div className="uparhoja">Profit: ___ </div>
          </div>
          <Footer/>
        </section>

    )
  }
}

}

export default Orderbook;

