import React from 'react'
import './newsletter.css'

import { Container,Row, Col } from 'reactstrap'
import maleStudents from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful Accomodation informations</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter Your email' />
                        <button className='btn newsletter__btn'>Subscribe</button>
                    </div>

                    <p>This is an amazing place, located very close to
                         the city center. Moving to Dublin from my home
                          country, coming to this accommodation has been 
                          one of the best</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleStudents} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter
