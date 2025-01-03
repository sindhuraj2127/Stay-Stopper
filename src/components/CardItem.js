import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CardItem.css';

function CardItem(props) {
  const navigate=useNavigate();
  const handleclick=(props)=>{
    navigate(`/hotels/${props}`)
  }
  return (
    <>
      <li className='cards__item' onClick={()=>handleclick(props.id)}>
        <Link className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            {/* <hr className='myline'></hr> */}
            <h5 className='cards__item__loc'>{props.loc}</h5>
            <hr className='myline'></hr>
            <h5 className='cards__item__price'> Stating From Rs: {props.price}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;