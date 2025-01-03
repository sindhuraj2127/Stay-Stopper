import React, { useEffect, useState } from 'react';
import './Hoteltype.css'
import { useLocation, useNavigate } from 'react-router-dom'

function Hoteltype() {
    const location = useLocation();
    const navigate=useNavigate();
    const [hoteltype,setHoteltype]=useState(location.state);
    const [hotels,setHotels]=useState();
    const [vars,setvars]=useState(true);

    useEffect(()=>{
            handleClick()
        setvars(false)
    },[])
    const handleClick=async()=>{
        // let resp = await fetch(`http://localhost:5500/Hotel/getAllhotels?type=${hoteltype}`);
        let resp = await fetch(`https://stayspotterback.onrender.com/Hotel/getAllhotels?type=${hoteltype}`);
      let result = await resp.json();
      setHotels(result)
    }
    const seeavability=(hotelid)=>{
        navigate(`/hotels/${hotelid}`)
    }

    return (
        <>
        <div>{hotels?.map(category => {
            return(
                  <div className='hotel-detail'>
                  <img src={category.photos[0].filepath} />
                  <div className='hotel-main'>
                      <div>
                          <h1 className='hotel-name'>{category.name}</h1>
                          <p>
                             Excellent
                          </p>
                          <p className='rating'>{category.rating}</p>
                      </div>
                      <div>
                          <div className='details'>
                              <p className='hotel-destination'>{category.city}||{category.distance}</p>
                              <p className='hotel-airport'>Free Airport Pickup</p>
                              <p className='hotel-description'>{category.decs}</p>
                              <p className='hotel-cancel'>Free cancellation</p>
                              <p className='hotel-note'>You can cancel later, so lock in this great price today!</p>
                          </div>
                          <div className='rate-details'>
                              <p className='rate'>Rs:{category.price}</p>
                              <p>Includes taxes and fees</p>
                              <button className='see-btn' onClick={()=>seeavability(category._id)}>See availbility</button>
                          </div>
                      </div>
                  </div>
              </div>
       ) })}
     </div>
        </>
    
    )
}

export default Hoteltype