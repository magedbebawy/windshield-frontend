import React from 'react';
import Header from '../../components/header/Header';
import './About.css';

function About() {
    return (
        <div>
            <Header title='About us' page='about' height='50vh' />
            <div className='about'>
                <p>
                Our windshield replacement business is dedicated to providing top-quality services to our customers. We understand the importance of having a clear and functional windshield for your safety while driving, and we make it our mission to ensure that your windshield is replaced to the highest standards.
                </p>
                <p>
                Our team of skilled technicians is trained to replace windshields on a wide range of vehicles, including cars, trucks, SUVs, and more. We use only the highest quality materials and state-of-the-art tools to ensure that your new windshield fits perfectly and is installed securely.
                </p>
                <p>
                At our windshield replacement business, we know that your time is valuable, which is why we offer fast and efficient service to get you back on the road as quickly as possible. We also offer flexible scheduling options to accommodate your busy schedule.
                </p>
                <p>
                In addition to our windshield replacement services, we also offer windshield repair for minor chips and cracks. This can save you time and money by preventing the need for a full replacement.
                </p>
                <p>
                We pride ourselves on providing excellent customer service, and we are committed to making sure that every customer leaves our business satisfied with our work. Our prices are competitive, and we offer a lifetime warranty on all of our windshield replacements for added peace of mind.
                </p>
                <p>
                If you need a windshield replacement or repair, don't hesitate to contact our business today. We are here to help you stay safe on the road and get back to your daily routine as quickly as possible.
                </p>
            </div>
        </div>
    )
}

export default About;