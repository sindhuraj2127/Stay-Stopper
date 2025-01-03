import React, { useState } from 'react'
import './Success.css'
import {useNavigate} from "react-router-dom";

const Successful=()=>{
    const navigate=useNavigate()
    const RedirecttoHome=()=>{
      navigate("/",{})
    }
    return(
        <div className='successmessage'>
            <div className='successful'>The payment was successful!</div>
            <div className='booking-details-success'>Booking details have been sent to your registered email address!</div>
            <div className="home-redirect-button">
                <div className='home-button' onClick={RedirecttoHome}>Go Back to HomePage</div>
            </div>
        </div>
    )
}

export default Successful