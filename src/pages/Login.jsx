import React ,{useState} from "react";
import Home from "./Home";
import {Routes, Route, useNavigate} from 'react-router-dom'
import App from "../App";

function Login(props){
    const[email,setEmail] =  useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/login', {
            method: "post",
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(result.status === 200){
          props.sendEmail(email)
         
          navigate('/home')

        }else{
          alert("invalid credentials")
        }

       
     
        
       
    
    }

 return(
    <section className="background-radial-gradient overflow-hidden">

      
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
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
                <h3 className="welcome">Welcome Back</h3>
                  <form>
           
                    <div className="form-outline mb-4 tauhatja">
                      <input type="email" id="form3Example3" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                      <label className="form-label" for="form3Example3">Enter your Email address</label>
                    </div>
      
                   
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                      <label className="form-label" for="form3Example4">Enter your Password</label>
                    </div>

            
      
                               
                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleOnSubmit}>
                      Login
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Routes>
        
          <Route path="/home" element={<Home  />} />
         
        </Routes>
      </section>
 )
}

export default Login;