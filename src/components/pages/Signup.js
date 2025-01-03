import React, { useState } from 'react'
import './Signup.css'
import {useNavigate} from "react-router-dom";

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const LoginSignup = () => {
    const navigate=useNavigate()

    const [action,setAction] = useState(true);
    const [logindetails,setLoginDetails]=useState({username:"",email:"",password:""});

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setLoginDetails({...logindetails,[name]:value});
    };

    const handleAdmin=()=>{
      navigate("/admin")
    }

   const  handleRegister=async()=>{
      let headers={
        method:"POST",
        body:JSON.stringify(logindetails),
        headers:{
          "content-type":"application/json"
        },
      };
      // let resp=await fetch("https://stay-spotterbackend-1srfzmu1b-anagha-bijus-projects.vercel.app/User/register",headers);
      let resp=await fetch("https://stayspotterback.onrender.com/User/register",headers);
      let result=await resp.json();
      if(result.Status === "200"){
        alert("You Register Successfully")
        setAction("Login")
      }else{
        alert(`Error:${result.Status}`)
        setAction(true);
      }    
    }

    const handleLogin=async()=>{
      setAction(false)
      let headers={
        method:"POST",
        body:JSON.stringify(logindetails),
        headers:{
          "content-type":"application/json"
        },
      };
      // let resp=await fetch("https://stay-spotterbackend-1srfzmu1b-anagha-bijus-projects.vercel.app/User/login",headers);
      let resp=await fetch("https://stayspotterback.onrender.com/User/login",headers);
      let result=await resp.json();      
      if(result.Msg === "Login Sucessfully"){
        alert(`${result.Msg}`)
        localStorage.setItem('username',result.user.username)
        navigate("/")
        localStorage.setItem("isLogin",true)
        await window.location.reload(true)
        if(result.user.isAdmin === true)
          localStorage.setItem("admin",true)
      }
      else{
        alert(result.Msg)
      }
    }
const signup=()=>{
 
  action ? handleRegister():setAction(true)
 
}
const login=()=>{
  action ? setAction(false):handleLogin()
 

}

  return (
        <div className='container-right'>
          <div className="header">
            <div className="text">{action ?"Sign Up": "Login"}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
          {action? <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" name='username' placeholder="Username" onChange={handleChange} />
            </div>:<div></div>}
         
           <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id" name='email' onChange={handleChange} />
            </div>
            <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" name='password' onChange={handleChange} />
            </div>
            </div>
            {action ?<div></div>:<div className="forgot-password">Lost Password? <span>Click here!</span></div>}
            
            <div className="submit-container">
                <div className={action ?"submit":"submit gray"} onClick={signup}>Sign Up</div>
                <div className={action ?"submit gray":"submit"} onClick={login}>Login</div>
            </div>
            <div className='Admin'>Are you an Admin? <span onClick={handleAdmin}>Log in</span></div>
        </div>
  )
}

export default LoginSignup;