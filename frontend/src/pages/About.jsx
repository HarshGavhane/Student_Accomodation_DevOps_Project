import React from 'react';
import '../styles/AboutSection.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h2 className="about-title">About Us</h2>
                <p className="about-description">
                    Welcome to our platform! We are dedicated to providing the best
                    accommodation options tailored to your needs. Our mission is to
                    ensure you find the perfect place to stay, whether you're traveling
                    for business or leisure. With a curated selection of properties,
                    exceptional service, and a commitment to quality, we strive to make
                    your experience memorable.
                </p>
                <p className="about-description">
                    Our team is passionate about hospitality and committed to making your
                    stay as comfortable as possible. Join us in exploring the best
                    accommodations available and make your journey unforgettable.
                </p>
                <button className="about-button">Learn More</button>
            </div>
        </div>
    );
};

export default About;
