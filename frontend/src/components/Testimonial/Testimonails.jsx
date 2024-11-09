import React from 'react'
import slider from 'react-slick'
import Slider from 'react-slick/lib/slider'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import { slidesOnLeft, swipeEnd } from 'react-slick/lib/utils/innerSliderUtils'

const Testimonails = () => {

    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
            breakpoint:992,
            settings: {
                slidesToShow: 2,
                slidesToScroll:1,
                infinite:true,
                dots:true,
            },
        } ,
        {
            breakpoint: 576,
            settings: {
                slidesToShow:1,
                slidesToScroll: 1,
            },
        },
    
    ]
    }

  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>Amazing prices, amazing rooms, amazing facilities
        Social spaces, small gym, laundromat, study/meeting room
         only downside is that the building is a bit far from the 
         Luas but there are a lot of close bus stations.</p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'> Raj Dhamdhere</h6>
                <p>Student</p>
            </div>
         </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Lovely daytime staff, very helpful and keep you up to date 
            and involved with everything going on in the accommodation.
            Overall enjoying my experience and loving it here</p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'> sanjana Gavhane</h6>
                <p>Student</p>
            </div>
         </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>I have stayed here for 4 months and 
            I have really enjoyed my stay. 
            All residents are lovely, the facilities 
            are very modern and properly equipped With bins</p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'> yash bhidkar</h6>
                <p>Student</p>
            </div>
         </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Amazing prices, amazing rooms, amazing facilities
        Social spaces, small gym, laundromat, study/meeting room
         only downside is that the building is a bit far from the 
         Luas but there are a lot of close bus stations.</p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'> Raj Dhamdhere</h6>
                <p>Student</p>
            </div>
         </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Lovely daytime staff, very helpful and keep you up to date 
            and involved with everything going on in the accommodation.
            Overall enjoying my experience and loving it here</p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'> sanjana Gavhane</h6>
                <p>Student</p>
            </div>
         </div>
    </div>
  </Slider>
}

export default Testimonails
