import React ,{useState} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom'
import { AiOutlineHome} from 'react-icons/ai';
import { GiTrade} from 'react-icons/gi';
import { BsBoxSeam} from 'react-icons/bs';
import { BiWalletAlt} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import Home from "./Home";
import Trade from "./Trade";
import Orderbook from "./Orderbook"
import Wallet from "./wallet"
import My from "./My"



function Footer(){
    const navigate = useNavigate();

    const handlehome = () => {
        navigate('/home')

    }

    const handletrade = () => {
        navigate('/trade')

    }


    const handleorder = () => {
        navigate('/orderbook')

    }


    const handlewallet = () => {
        navigate('/wallet')

    }


    const handlemy = () => {
        navigate('/my')

    }


    return(
        <center>
        <div className="foot"> <button className="home" onClick={handlehome}> <div><AiOutlineHome/> </div> HOME </button> <button className="home"  onClick={handletrade}> <div><GiTrade/> </div> TRADE </button>  <button className="home"  onClick={handleorder}> <div><BsBoxSeam/> </div> ORDERS </button> <button className="home"  onClick={handlewallet}> <div><BiWalletAlt/> </div> WALLET</button> <button className="home"  onClick={handlemy}><div><CgProfile/> </div> MY</button></div>
        
        <Routes>
        
          <Route path="/home" element={<Home />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/orderbook" element={<Orderbook />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/my" element={<My />} />
          
         </Routes>
        </center>
    )

}

export default Footer;