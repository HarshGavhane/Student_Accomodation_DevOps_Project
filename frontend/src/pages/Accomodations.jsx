import React, {useState, useEffect } from 'react'
import CommonSection from '../shared/ComonSection';
import "../styles/accomodation.css";

import roomData from "../assets/data/accomodations"
import RoomCard from "./../shared/RoomCard"
import SearchBar from "./../shared/SearchBar"
import  Newsletter from "./../shared/Newsletter"
import { Container , Row, Col} from 'reactstrap';



const Accomodations = () => {

    const [pageCount, setPageCount] = useState(0)
    const [page,setpage] = useState(0)

    useEffect(()=>{


      const pages = Math.ceil(5/ 4) //Later we will use backend data count
      setPageCount(pages)



    },[page])



  return (
    <>
    <CommonSection title={"All Accomodations"}/>
    <section>
      <Container>
        <Row>
          <SearchBar />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          {
            roomData?.map(room=> (
            <Col lg='3' key={room.id}>
              {" "}
              <RoomCard room={room}/>
            </Col>))
          }

          <Col lg='12'>
          <div className="pagination d-flex align-items-center
          justify-content-center mt-4 gap-3">
            {[...Array(pageCount).keys()].map(number => (
              <span key={number} onClick={() => setpage(number)}
              className={page === number ? "active__page" : ""}
              >
                {number + 1}
              </span>
            ))}
            </div>
            </Col>
        </Row>
      </Container>
    </section>
    <Newsletter />
    </>
  )
}

export default Accomodations
