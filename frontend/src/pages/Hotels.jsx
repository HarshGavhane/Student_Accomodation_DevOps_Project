import React, { useContext, useState } from 'react';
import "../styles/hotel.css";
import useFetch from '../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import { AuthContext } from '../context/AuthContext';
import Reserve from '../components/reserve/Reserve';

const Hotels = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const { data, loading, error } = useFetch(`/hotels/find/${id}`);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const {dates, options} = useContext(SearchContext);

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }

    const days = dayDifference(dates[0].endDate, dates[0].startDate);

    const photos = data?.photos || [
        "path/to/fallback-image1.jpg", 
        "path/to/fallback-image2.jpg"
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleClick = () => {
        if(user){
            setOpenModal(true);
        }else{
            navigate("/login");
        }
    };

    return (
        loading ? (
            "Loading..."
        ) : error ? (
            <div>Error: {error.message}</div>
        ) : (
            <div className="hotelContainer">
                {open && (
                    <div className="slider">
                        <i className="ri-close-circle-fill" onClick={() => setOpen(false)}></i>
                        <i className="ri-arrow-left-circle-fill" onClick={() => setSlideNumber(slideNumber > 0 ? slideNumber - 1 : photos.length - 1)}></i>
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber]} alt="Slide" className="sliderImg" />
                        </div>
                        <i className="ri-arrow-right-circle-fill" onClick={() => setSlideNumber(slideNumber < photos.length - 1 ? slideNumber + 1 : 0)}></i>
                    </div>
                )}
                <div className="hotelWrapper">
                    <h1 className="hotelTitle">{data.name}</h1>
                    <button className='bookNow' onClick={handleClick}>Reserve or Book Now!!</button>
                    <div className="hotelAddress">
                        <i className="ri-map-pin-2-fill"></i>
                        <span>{data.address}</span>
                    </div>
                    <span className="hotelDistance">{data.distance}</span>
                    <span className="hotelPriceHighlight">
                        Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img onClick={() => handleOpen(i)} src={photo} alt="Hotel" className='hotelImg' />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">{data.title}</h1>
                            <p className="hotelDesc">{data.desc}</p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for {days}-night stay!!</h1>
                            <span>
                                Whether you're here for a romantic getaway, a family vacation, or a business trip, 
                                The Grand Oasis is your perfect home away from home.
                            </span>
                            <h2>
                                <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
                            </h2>
                            <button onClick={handleClick}>Reserve or Book Now!!</button>
                        </div>
                    </div>
                </div>
                {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
            </div>
        )
    );
};


export default Hotels;
