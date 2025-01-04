import React, { useState } from "react";
import Login from "./Login";
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from "./Home";
import axios from 'axios'
import { GiMetalGolemHead } from "react-icons/gi";


function Register(props){
const[invitationCode,setInvitation] = useState("");
const[firstname,setFirst] = useState("");
const[lastname,setLast] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [funds, setFunds] = useState(0);
const navigate = useNavigate();
const [result,setresult] = useState("")

const navigatologin = () => {

  navigate('/login');
};


const handleOnSubmit = async (e) => {
   e.preventDefault();
    if(invitationCode === "abc@123"){

      try{

      const response = axios.post('https://cryptox-backend.vercel.app/register', {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        funds: funds
      }, {mode: 'no-cors'});

      if (response.status === 201) {
        // Handle successful registration (e.g., redirect to login)
        console.log('User registered successfully!'); 
        // Redirect or navigate to another page
    } else {
        alert(response.data.message); 
    }
    }
    catch (error) {
      console.error(error);
      alert('An error occurred during registration');
     }
     
    }else{
    alert("invalid invitation code");
    }
}


 return(
    <section className="background-radial-gradient overflow-hidden balls">

      
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5 ">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: "10"}}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
                Guru <br />
                <span style= {{color: "hsl(218, 81%, 75%)"}} >Work</span>
              </h1>
            
            </div>
      
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
      
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" value={firstname} onChange={(e) => setFirst(e.target.value)}/>
                          <label className="form-label" for="form3Example1">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" value={lastname} onChange={(e) => setLast(e.target.value)} />
                          <label className="form-label" for="form3Example2">Last name</label>
                        </div>
                      </div>
                    </div>
      
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                      <label className="form-label" for="form3Example3">Email address</label>
                    </div>
      
                   
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                      <label className="form-label" for="form3Example4">Password</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" value={invitationCode} onChange={(e) => setInvitation(e.target.value)} />
                      <label className="form-label" for="form3Example4">Please enter invitation code</label>
                    </div>
      
                   
                  
      
                   
                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleOnSubmit}>
                      Register
                    </button>
                    
                    <div>
                        Existing Account?
                    <button type="submit" className="login" onClick={navigatologin}>
                      Login Now
                    </button>
                    </div>
            
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
         
        </Routes>
      </section>
      
 )
}

export default Register;
