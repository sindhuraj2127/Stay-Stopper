import React, { useState } from 'react'
import './AdminLogin.css'
import {useNavigate} from "react-router-dom";

import user_icon from '../../assets/person.png'
import password_icon from '../../assets/password.png'

const LoginSignup = () => {
    const navigate=useNavigate();
    const [logindetails,setLoginDetails]=useState({email:"",password:""});

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setLoginDetails({...logindetails,[name]:value});
      console.log(logindetails)
    };

   const  handleRegister=async()=>{
      let headers={
        method:"POST",
        body:JSON.stringify(logindetails),
        headers:{
          "content-type":"application/json"
        },
      };
      let resp=await fetch("https://stayspotterback.onrender.com/User/admin",headers);
      let result=await resp.json();
      console.log(result);
      if(result.status === "200")  {
        alert(result.message)
        navigate("/admin-options")
        console.log(result)
        localStorage.setItem("isLogin",true)
        localStorage.setItem("admin",true)
        localStorage.setItem('username',result.user.username)
        await window.location.reload(true)
      }
      else if(result.status ==="202"){
        alert(result.message)
      } 
      else{
        alert(result.message)
      }
    }
  return (
        <div className='container-right'>
          <div className="header">
            <div className="text">Admin Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Email Id" name='email' onChange={handleChange}/>
            </div>
         
            <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" name='password' onChange={handleChange} />
            </div>
            </div>
            {/* {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click here!</span></div>} */}
            
            <div className="submit-container">
                {/* <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div> */}
                <div className='login-button' onClick={handleRegister}>Login</div>
            </div>
            {/* <div className='Admin'>Are you an Admin? <span onClick={handleAdmin}>Log in</span></div> */}
        </div>
  )
}

export default LoginSignup