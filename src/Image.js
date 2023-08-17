import React from "react";

function Image(props){
    switch(props) {
        case 0:
          return <img src="pngegg (4).png"/>
          break;
        case 1:
          return <img src="pngegg (5).png"/>
          break;
          case 2:
            return <img src="pngegg (3).png"/>
            break;
            case 3:
              return <img src="pngegg (6).png"/>
              break;
              case 4:
          return <img src="pngegg (7).png"/>
          break;
          case 5:
          return <img src="pngegg (12).png"/>
          break;
          case 6:
          return <img src="pngegg (8).png"/>
          break;
          case 7:
          return <img src="pngegg (9).png"/>
          break;
          case 8:
          return <img src="pngegg (10).png"/>
          break;
          case 9:
          return <img src="pngegg (11).png"/>
          break;
        
        default:
          // code block
      }
}

export default Image