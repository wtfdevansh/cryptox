import React , {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AiFillSetting,AiOutlineMessage,AiFillCreditCard } from 'react-icons/ai';
import {  BiHelpCircle,BiMoneyWithdraw } from 'react-icons/bi';
import {  BsCurrencyExchange } from 'react-icons/bs';
import {  RiCustomerService2Line } from 'react-icons/ri';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Trade from "./Trade";
import Nullpage from "./Nullpage";
import Withdraw from "./Withdraw";
import Recharge from "./Recharge";
import Image from "../Image";


 function  Home(props){

    const [message, setMessage] = useState([]);
    const navigate = useNavigate();
    
    
    useEffect(() => {
        
        const interval = setInterval(() => {
          fetch("http://localhost:5000/crypto")
          .then((res) => res.json())
          .then((array) => {
              console.log(array);
              setMessage(array)
          });
        }, 5000); //set your time here. repeat every 5 seconds
      
        return () => clearInterval(interval);
      }, [message]);



    const handlewithdraw = () =>{
       navigate('/withdraw')
    }
    const handlerecharge = () =>{
        window.location.replace('https://bit.ly/446aqC8');
     }

      const handlecustomer = () =>{
         navigate('/help')
      }

      const handlexchange = () =>{
        navigate('/trade')
     }

    return(
        <section className="Home">
        <Header />

       <div className="maincrypto"> 
       <div className="first"> <span className="btcmain">BTC/USDT </span> <span className="ethmain">ETH/USDT  </span> <span className="dogemain">DOGE/USDT </span> </div>
       <div className="second"> <div className="bt">   {message.map( (res, index)=> {if(index === 0){return( <div className="white"> {res.usd.usd} </div> )}})} </div> <div className="et"> {message.map( (res, index)=> {if(index === 2){return( <div className="white"> {res.usd.usd} </div> )}})}</div>  <div className="do"> {message.map( (res, index)=> {if(index === 1){return( <div className="white"> {res.usd.usd} </div> )}})}</div>  </div>
       <div className="third"> <div className="common"> {message.map( (res, index)=> {if(index === 0){return(<div className="profit common">{(res.usd.usd_24h_change>0) ? <div className="green common"> &#x25B2;{res.usd.usd_24h_change.toFixed(2) + "%"}</div> :  <div className="red common"> &#x25BC;{res.usd.usd_24h_change.toFixed(2) + "%"}</div> }</div>)}})}</div> <div className="common">{message.map( (res, index)=> {if(index === 2){return(<div className="profit common">{(res.usd.usd_24h_change>0) ? <div className="green common"> &#x25B2;{res.usd.usd_24h_change.toFixed(2) + "%"}</div> :  <div className="red common"> &#x25BC;{res.usd.usd_24h_change.toFixed(2) + "%"}</div> }</div>)}})}</div>  <div className="common">{message.map( (res, index)=> {if(index === 1){return(<div className="profit common">{(res.usd.usd_24h_change>0) ? <div className="green common"> &#x25B2;{res.usd.usd_24h_change.toFixed(2) + "%"}</div> :  <div className="red common"> &#x25BC;{res.usd.usd_24h_change.toFixed(2) + "%"}</div> }</div>)}})}</div> </div> 
       </div>

       <div className="help"> <span className="recharge" onClick={handlerecharge}><AiFillCreditCard /> &nbsp; RECHARGE </span> <span className="withdra" onClick={handlewithdraw}><BiMoneyWithdraw/> &nbsp; WITHDRAW</span>  <span className="exchange" onClick={handlexchange} ><BsCurrencyExchange/> &nbsp; EXCHANGE </span> <span className="customer" onClick={handlecustomer}><RiCustomerService2Line/> &nbsp;CUSTOMER SERVICE</span></div>
        <div className="tablecontainer">

        <table>
        <tr>
            <th style = {{width: "5%"}}> S.no</th>
            <th style = {{width: "25%"}}>Name</th>
            <th style = {{width: "15%"}}>Latest price</th>
            <th className="lastcolumn">24hr up and down</th>
        </tr>
        
        {message.map( (res, index)=> {
            return(<tr>
        <td>{index + 1}</td>
        <td> {Image(index)}   {res.name}</td>
        <td>{res.usd.usd} usd</td>
        <td>{(res.usd.usd_24h_change>0) ? <div className="green"> &#x25B2;{res.usd.usd_24h_change.toFixed(2) + "%"}</div> :  <div className="red"> &#x25BC;{res.usd.usd_24h_change.toFixed(2) + "%"}</div> }</td>
           </tr> )
        }
        )}
      
       </table>

        </div>
        <div className="extra"></div>
        
      
        <Footer />
        
        <Routes>
        
        <Route path="/trade" element={<Trade   />} />
        <Route path="/help" element={<Nullpage name ={"Help Center"} />} />
        <Route path="/withdraw" element={<Withdraw />} />
      
      
        </Routes>
        </section>
    )

}

export default Home;