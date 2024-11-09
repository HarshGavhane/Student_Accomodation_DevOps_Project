import React from 'react'
import "./searchitem.css"
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero-img01.jpg'

const SearchItem = ({item} ) => {
  console.log(item.photos[0]);
  return (
    <div className='SearchItem'> 
      <img src={heroImg} alt="" className='siImg' />
      <div className="siDesc">
        <h1 className='siTitle'>{item.name}</h1>
        <span className='siDistance'>{item.distance}</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubtitle'>Studio Apartment with Air condition</span>
        <span className='siFeatures'>{item.desc}</span>
        <span className='siCancelOp'>Free cancellation</span>
        <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today!!</span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="isRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
        </div>}
        <div className="siDetailsTexts">
        <span className='siPrice'>${item.cheapestPrice}</span>
        <span className='siTaxiOps'>Include taxes and fees </span>
        <Link to={`/hotels/${item._id}`}>
        <button className='siCheckButton'>See Availability</button>
        </Link>
        
        </div>
      </div>
    </div>
  )
}

export default SearchItem
