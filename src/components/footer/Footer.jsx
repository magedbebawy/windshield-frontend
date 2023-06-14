import React from 'react';
import './Footer.css';
import { AiFillFacebook, AiFillInstagram, AiFillGoogleCircle } from 'react-icons/ai'

function Footer() {
    return (
        <div className='footer'>
            <p> &copy;2023 - My Website</p>
            <div className='social'>
                <AiFillFacebook size={25}/>
                <AiFillInstagram size={25}/>
                <AiFillGoogleCircle size={25}/>
            </div>
        </div>
    )
}

export default Footer;