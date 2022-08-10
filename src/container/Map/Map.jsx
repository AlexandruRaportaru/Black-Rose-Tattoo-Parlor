import React from 'react';
import { TiLocation } from 'react-icons/ti';

import './Map.css';

const Map = () => (
  <div className='app__map section__padding' style={{background: 'var(--color-black)'}}>
    <div className='app__map-content'>
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9978.05494910431!2d-80.1426791256496!3d25.77398228076393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b4f2b341dff1%3A0x264017c4aac775bb!2s630%20Collins%20Ave%2C%20Miami%20Beach%2C%20FL%2033139%2C%20USA!5e1!3m2!1sen!2sro!4v1660047350446!5m2!1sen!2sro" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div className='app__map-text'>
      <TiLocation color='var(--color-golden)' fontSize={30}/>
      <p className='p__text'>630 Collins Ave, Miami, FL 33139 USA</p>
    </div>
  </div>
);

export default Map;
