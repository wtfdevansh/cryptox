
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDH8tAkWpGJcTeYWDaH2p4Xm46gr5DXC20",
  authDomain: "crypto-df0ae.firebaseapp.com",
  projectId: "crypto-df0ae",
  storageBucket: "crypto-df0ae.appspot.com",
  messagingSenderId: "907810746270",
  appId: "1:907810746270:web:f2f43d8a879d29bd61f08f",
  measurementId: "G-XMVSH20WVJ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};