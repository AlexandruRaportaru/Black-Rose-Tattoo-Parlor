import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_hand flex__center'>
        <img src={images.tattooMachine} alt='about_hand'/>
      </div>

      <div className='app__aboutus-content_about'>
        <h1 className='p__headtext'>What about us?</h1>
        <p className='p__text'>Miami's Master Tattoo Artist, Vito Genovesse founded Black Rose Tattoo Parlor in 2007. As a former professional BMX Freestyle Rider and Stuntman, he was use to long hours and thrived on the kinds of hard work needed to make Black Rose Tattoo Parlor a successful licensed business. <br></br><br></br>To do this, Vito took his passion, drive and determination, then set a vision of what he wanted for his tattoo shop. Focused on health and safety, Mark put together a team of tattoo artists with various top-notch creative and bespoke tattoo skills. <br></br><br></br>Since, Vito who is known for being quality and customer service driven, has grown Black Rose Tattoo Parlor exponentially. People love their tatts so much that the majority of Black Rose Tattoo Parlor’s business is from referrals.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
