import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

function NavBar() {
    const [showMenu, setShowMenu ] = useState(false);

    return (
        <div className='nav'>
            <Link to="/" className='logo'>Logo</Link>
            <ul className={showMenu ? 'show-menu nav-links' : 'nav-links'}>
                <li onClick={() => setShowMenu(!showMenu)}><Link to="/" className='link active'>Home</Link></li>
                <li onClick={() => setShowMenu(!showMenu)}><Link to="/quote" className='link'>Quote</Link></li>
                <li onClick={() => setShowMenu(!showMenu)}><Link to="/aboutus" className='link'>About us</Link></li>
                <li onClick={() => setShowMenu(!showMenu)}><Link to="/contact" className='link'>Contact us</Link></li>
            </ul> 
            <div className='menu' onClick={() => setShowMenu(!showMenu)}>
                <GiHamburgerMenu color='whitesmoke' size={30}/>
            </div>
        </div>
    )
}

export default NavBar;