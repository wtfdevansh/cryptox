const Tvsymbol = (props) =>{
    switch(props) {
        case "bitcoin":
          return "BINANCE:BTCUSDT"
          break;
        case "ethereum":
          return "BINANCE:ETHUSDT"
          break;
          case "dogecoin":
            return "BINANCE:DOGEUSDT"
            break;
            case "litecoin":
              return "BINANCE:LTCUSDT"
              break;
              case "peercoin":
          return "BITTREX:PPCUSD" 
          break;
          case "monero":
          return "KRAKEN:XMRUSDT"
          break;
          case "namecoin":
          return "COINEX:NMCUSDT" 
          break;
          case "solana":
          return "COINBASE:SOLUSDT"
          break;
          case "tether":
          return "BITSTAMP:USDTUSD"
          break;
          case "vertcoin":
          return "COINEX:VTCUSDT"
          break;
        
        default:
          // code block
      }
    }
export default Tvsymbol