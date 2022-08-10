import React from 'react';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div>
    <h1 className='app_header-title flex__center'>Black Rose Tattoo Parlor</h1>
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <h1 className='p__headtext'>Where fine art meets flesh</h1>
        <p className='p__text' style={{margin: '30px 0'}}>At Black Rose Tattoo Parlor we pride ourselves on quality tattoos in a clean sterile environment. Based in Miami, USA, our tattoo artists will work with you to create the best tattoo you want. From custom design’s, traditional, black & grey, portraits and everything in between our tattooists wealth of knowledge and experience will ensure you get the best tattoo you will be proud to wear for life.</p>
        <button type='button' className='custom__button'>Book an appointment</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.hand} alt='header img' />
      </div>
    </div>
  </div>
  
);

export default Header;
