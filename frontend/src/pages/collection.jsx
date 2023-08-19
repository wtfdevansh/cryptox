import React,{useState,useEffect} from 'react'
import { Modal, Button } from 'react-bootstrap'
import Trade from './Trade'
import Tvsymbol from '../Tv'

function Collection(props) {
  const [isShow, invokeModal] = React.useState(false)
  const [name,setName] = useState("")

  const initModal = () => {
     invokeModal(!(isShow))
     
  }
 


  
    const user = name
   

  

    const submite = () => {
      props.sendData(user)
     
      invokeModal(!(isShow))
     
    }
  

  return (
    <>
      <Button style={{marginRight: "10px"}} variant="success" onClick={initModal}>
          more crypto
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Select crypto on which you want to trade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <fieldset>
        <div>
        <input type="radio" id="BTC/USDT"  value="bitcoin" name="fav_language" onChange={(e) => setName(e.target.value)}></input>
        <label for="BTC/USDT">BTC/USDT</label>
        </div>
        <hr></hr>
        <div>
        <input type="radio" id="DOGE/USDT" value="dogecoin" name="fav_language" onChange={(e) => setName(e.target.value)}></input>
        <label for="DOGE/USDT">DOGE/USDT</label>
        </div>
        <hr></hr>
        <div>
        <input type="radio" id="ETH/USDT" value="ethereum" name="fav_language"  onChange={(e) => setName(e.target.value)}></input>
        <label for="ETH/USDT">ETH/USDT</label>
        </div>
        <hr></hr>
        <div>
        <input type="radio" id="LITE/USDT" value="litecoin" name="fav_language" onChange={(e) => setName(e.target.value)}></input>
        <label for="LITE/USDT">LITE/USDT</label>
        </div>
        <hr></hr>
        <div>
        <input type="radio" id="MON/USDT" value="monero" name="fav_language" onChange={(e) => setName(e.target.value)}></input>
        <label for="MON/USDT">MON/USDT</label>
        </div>
        <hr></hr>
        <div>
        <input type="radio" id="NAME/USDT" value="namecoin" name="fav_language" onChange={(e) => setName(e.target.value)}></input>
        <label for="NAME/USDT">NAME/USDT</label>
        </div>
        <hr></hr>
        <div>
        <input type="radio" id="PEER/USDT" value="peercoin" name="fav_language" onChange={(e) => setName(e.target.value)}></input>
        <label for="PEER/USDT">PEER/USDT</label>
        </div>
        <hr></hr>
        <div>
        <input type="radio" id="SOLANA/USDT" value="solana" name="fav_language" onChange={(e) => setName(e.target.value)}></input>
        <label for="SOLANA/USDT">SOLANA/USDT</label>
        </div>
        <hr></hr>
        <div>
        <input type="radio" id="TETHER/USDT" value="tether" name="fav_language" onChange={(e) => setName(e.target.value)}></input>
        <label for="TETHER/USDT">TETHER/USDT</label>
        </div>
        <hr></hr>
        <div>
        <input type="radio" id="VERT/USDT" value="vertcoin" name="fav_language" onChange={(e) => setName(e.target.value)}></input>
        <label for="VERT/USDT">VERT/USDT</label>
        </div>
        </fieldset>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <Button variant="dark" onClick={submite}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Collection