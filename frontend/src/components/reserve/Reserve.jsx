import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {

  const [selectedRooms, setSelectedRooms] = useState([]); // Corrected variable name to camelCase
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext); // Destructure the dates from context

  const getDatesInRnage = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let list = [];
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };

 const alldates = getDatesInRnage(dates[0].startDate, dates[0].endDate); // Pass startDate and endDate from dates

 const isAvailable = (roomNumber) =>{
    const isFound = roomNumber.unavailableDates.some(date=>
      alldates.includes(new Date(date).getTime())
    )
    return !isFound
 }

  // Handle checkbox selection
  const handleSelect = (e) => {
    const roomId = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedRooms((prev) => [...prev, roomId]);
    } else {
      setSelectedRooms((prev) => prev.filter((id) => id !== roomId));
    }
  };

  const navigate = useNavigate()

  const handleClick = async () => {
    try{
      await Promise.all(selectedRooms.map(roomId=>{
        const res = axios.put(`/rooms/availability/${roomId}`, {dates:alldates})
        return res.data
      }))
      setOpen(false)
      navigate("/")
    }catch(err){
    }
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <i className="ri-close-circle-fill" onClick={() => setOpen(false)}></i>
        <span>Select your Rooms:</span>
        
        {error && <div>Error loading rooms: {error.message}</div>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          data && data.map((item) => (
            <div className="rItem" key={item._id}>
              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMax">Max people : <b>{item.maxPeople}</b></div>
                <div className="rPrice">{item.price}</div>
              </div>
              <div className="roomSelection">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="room" key={roomNumber._id}>
                    <label>{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelect}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
        <button onClick={handleClick} className="rButton">Reserve Now!!!</button>
      </div>
    </div>
  );
};

export default Reserve;
