import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";
import calculateAvgRating from '../utils/avgRating';
import useFetch from '../hooks/useFetch';
import "./room-card.css";

const RoomCard = ({ room }) => {
  // Fetch data for city counts
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Dublin,Berlin,London,Madrid");

  const { id, title, city, photo, price, featured, reviews } = room;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Mapping of cities to data indices
  const cityIndexMap = {
    Dublin: 0,
    Berlin: 1,
    London: 2,
    Madrid: 3
  };

  // Get the room count for the current room's city
  const cityCount = data ? data[cityIndexMap[city]] : null;

  return (
    <div className='room__card'> 
      <Card>
        <div className="room__img">
            <img src={photo} alt={`Room in ${city}`} />
            {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className='room__location d-flex align-items-center gap-1'>
                <i className="ri-map-pin-line"></i> {city} 
                {loading ? (
                  <span>Loading...</span>
                ) : error ? (
                  <span>Error</span>
                ) : (
                  <span>({cityCount || 0} rooms available)</span>
                )}
            </span>

            <span className='room__rating d-flex align-items-center gap-1'>
               <i className="ri-star-s-fill"></i> {avgRating === 0 ? null : avgRating}
               {totalRating === 0 ? 'Not rated' : <span>({reviews.length})</span>}
            </span>
          </div>

          <h5 className="room__title">
            <Link to={`/accomodations/${id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
             <h5>
                ${price} <span> /per room</span>
             </h5>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default RoomCard;
