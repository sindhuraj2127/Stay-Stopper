import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {useState} from "react";
import {
    faBed,
    faCalendarDays,
    faPerson,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import {format} from "date-fns";
import {useNavigate} from "react-router-dom";

function HeroSection() {
  const[openDate,setOpenDate]=useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [destination,setDestination]=useState("");
  const[openOptions,setOpenOptions]=useState(false)
  const[options,setOptions]=useState({
    adult:1,
    children:0,
    room:1,
  });

  const navigate=useNavigate()

  const handleOption=(name,operation)=>{
    setOptions(prev=>{return{
      ...prev,[name]:operation==="i"? options[name]+1: options[name]-1,
    }})
  }

  const handleSearch=()=>{
    navigate("/hotels",{state:{destination,date,options}})
  }

  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Come Stay with Us!</h1>
      <p>Rooms | Flats | Hotels | Villas</p>
      <div className='headerSearch'>
        <div className='headerSearchItem'>
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input 
            type="text" 
            placeholder='Location'
            className="headerSearchInput"
            onChange={(e=>setDestination(e.target.value))}
          />
          {/* <p>Which city do you prefer?</p> */}
        </div>
        <div className='headerSearchItem'>
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"dd/MM/yy")} to ${format(date[0].endDate,"dd/MM/yy")}`}</span>
          {openDate && (<DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'
            minDate={new Date()}
          /> )}
        </div>
        <div className='headerSearchItem'>
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
          {openOptions && <div className='all-options'>
            <div className='optionItems'>
               <span className='optionText'>Adult</span>
                <div className='optionCounter'>
                 <button disable={options.adult<=1} className='optionCounterButton' onClick={()=>handleOption("adult","d")}>-</button>
                 <span className='optionCounterNumber'>{options.adult}</span>
                 <button className='optionCounterButton' onClick={()=>handleOption("adult","i")}>+</button>
               </div>
            </div>
            <div className='optionItems'>
               <span className='optionText'>Children</span>
                <div className='optionCounter'>
                 <button disable={options.children<0} className='optionCounterButton' onClick={()=>handleOption("children","d")}>-</button>
                 <span className='optionCounterNumber'>{options.children}</span>
                 <button className='optionCounterButton' onClick={()=>handleOption("children","i")}>+</button>
               </div>
            </div>
            <div className='optionItems'>
               <span className='optionText'>Room</span>
                <div className='optionCounter'>
                 <button disable={options.room<=1}className='optionCounterButton' onClick={()=>handleOption("room","d")}>-</button>
                 <span className='optionCounterNumber'>{options.room}</span>
                 <button className='optionCounterButton' onClick={()=>handleOption("room","i")}>+</button>
               </div>
            </div>
          </div>}
        </div>
        <div className='headerSearchItem'>
          <button className='headerBtn' onClick={handleSearch}>Search</button>
        </div>
         
      </div>
    </div>
  );
}

export default HeroSection;