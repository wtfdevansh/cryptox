import React, {useState} from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from  "./pages/Login"
import Home from "./pages/Home";
import Trade from "./pages/Trade";
import TradingViewWidget from "./pages/tradingview";
import Wallet from "./pages/wallet";
import Orderbook from "./pages/Orderbook";
import Collection from "./pages/collection";
import Createdata from "./pages/createdata";
import My from "./pages/My";
import Setting from "./pages/Setting";
import Nullpage from "./pages/Nullpage";
import Code from "./pages/Code";
import Change from "./pages/Change";
import Recharge from "./pages/Recharge";
import Withdraw from "./pages/Withdraw";

function App(){
   const[email,setEmail] = useState("ggsgs")
   const[password,setPassword] = useState("")

   const  sendEmail = (data) =>{
       setEmail(data)
   }
  
    return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register sendEmail = {sendEmail}  />} />
        <Route path="login" element={<Login sendEmail = {sendEmail}/> } />
        <Route path="home" element={<Home/>} />
        <Route path="trade" element={<Trade  email = {email} />} />
        <Route path="wallet" element={<Wallet email = {email}/>} />
        <Route path="orderbook" element={<Orderbook email = {email} />} />
        <Route path="modal" element={<Collection />} />
        <Route path="createdata" element={<Createdata />} />
        <Route path="my" element={<My email = {email} />} />
        <Route path="information" element={<Nullpage name ={"Collection Information"} />} />
        <Route path="message" element={<Nullpage name ={"User Message"} />} />
        <Route path="help" element={<Nullpage name ={"Help Center"} />} />
        <Route path="/setting" element={<Setting  />} />
        <Route path="/code" element={<Code  />} />
        <Route path="/change" element={<Change email = {email}/>} />
        <Route path="/recharge" element={<Recharge/>} />
        <Route path="/withdraw" element={<Withdraw/>} />

      </Routes>
    </BrowserRouter>
 )

}

export default App;