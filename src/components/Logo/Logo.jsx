import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.css';

const Logo = () => (
    <Link to='/'>
        <div className='app__logo'>
            <div className='app__logo-letter' style={{borderRight: '2px solid #D19D25', borderBottom: '2px solid #D19D25'}}>B</div>
            <div className='app__logo-letter' style={{borderBottom: '2px solid #D19D25'}}>R</div>
            <div className='app__logo-letter' style={{borderRight: '2px solid #D19D25'}}>T</div>
            <div className='app__logo-letter'>P</div>
        </div>
    </Link>
);

export default Logo;