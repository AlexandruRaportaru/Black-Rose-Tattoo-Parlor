import React from 'react';
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { TiMail, TiPhone } from 'react-icons/ti';
import { Logo } from '../../components';

import './Footer.css';

const Footer = () => (
  <div className='app__footer app__bg section__padding'>
    <div className='app__footer-contact'>
      <div className='app__footer-contact_infos' style={{margin: '20px 0'}}>
        <h6 className='p__text' style={{color: 'var(--color-golden)'}}>Contact Us</h6>
        <div className='app__footer-contact_infosPhone'>
          <TiPhone color='var(--color-golden)' fontSize={25}/>
          <a href="tel:219-519-4489" className='p__text'>219 519 4489</a>
        </div>
        <div className='app__footer-contact_infosMail'>
          <TiMail color='var(--color-golden)' fontSize={25}/>
          <a href="mailto:info@brtp.com" className='p__text'>info@brtp.com</a>
        </div>
      </div>

      <div className='app__footer-contact_follow' style={{margin: '20px 0'}}>
        <h6 className='p__text' style={{color: 'var(--color-golden)'}}>Follow Us</h6>
        <div className='app__footer-contact_followMedia'>
          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
            <FaTwitter />
          </a>
          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
            <FaInstagram />
          </a>
          <a href='https://www.youtube.com/' target='_blank' rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>

    <div className='app__footer-center'>
      <Logo />
      <p className='p__text'>“My body is my journal and my tattoos are my story.” <span className='p__headtext'>– Johnny Depp</span></p>
    </div>

    <div className='app__footer-hours'>
      <h6 className='p__text' style={{color: 'var(--color-golden)'}}>Working Hours</h6>
      <p className='p__text'>Tuesday - Sunday<br/>09:00am - 09:00pm<br/><br/>Closed Mondays</p>
    </div>
  </div>
);

export default Footer;
