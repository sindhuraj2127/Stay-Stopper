import React, { useState } from 'react'
import './AdminAddHotel.css'
import {json, useNavigate} from "react-router-dom";
import home_icon from '../../assets/home.png'
import address_icon from '../../assets/pin.png'
import price_icon from '../../assets/money.png'
import desc_icon from '../../assets/notes.png'
import city_icon from '../../assets/buildings.png'
import rating_icon from '../../assets/review.png'
import features_icon from '../../assets/new-features.png'
import distance_icon from '../../assets/distance.png'

const AddHotel=()=>{
  const [name,setName]=useState("");
  const [type,setType]=useState("");
  const [city,setCity]=useState("");
  const [address,setaddress]=useState("");
  const [distance,setDistance]=useState("");
  const [description,setDescription]=useState("");
  const [rating,setRating]=useState("");
  const [features,setFeatures]=useState("");
  const [price,setPrice]=useState("");
  const [images,setimages]=useState("");
  const navigate=useNavigate();

  const formData=async()=>{
    const data=new FormData();
    for(let i=0;i<images.length;i++){
       data.append("images",images[i]);
    }
    data.append("name",name);
    data.append("type",type);
    data.append("city",city);
    data.append("address",address);
    data.append("decs",description);
    data.append("distance",distance);
    data.append("price",price);
    data.append('features',features)
    data.append('rating',rating)
    await fetch("https://stayspotterback.onrender.com/Hotel/upload",{
      method:"POST",
      body:data,
    })
    .then((response)=> response.json())
    .then((json) => localStorage.setItem('id',json.saveHotel._id))
     
       navigate("/add-room-ADMIN")
  }
    return(
        <div className='top-container'>
          <div className="top-header">
            <div className="heading">Hotel Details</div>
            <div className="heading-underline"></div>
          </div>
          <div className="all-inputs">
            <div className="each-input">
            <img src={home_icon} alt="" />
            <input type="text" placeholder="Name of the hotel" onChange={(e)=>setName(e.target.value)}  />
            </div>
            <div className="each-input">
            <img src={city_icon} alt="" />
            <input type="text" placeholder="City" onChange={(e)=>setCity(e.target.value)} />
            </div>
            <div className="each-input">
            <img src={city_icon} alt="" />
            <input type="text" placeholder="Type of Hotel" onChange={(e)=>setType(e.target.value)} />
            </div>
            <div className="each-input">
            <img src={address_icon} alt="" />
            <input type="text" placeholder="Address" onChange={(e)=>setaddress(e.target.value)} />
            </div>
            <div className="each-input">
            <img src={distance_icon} alt="" />
            <input type="text" placeholder="Distance" onChange={(e)=>setDistance(e.target.value)} />
            </div>
            <div className="each-input">
            <img src={desc_icon} alt="" />
            <textarea placeholder="Description" onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <div className="each-input">
            <img src={rating_icon} alt="" />
            <input type="number" placeholder="Rating" onChange={(e)=>setRating(e.target.value)} />
            </div>
            <div className="each-input">
            <img src={features_icon} alt="" />
            <input type="text" placeholder="Features" onChange={(e)=>setFeatures(e.target.value)} />
            </div>
            <div className="each-input">
            <img src={price_icon} alt="" />
            <input type="text" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} />
            </div>

            <label >Choose images-minimum 6:</label>
            <div className='input-images'>
              <div className="input-image">
              <input type="file" accept="image/png, image/jpeg" onChange={(e)=>setimages(e.target.files)} multiple/>
              </div>
            </div>
        </div>
            
            <div className="submit-container">
                <div className='upload-button' onClick={()=>formData()}>Upload</div>

            </div>
        </div>
    )
}

export default AddHotel