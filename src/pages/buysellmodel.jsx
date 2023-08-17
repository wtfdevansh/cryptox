
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from "axios"
import { AiOutlineUnorderedList } from 'react-icons/ai'

function ModalDialog(props) {
  const [isShow, invokeModal] = React.useState(false)
  const [action,setAction] = React.useState("")
  const [message, setMessage] = React.useState([]);
  const [price,setprice] = React.useState()
  const [Fund,setFund] = React.useState()
  const [Time,setTime] = React.useState(0)
  const [amount,setAmount] = useState(0)
  const [purchase,setPurchase] = useState()
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const emails = props.email;
  const name = props.Name;
  const buyat = props.Price;


  const initModal = (e) => {
    setAction(e.target.value)
    return invokeModal(!(isShow))
   
  }

  const endModal = (e) => {
    setAction("")
    return invokeModal(!(isShow))
   
  }

  function samey(data)  {
    if(data === 120){
      setActive(!active);
      setActive2(false)
      setActive3(false)
    }else if(data === 180){
      setActive(false)
      setActive2(!active2);
      setActive3(false)
    }else{
      setActive(false)
      setActive2(false)
      setActive3(!active3);
    }
    
    setTime(data)
  }

  const handlechange = (e) =>{
    setAmount(e.target.value);
  }

  const handlesubmit = (e) =>{
    
if(amount === '' && Time < 100 ){
    alert("fill all fields")

}else if(purchase === true){
   alert("already purchase")
}else if(amount<1000){
   alert("minimum amount should be of 1000")
}else if(Fund<amount){
  alert("insufficient balance")
}else{
   setPurchase(true)
    axios({ 
      method: 'post', 
      url: 'http://localhost:5000/trade', 
      data: { email: emails, item: name, direction: action, buyprice: buyat,money:amount,time: Time  } 
      }).then(response => {
         
      });
      invokeModal(!(isShow))
      const timer = Time*1000
      setTimeout(myGreeting, timer)
      setAction("")
    
}
  }

  function myGreeting(){
    setPurchase(false)
  }

  



  
  useEffect(() => {
   
    axios({ 
      method: 'post', 
      url: 'http://localhost:5000/wallet', 
      data: { email: emails } 
      }).then(response => {
         const funds = response.data
         const fund = funds[0].funds
         setFund(fund)
      });
    
    
  });



  


  return (
    <>
      <Button className="buy" value="BUY" variant="success" onClick={initModal}>
        BUY
      </Button>
      <Button style={{backgroundColor: "red"}} className="sell" value= "SELL" variant="success" onClick={initModal}>
        SELL
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={endModal}>
          <Modal.Title>{  props.Name + "/usdt"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        

          
           
        
           <div> current price:<span style={{fontWeight: "bold", color: "green"}}>{props.Price}</span> &nbsp;  &nbsp; direction: <span style={{fontWeight: "bold",color: "green"}}>{action}</span></div>
      <hr></hr>
          <div>
            <h4>Trading Time</h4>
            <center>
            <Button style ={{'backgroundColor': "#040225",border: active ? "5px solid blue":"none"}} className='timings'  onClick={() => samey(120)}><center><span className='time'>Time</span><span className='blues'>120S</span><span className='greens'>Scale:40.00%</span> </center></Button>
            <Button style ={{'backgroundColor': "#040225",border: active2 ? "5px solid blue":"none"}} className='timings'  onClick={() => samey(180)}><center><span className='time'>Time</span><span className='blues'>180S</span><span className='greens'>Scale:30.00%</span></center> </Button>
            <Button style ={{'backgroundColor': "#040225",border: active3 ? "5px solid blue":"none"}} className='timings'  onClick={() => samey(240)}><center><span className='time'>Time</span><span className='blues'>240S</span><span className='greens'>Scale:30.00%</span></center> </Button>
          </center>
          </div>
<hr></hr>
          <div>
            <h4>Available Balance: {Fund} INR</h4>
            <input type='number' className='inputs' placeholder='minimum amount 1000' value = {amount} onChange={handlechange}></input>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={endModal}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handlesubmit}>
            {action}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalDialog