import React, { useEffect, useState } from 'react'
import './AdminRoomAdd.css'
import { useLocation, useNavigate } from "react-router-dom";
import title_icon from '../../assets/bed.png'
import people_icon from '../../assets/people.png'
import room_no_icon from '../../assets/room-key.png'
import description_icon from '../../assets/product-description.png'

const AddRoom = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [maxpeople, setMaxPeople] = useState('');
    const [hotelId, setHotelId] = useState('');
    useEffect(()=>{
        setHotelId(localStorage.getItem('id'))
    })
    const upload = async () => {
        const rooms = roomNumber.split(",")
        var arr = [];
        for (var i = 0; i < rooms.length; i++) {
            arr.push({ number: rooms[i] });
        }

        let headers = {
            method: "POST",
            body: JSON.stringify(
                {
                    title: title,
                    maxPeople: maxpeople,
                    decs: description,
                    roomNumber: arr
                }
            ),
            headers: {
                "content-type": "application/json"
            },
        };
        let resp = await fetch(`https://stayspotterback.onrender.com/rooms/addRoom/${hotelId}`, headers);
        let result = await resp.json();
        console.log(result)
        if(result.status==="sucess"){
            alert("add Room sucesfully")
            
        }
    }
    const navigater=()=>{
        navigate("/admin-options")
    }
    return (
        <div className='room-container'>
            <div className="room-header">
                <div className="room-heading">Add Room Details</div>
                <div className="room-heading-underline"></div>
            </div>
            <div className="room-all-inputs">
                <div className="room-each-input">
                    <img src={title_icon} alt="" />
                    <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="room-each-input">
                    <img src={room_no_icon} alt="" />
                    <input type="text" placeholder="Room number" onChange={(e) => setRoomNumber(e.target.value)} />
                </div>

                <div className="room-each-input">
                    <img src={people_icon} alt="" />
                    <input type="text" placeholder="Maximum guests" onChange={(e) => setMaxPeople(e.target.value)} />
                </div>
                <div className="room-each-input">
                    <img src={description_icon} alt="" />
                    <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                </div>
            </div>

            <div className="room-submit-container">
                <div className='save-button' onClick={()=>upload()}>Save</div>
                <button onClick={()=>navigater()} className='next-btn'>Finish</button>
            </div>
        </div>
    )
}

export default AddRoom