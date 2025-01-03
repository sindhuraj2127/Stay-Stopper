import React, { useEffect } from 'react';
import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "./SearchItem"; 

const List = () => {
  const location = useLocation();
  const [loading,setLoading]=useState(true);
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(99999);
  const [hotels,setHotels]=useState();
  useEffect(()=>{
    getHotels()
  },[])

  const getHotels = async () => {
    const city=destination;
    // let resp = await fetch(`https://stay-spotterbackend-1srfzmu1b-anagha-bijus-projects.vercel.app/getHotels?city=${city}&min=${min}&max=${max}`);
    let resp = await fetch(`https://stayspotterback.onrender.com/Hotel/getHotels?city=${city}&min=${min}&max=${max}`);
    let result = await resp.json();
    setHotels(result); 
    handlequerys()
   setLoading(false);
  };
  const handlequerys=()=>{
    localStorage.setItem("destination",destination)
    localStorage.setItem("endDate",dates[0].endDate)
    localStorage.setItem("startDate",dates[0].startDate)
   const date1 = new Date(localStorage.getItem("startDate").split(" ",[4]).slice(1,4).join("-"));
   const date2 = new Date(localStorage.getItem("endDate").split(" ",[4]).slice(1,4).join("-"));
  const timediff=date2 - date1;
   const daydiff=Math.ceil(timediff/(1000 * 60 * 60 * 24))
   localStorage.setItem("datediff",daydiff)
   }
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Header type="list" /> */}
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">SEARCH</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} onChange={e=>setDestination(e.target.value)} type="text"  />
            </div>
            <div className="lsItem">
            <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={()=>getHotels()}>Search</button>
          </div>
          <div className="listResult">
            {loading ? "Loading":<>{hotels?.map((item)=>{
              return(
                <SearchItem item={item} key={item?._id}/>
              )
            })}</>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;