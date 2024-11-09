import React from 'react'
import RoomCard from '../../shared/RoomCard'
import roomData from '../../assets/data/accomodations'
import { Col } from 'reactstrap'



const FeaturedRoomList = () => {
  return (
  <>
    {
        roomData?.map(room => (
            <Col lg='3' className="mb-4" key={room.id}>
                <RoomCard room={room} />
            </Col>
        ))
    }
  </>
  )
}

export default FeaturedRoomList
