import React from 'react';
import { images, data } from '../../constants';

import './Reviews.css';

const ReviewCard = ({review: { imgCeleb, nameCeleb, commentCeleb }}) => (
  <div className='app__reviews-card'>
    <img src={imgCeleb} alt='review'/>
    <div className='app__reviews-card_content'>
      <p className='p__text' style={{color: '#D19D25'}}>{nameCeleb}</p>
      <p className='p__text' style={{color: '#AAAAAA'}}>{commentCeleb}</p>
    </div>
  </div>
);

const LogosImages = ({logo}) => (
  <div className='app__press-logos_section'>
    <img src={logo} alt='logo'/>
  </div>
)

const Reviews = () => (
  <div className='app__bg section__padding' id='reviews'>
    <div className='app__laurels'>
      <h1 className='p__headtext'>Our Laurels</h1>
      <div className='app__wrapper-reviews'>
        <div className='app__wrapper-info'>
          <div className='app__reviews'>
            {data.reviews.map((review) => <ReviewCard review={review} key={review.nameCeleb}/>)}
          </div>
        </div>

        <div className='app__awards_img'>
          <img src={images.ty} alt='thank you'/>
        </div>
      </div>
    </div>

    <div className='app__press'>
      <h1 className='p__headtext'>Press</h1>
      <p className='p__text'>Vito Genovesse has left his mark on Rihanna, Justin Bieber, and Miley Cyrus. The 29-year-old is the most famous tattoo artist in the world, or, better yet, tattoo artist to the most famous in the world. 
        <span style={{color: '#D19D25'}}> -Vogue</span>
      </p>
      <div className='app__press-logos'>
        {data.logos.map((logo, index) => <LogosImages logo={logo} key={index}/>)}
      </div>
      
    </div>
  </div>
);

export default Reviews;
