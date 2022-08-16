import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { images } from '../../constants';
import { Logo } from '../../components';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <Logo />

      <ul className='app__navbar-links'>
        <li className='p__text'><a href='#home'>Home</a></li>
        <li className='p__text'><a href='#about'>About us</a></li>
        <li className='p__text'><a href='#artists'>Artists</a></li>
        <li className='p__text'><a href='#reviews'>Reviews</a></li>
      </ul>

      <div className='app__navbar-reserve'>
        <Link to='/appointment' className='p__text'>Book an appointment</Link>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='var(--color-golden)' fontSize={30} cursor='pointer' onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide__bottom'>
            <img src={images.machine} alt='machine' className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__text'><a href='#home' onClick={() => setToggleMenu(false)}>Home</a></li>
              <li className='p__text'><a href='#about' onClick={() => setToggleMenu(false)}>About us</a></li>
              <li className='p__text'><a href='#artists' onClick={() => setToggleMenu(false)}>Artists</a></li>
              <li className='p__text'><a href='#reviews' onClick={() => setToggleMenu(false)}>Reviews</a></li>
            </ul>
            <div className='break-line'></div>
            <Link to='/appointment' className='smallscreen_reserve p__text'><a href='reserve'>Book an appointment</a></Link>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
