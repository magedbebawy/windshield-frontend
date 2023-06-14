import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({page, title, height}) {
    return (
        <header style={{height: height}}>
            <div className='header-content'>
                <h2>{title}</h2>
                <div className='line'></div>
                <h1>{page === 'home' ? 'Your trusted windshield repair&replacement experts' : ''}</h1>
                {
                    page !== 'quote' ? <Link to='/quote' className='ctn'>Get your best quote</Link> : ''
                }
            </div>
        </header>
    )
}

export default Header;