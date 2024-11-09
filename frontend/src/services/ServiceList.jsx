import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import houseImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: houseImg,
        title: "House View",
        desc: "a secure and professionally managed dwelling place for the accommodation of student(s) registered in an academic institution, with communal areas",
    },
    {
        imgUrl: guideImg,
        title: "Best Guide review",
        desc: "a secure and professionally managed dwelling place for the accommodation of student(s) registered in an academic institution, with communal areas",
    },
    {
        imgUrl: customizationImg,
        title: "Customizations",
        desc: "a secure and professionally managed dwelling place for the accommodation of student(s) registered in an academic institution, with communal areas",
    },
    
]

const ServiceList = () => {
  return (
    <>
        {
            servicesData.map((item, index) => (
                <Col lg="3" key={index}>
                    <ServiceCard item={item}/>
                </Col>
            ))
        }
    </>
  )
}

export default ServiceList
