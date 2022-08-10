import React from 'react';
import { tattoo } from '../../constants';

import './Intro.css';

const Intro = () => {

  return (
    <div className='app__video'>
      <video src={tattoo} type='video/mp4' loop controls={false} muted autoPlay/>
      <div className='app__video-overlay flex__center'>
        <p className='app__video-overlay_text flex__center'>“Show me a man with a tattoo and I'll show you a man with an interesting past.” — Jack London</p>
      </div>
    </div>
  )
};

export default Intro;
