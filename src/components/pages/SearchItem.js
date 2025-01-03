import React from "react";
import "./searchItem.css";
import { Link } from 'react-router-dom';
const SearchItem = ({item}) => {

  return (
   <>
      <div className="searchItem">
      <img
        src={item.photos[4].filepath}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.city}||{item.distance} from the center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        {/* <span className="siSubtitle">
        {item.decs}
        </span> */}
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>
        <div className="siDetailTexts">
        <span className="siPrice">Rs{item.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton" >See availability</button>
          </Link>
         
        </div>
      </div>
    </div>
   </>
  );
};

export default SearchItem;