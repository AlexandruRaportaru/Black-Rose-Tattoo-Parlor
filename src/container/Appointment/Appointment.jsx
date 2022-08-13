import React from 'react';
import { Logo } from '../../components';
import { images, data } from '../../constants';
import { FaUpload } from 'react-icons/fa';

import './Appointment.css';

const Appointment = () => {

  return (
  <div className='book__wrapper'>
    <div className='book__wrapper-logo'><Logo /></div>
    <div className='book__wrapper-banner'>
      <img src={images.banner} alt='banner'/> 
      <div className='book__wrapper-banner__scroll'>
        <span className='p__text book__wrapper-banner__scroll-label'>Scroll</span>
        <span className='book__wrapper-banner__scroll-line'></span>
      </div> 
    </div>
    <form className='book__wrapper-section section__padding'>
      <h1 className='book__wrapper-section_title'>Book an appointment</h1>
      <div className='book__wrapper-section_fragment'>

        <div className='book__wrapper-section_fragment-FullName flex box1'>
          <label className='p__text'>Full Name: 
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='flex section__margin w-100 box1-content'>
            <div className='w-100'>
              <input type='text'/>
              <p className='p__labeltext'>First Name</p>
            </div>
            <div className='section__margin w-100'>
              <input type='text'/>
              <p className='p__labeltext'>Last Name</p>
            </div>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Email flex box2'>
          <label className='p__text'>E-Mail: 
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box2-content'>
            <input type='email'/>
            <p className='p__labeltext'>example@example.com</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Phone flex box3'>
          <label className='p__text'>Phone Number:</label>
          <div className='section__margin w-100 box3-content'>
            <input type='tel'/>
            <p className='p__labeltext'>ex: 07xx.xxx.xxx</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Availability flex box4'>
          <label className='p__text'>Availability:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box4-content'>
            <input type='datetime-local'/>
            <p className='p__labeltext'>Choose your availability date</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Verify flex box5'>
          <label className='p__text'>Are you 18 years old?
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin'>
            <div className='flex'>
              <input type='radio'/>
              <p className='p__labeltext'>Yes</p>
            </div>
            <div className='flex'>
              <input type='radio'/>
              <p className='p__labeltext'>No</p>
            </div>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-TattooColor flex box6'>
          <label className='p__text'>Tattoo Color:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin'>
            <div className='flex'>
              <input type='radio'/>
              <p className='p__labeltext'>Color</p>
            </div>
            <div className='flex'>
              <input type='radio'/>
              <p className='p__labeltext'>Black & Grey</p>
            </div>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Placement flex box7'>
          <label className='p__text'>Placement on your Body:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box7-content'>
            <input type='text'/>
            <p className='p__labeltext'>ex: Upper Chest</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Size flex box8'>
          <label className='p__text'>Tattoo Size (in centimeters):
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box8-content'>
            <input type='number'/>
            <p className='p__labeltext'>ex: 10cm</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Skin box9'>
          <label className='p__text'>Skin Tone (optional)</label>
          <div style={{marginTop: '3px'}}>
            <select style={{marginBottom: '3px'}}>
              <option>Pale</option>
              <option>Rosy-Pale</option>
              <option>Light</option>
              <option>Normal</option>
              <option>Tan</option>
              <option>Exotic</option>
              <option>Medium</option>
              <option>Dark</option>
              <option>Native</option>
            </select>
            <p className='p__labeltext'>Choose your skin color</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Photos box10'>
          <label className='p__text'>Upload Your Photo References
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div style={{marginTop: '3px'}}>
            <div className="upload__files">
              <input type="file" name="upload__files" id="upload__files" className="upload__files-input"/>
              <label className="upload__files-label" htmlFor="upload__files">
                <FaUpload />
                <span className='p__labeltext section__margin'>Upload files</span>
              </label>
            </div>
            <p className='p__labeltext' style={{marginTop: '3px'}}>Please Provide 3-5 photo references and the area being tattooed on your body to assist our artists in better understanding your tattoo concept.</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Description flex box11'>
          <label className='p__text'>Tattoo Description:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box11-content'>
            <textarea placeholder='Please provide us with a detailed description of your tattoo concept...'/>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Artists flex box12'>
          <label className='p__text'>Select a Maximum of Three Artists:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='book__wrapper-section_fragment-Artists_checkboxes'>
            {data.artists.map(artist => (
              <div key={artist.nameArtist} className='flex section__margin '>
                <input type='checkbox'/>
                <p className='p__labeltext'>{artist.nameArtist}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className='book__wrapper-section_button'>
        <button className='custom__button' type='submit'>Submit</button>
      </div>
    </form>   
  </div>
)};
  
  export default Appointment;