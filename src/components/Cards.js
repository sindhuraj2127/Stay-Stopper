import React, { useEffect, useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  const [hotel,setHotel]=useState();
  const [features,setFeatures]=useState();

  useEffect(()=>{
    getHotels()
  },[])
  
  const getHotels = async () => {
    // let resp = await fetch("https://stay-spotterbackend-1srfzmu1b-anagha-bijus-projects.vercel.app/Hotel/getAllHotels");
    let resp = await fetch("https://stayspotterback.onrender.com/Hotel/getAllHotels");
    let result = await resp.json();
    setFeatures(result.slice(9,12));
    setHotel(result.slice(0,3));
  };
  return (
    <div className='cards'>
      <h1>Latest on the Hotels Listing</h1>
      <hr className='h'></hr>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {hotel?.map((hotel)=>{
              return(
                <CardItem
              src={hotel?.photos[0].filepath}
              text={hotel.name}
              label={hotel.rating}
              loc={hotel.address}
              price={hotel.price}
              id={hotel._id}
              path='/hotels/655db4e72b6b55721c4e2a85' 
              key={hotel._id} 
            />
              )
            })}
          </ul>
          <h1 className='heading2'>Experience the Magic!</h1>
          <hr className='b'></hr>
          <ul className='cards__items'>
            {features?.map((hotel)=>{
              return(
                <CardItem
              src={hotel.photos[0].filepath}
              text={hotel.name}
              label={hotel.rating}
              path='/services'
              price={hotel.price}
              id={hotel._id}
            />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;