import { useContext, useState } from 'react';
import './search-bar.css';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Optional: add default styles
import 'react-date-range/dist/theme/default.css'; // Optional: add default theme
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

const SearchBar = () => {

    const [destination, setDestination] = useState("")

    const [openDate, setOpenDate] = useState(false)
    const [options,setOptions] = useState({
        students : 2,
        room : 1,
    });

    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [openOptions, setOpenOptions] = useState(false)


    const navigate = useNavigate()
      
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] -1,
            };
        });
    };

    const {dispatch} = useContext(SearchContext)

    const handleSearch = ()=>{
        dispatch({type:"NEW_SEARCH", payload:{destination,dates, options}})
        navigate("/accomodation", {state:{destination,dates,options}})
    }
      
  

    return (
        <div className='headerSearch'>
            <div className="headersearchItem">
                <i className="ri-hotel-bed-fill" style={{ color: 'lightgray' }}></i>
                <input 
                    type="text" 
                    placeholder='Where are you going?' 
                    className='headerSearchInput' 
                    onChange={e => setDestination(e.target.value)}
                />
            </div>

            <div className="headersearchItem">
                <i className="ri-calendar-fill" style={{ color: 'lightgray' }}></i>
                <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className='date'
                    minDate={new Date()}
                />}
            </div>

            <div className="headersearchItem">
                <i className="ri-group-fill" style={{ color: 'lightgray' }}></i>
                <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.students} students . ${options.room} room`}</span>
                {openOptions && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Students</span>
                        <div className="optionCounter">
                        <button disabled={options.students <=1} className='optionCounterButton' onClick={()=>handleOption("students","d")}>-</button>
                        <span className="optionCounterNumber">{options.students}</span>
                        <button className='optionCounterButton' onClick={()=>handleOption("students","i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                        <button disabled={options.room <=1} className='optionCounterButton' onClick={()=>handleOption("room","d")}>-</button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button className='optionCounterButton' onClick={()=>handleOption("room","i")}>+</button>
                        </div>
                    </div>
                </div>
                }
                
            </div>

            <div className="headersearchItem">
                <button className='headerBtn' onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;
