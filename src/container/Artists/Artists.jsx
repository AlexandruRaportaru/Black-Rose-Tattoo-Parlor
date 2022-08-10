import React, { useState, useEffect } from 'react';
import { data } from '../../constants';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { MdClose } from 'react-icons/md';

import './Artists.css';
import "swiper/css";
import "swiper/css/navigation";

const ArtistCard = ({artist: {imgArtist, galleryArtist, nameArtist, descriptionArtist}}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen && (document.body.style.overflow = 'hidden');
    !isOpen && (document.body.style.overflow = 'unset');
  }, [isOpen]);
  

  return (
    <>
      <div className='app__artists-cards_individual'>
        <div className='app__artists-cards_individualImage'>
          <img src={imgArtist} alt={nameArtist} />
        </div>
        <div className='app__artists-cards_individualButton'>
          <button className='custom__button' onClick={() => setIsOpen(true)}>View gallery</button>
        </div>
        <h2 className='app__artists-cards_individualArtist'>{nameArtist}</h2>
        <p className='p__text'>{descriptionArtist}</p>
      </div>

      {isOpen && (<div className='modal'>
        <div className='background__modal'></div>
        
        <MdClose className='close__modal' color='var(--color-golden)' fontSize={40} cursor='pointer' onClick={() => setIsOpen(false)}/>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          { Object.values(galleryArtist).map((image, index)=> (
            <SwiperSlide>
              <div className='slider__image'>
                <img src={image} alt='index'></img>
              </div>
            </SwiperSlide>
          )) }
        </Swiper>
      </div>)}
    </>
  )
}

const Artists = () => (
  <div className='app__artists' style={{background: 'var(--color-black)'}} id='artists'>
    <h1 className='app__artists-title p__headtext'>Artists</h1>
    <div className='app__artists-cards'>
      {data.artists.map(artist => <ArtistCard artist={artist} key={artist.nameArtist}/>)}
    </div>
  </div>
);

export default Artists;
