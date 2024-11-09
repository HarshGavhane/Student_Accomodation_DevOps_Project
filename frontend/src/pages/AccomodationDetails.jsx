import React,{useRef,useState} from 'react'
import "../styles/accomodationdetails.css";
import { Container,Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import roomData from "../assets/data/accomodations"
import calculateAvgRating from '../utils/avgRating';
import avtar from "../assets/images/avatar.jpg"
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';

const AccomodationDetails = () => {

  const  {id} = useParams()

  const reviewMsgRef = useRef('')
  const [roomRating, setRoomRating] = useState(null)

  //this is an static data later will create API for same

  const room = roomData.find(room=> room.id === id)

  //destructure properties from room obj

  const {photo, title, desc, price,address, reviews, city, roomm, maxGroupSize} = room;

  const {totalRating, avgRating} = calculateAvgRating(reviews)

  // format date

  const options = {day:'numeric', month:'long', year:'numeric'}

  // submit request to server

  const submitHandler = e=>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

    // later will call api
  }



  return (
   <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="room__content">
              <img src={photo} alt="" />

              <div className="room__info">
                <h2>{title}</h2>

                <div className='d-flex align-items-center gap-5'>
                <span className='room__rating d-flex align-items-center gap-1'>
                <i class="ri-star-s-fill" style={{color : "var(--secondary-color)"}}></i> {avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? 'Not rated' : <span>({reviews.length})</span>}
                
                </span>
             
                <span>
                <i class="ri-map-pin-user-fill"></i> {address}
                 </span>
                </div>
                <div className="room__extra-details">
                  <span> <i class="ri-map-pin-2-fill"></i> {city} </span>
                 <span> <i class="ri-money-dollar-circle-line"></i> {price}/ per person </span>
                 <span> <i class="ri-home-2-line"></i> {roomm}</span>
                 <span> <i class="ri-group-line"></i> {maxGroupSize} </span>
                </div>
                  <br /> <br />
               <h5>Description</h5>
                <p>{desc}</p>
               </div>


              {/* ============  room review section start ============== */}
              <div className="room__reviews mt-4">
                <h4>Reviews ({reviews?.length}reviews)</h4>

                <Form onSubmit={submitHandler}>
                  <div className='d-flex align-items-center gap-3 mb-4
                  rating__group'>
                    <span onClick={()=> setRoomRating(1)}>
                    1<i class="ri-star-fill"></i>
                    </span>
                    <span onClick={()=> setRoomRating(2)}>
                    2<i class="ri-star-fill"></i>
                    </span>
                    <span onClick={()=> setRoomRating(3)}>
                    3<i class="ri-star-fill"></i>
                    </span>
                    <span onClick={()=> setRoomRating(4)}>
                    4<i class="ri-star-fill"></i>
                    </span>
                    <span onClick={()=> setRoomRating(5)}>
                    5<i class="ri-star-fill"></i>
                    </span>
                  </div>

                  <div className="review__input">
                    <input type="text" ref={reviewMsgRef} placeholder='Share Your Thoughts' required />
                    <button className="btn primary__btn text-white"
                    type='submit'>submit</button>
                  </div>
                </Form>

                <ListGroup className='user__reviews'>
                  {
                    reviews?.map(review=>(
                      <div className="review__item">
                        <img src={avtar} alt="" />

                        <div className="w-100">
                          <div className='d-flex align-items-center
                          justify-content-between'>
                            <div>
                              <h5>Harry</h5>
                              <p>
                                {new Date("01-18-2023").toLocaleDateString("en-US",options)}
                              </p>
                              </div>
                              <span className='d-flex align-items-center'>
                                5<i class="ri-star-s-fill"></i>
                              </span>    
                          </div>

                          <h6>Amazing Room</h6>
                        </div>
                      </div>
                    ))
                  }
                </ListGroup>
                </div> 

              {/* ============  room review section end ============== */}
            </div>
          </Col>
            
          <Col lg='4'>
            <Booking room={room} avgRating={avgRating}/>
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>
   </>
  )
}

export default AccomodationDetails
