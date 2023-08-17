import React , {useState, useEffect}from "react";
import TradingViewWidget from "./tradingview";
import Collection from "./collection";
import ModalDialog from "./buysellmodel";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from "./Home";
import Tvsymbol from "../Tv";
import Register from "./Register";



function Trade(props){

    const [message, setMessage] = useState([]);
    
    const [data, setData] = useState("bitcoin");
    const email = props.email

 
    const navigate = useNavigate()
    let names = 0


    

    const sendData = (data) => {
      setData(data)
      
    
    }

    const handlehomies = () => {
       navigate('/home')
    }


    

    

    useEffect(() => {
      fetch("http://localhost:5000/crypto")
        .then((res) => res.json())
        .then((array) => {
            console.log(array);
            setMessage(array)
        }
        );
    }, []);

 
    if(email === "ggsgs"){
      navigate('/')
      return(
         <Routes> <Route path="/" element={<Register  />} /></Routes>
         
      )
      
   }else{

    return(
        <section >
            <div className="trade">
    
              <button className="homies" onClick={handlehomies}><i className="fa fa-home white"></i></button>
        
                <h5 className="white btc">{data}</h5>
            
            
              <div className="statscontainer">
                <h5 className="white betaji">{data + "/usdt"}</h5>
                  <Collection sendData = {sendData} />
                  
                  {message.map( (res, index)=> {
                       
                    if(res.name === data){
                       names = parseInt(res.usd.usd)
                      

                    return(
                    
                      <div className="profit"><div className="white"> {res.usd.usd} </div> {(res.usd.usd_24h_change>0) ? <div className="green"> &#x25B2;{res.usd.usd_24h_change.toFixed(2) + "%"}</div> :  <div className="red"> &#x25BC;{res.usd.usd_24h_change.toFixed(2) + "%"}</div> }</div>
                    )
                    }
                    

                  })}
                  </div>
                  
              
            </div>
            <TradingViewWidget   Name = {data} />
            <center>
            <div className="container mt-3">
           
  
              <ModalDialog Name = {data} Price = {names} email = {props.email} />
      
  
            
            </div>
            </center>  
            <Routes>
            <Route path="home" element={<Home />} />
            </Routes>
        </section>
      
    )
                }
}

export default Trade;