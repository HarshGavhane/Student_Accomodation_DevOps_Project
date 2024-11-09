import React, { useState, useEffect } from 'react';
import "../styles/list.css"
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import SearchItem from '../components/searchItem/SearchItem';
import Newsletter from "./../shared/Newsletter";
import CommonSection from '../shared/ComonSection';
import useFetch from "../hooks/useFetch";

const ListAcc = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination || 'Location');
  const [dates, setDates] = useState(
    location.state?.date || [{ startDate: new Date(), endDate: new Date(), key: 'selection' }]
  );
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || { students: 1, room: 1 });
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  useEffect(() => {
    if (location.state?.dates) {
      setDates(location.state.dates);
    }
  }, [location.state?.dates]);

  const handleDateChange = (ranges) => {
    setDates([ranges.selection]);
    setOpenDate(false);
  };

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();  // Trigger refetch with updated parameters
  };

  return (
    <>
      <CommonSection title={"All Accommodations"} />
      <div>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Location</label>
                <input
                  type="text"
                  value={destination}  // Bind input value to destination state
                  onChange={(e) => setDestination(e.target.value)}  // Update destination on input change
                />
              </div>
              <div className="lsItem">
                <label>Check-in Date</label>
                <span onClick={() => setOpenDate(!openDate)}>
                  {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    onChange={item => handleDateChange(item)}
                    ranges={dates}
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="lsItem1">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Min price <small>per night</small></span>
                    <input type="number" onChange={e => setMin(e.target.value)} className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Max price <small>per night</small></span>
                    <input type="number" onChange={e => setMax(e.target.value)} className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Students</span>
                    <input type="number" min={1} className="lsOptionInput" value={options.students} onChange={e => setOptions(prev => ({ ...prev, students: e.target.value }))} />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input type="number" min={1} className="lsOptionInput" value={options.room}  onChange={e => setOptions(prev => ({ ...prev, room: e.target.value }))} />
                  </div>
                  <button className='lsbtn' onClick={handleClick}>Search</button>
                </div>
              </div>
            </div>
            <div className="listResult">
              {loading ? "loading" : (
                data.length > 0 ? (
                  data.map(item => (
                    <SearchItem item={item} key={item._id} />
                  ))
                ) : (
                  <p>No accommodations found for the specified criteria.</p>
                )
              )}
              <h2 className="resultTitle">Available Accommodations</h2>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default ListAcc;
