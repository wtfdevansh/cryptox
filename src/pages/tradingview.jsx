// TradingViewWidget.jsx

import React, { useEffect,useState, useRef } from 'react';
import Tvsymbol from '../Tv';
import data from '../walletdata';

let tvScriptLoadingPromise;

export default function TradingViewWidget(props) {
  const onLoadScriptRef = useRef();
 
  const symbol = useState("");
  

  // const setter ={
  //   return ({BINANCE:BTCUSDT})
   
  // }

  
 

  useEffect(
    () => {
     const symbol = Tvsymbol(props.Name);
     
      onLoadScriptRef.current = createWidget;
     

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_cc525') && 'TradingView' in window) {
          new window.TradingView.widget({
            width: 800,
            height: 700,
            symbol: symbol,
            interval: "5",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "in",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_cc525"
          });
        }
      }
    },
    [symbol]
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_cc525' />
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a>
      </div>
    </div>
  );
}
