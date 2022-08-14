import React, { useState } from 'react';
import { Logo } from '../../components';
import { images, data } from '../../constants';
import { FaUpload } from 'react-icons/fa';

import './Appointment.css';

const Appointment = () => {
/* 1 */  const [firstName, setFirstName] = useState('');
/* 1 */  const [lastName, setLastName] = useState('');
/* 2 */  const [email, setEmail] = useState('');
/* 3 */  const [phone, setPhone] = useState('');
/* 4 */  const [date, setDate] = useState('');
/* 5 */  const [isAdult, setIsAdult] = useState('');
/* 6 */  const [tattooType, setTattooType] = useState('');
/* 7 */  const [placement, setPlacement] = useState('');
/* 8 */  const [size, setSize] = useState('');
/* 11 */ const [description, setDescription] = useState('');
/* 12 */ const [isChecked, setIsChecked] = useState(false);


  function handleFirstName(e) {
    setFirstName(((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1)).trim());
  }

  function handleLastName(e) {
    setLastName(((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1)).trim());
  }

  function handleEmail(e) {
    setEmail((e.target.value).trim());
  }

  function handlePhone(e) {
    setPhone((e.target.value).trim());
  }

  function handleAvailability(e) {
    setDate(e.target.value);
  }

  function handleIsAdultValue(e) {
    if (e.target.checked) {
      setIsAdult(e.target.value);
    }
  }

  function handleTattooType(e) {
    if (e.target.checked) {
      setTattooType(e.target.value);
    }
  }

  function handlePlacement(e) {
    setPlacement(((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1)).trim());
  }

  function handleSize(e) {
    setSize((e.target.value).trim());
  }

  function handleDescription(e) {
    setDescription((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1));
  }

  function handleCheckedArtists(e) {
    setIsChecked(!isChecked);
  }



  const handleFormSubmit = (event) => {
    event.preventDefault();

  /* 1 */  setFirstName();
  /* 1 */  setLastName();
  /* 2 */  setEmail();
  /* 3 */  setPhone();
  /* 4 */  setDate();
  /* 5 */  setIsAdult();
  /* 6 */  setTattooType();
  /* 7 */  setPlacement();
  /* 8 */  setSize();
  /* 11 */ setDescription();
  /* 12 */ setIsChecked();


  /* 1 */  console.log(firstName);
  /* 1 */  console.log(lastName);
  /* 2 */  console.log(email);
  /* 3 */  console.log(phone);
  /* 4 */  console.log(date);
  /* 5 */  console.log(isAdult);
  /* 6 */  console.log(tattooType);
  /* 7 */  console.log(placement);
  /* 8 */  console.log(size);
  /* 11 */ console.log(description);
  /* 12 */ console.log(isChecked);
  }

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
    <form className='book__wrapper-section section__padding' onSubmit={handleFormSubmit}>
      <h1 className='book__wrapper-section_title'>Book an appointment</h1>
      <div className='book__wrapper-section_fragment'>

        <div className='book__wrapper-section_fragment-FullName flex box1'>
          <label className='p__text'>Full Name: 
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='flex section__margin w-100 box1-content'>
            <div className='w-100'>
              <input type='text' value={firstName} onChange={handleFirstName} required/>
              <p className='p__labeltext'>First Name</p>
            </div>
            <div className='section__margin w-100'>
              <input type='text' value={lastName} onChange={handleLastName} required/>
              <p className='p__labeltext'>Last Name</p>
            </div>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Email flex box2'>
          <label className='p__text'>E-Mail: 
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box2-content'>
            <input type='email' value={email} onChange={handleEmail} required/>
            <p className='p__labeltext'>example@example.com</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Phone flex box3'>
          <label className='p__text'>Phone Number:</label>
          <div className='section__margin w-100 box3-content'>
            <input type='tel' value={phone} onChange={handlePhone}/>
            <p className='p__labeltext'>ex: 07xx.xxx.xxx</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Availability flex box4'>
          <label className='p__text'>Availability:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box4-content'>
            <input type='datetime-local' value={date} onChange={handleAvailability} required/>
            <p className='p__labeltext'>Choose your availability date</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Verify flex box5'>
          <label className='p__text'>Are you 18 years old?
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin'>
            <div className='flex'>
              <input type='radio' value='Yes' checked={isAdult === 'Yes'} onChange={handleIsAdultValue} required/>
              <p className='p__labeltext'>Yes</p>
            </div>
            <div className='flex'>
              <input type='radio' value='No' checked={isAdult === 'No'} onChange={handleIsAdultValue} required/>
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
              <input type='radio' value='Color' checked={tattooType === 'Color'} onChange={handleTattooType} required/>
              <p className='p__labeltext'>Color</p>
            </div>
            <div className='flex'>
              <input type='radio' value='Black & Grey' checked={tattooType === 'Black & Grey'} onChange={handleTattooType} required/>
              <p className='p__labeltext'>Black & Grey</p>
            </div>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Placement flex box7'>
          <label className='p__text'>Placement on your Body:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box7-content'>
            <input type='text' value={placement} onChange={handlePlacement} required/>
            <p className='p__labeltext'>ex: Upper Chest</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Size flex box8'>
          <label className='p__text'>Tattoo Size (in centimeters):
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box8-content'>
            <input type='number' value={size} onChange={handleSize} required/>
            <p className='p__labeltext'>ex: 10cm</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Skin box9'>
          <label className='p__text'>Skin Tone (optional)</label>
          <div style={{marginTop: '3px'}}>
            <select style={{marginBottom: '3px'}}>
              <option>Skin color</option>
              <option value='pale'>Pale</option>
              <option value='rosy'>Rosy-Pale</option>
              <option value='light'>Light</option>
              <option value='normal'>Normal</option>
              <option value='tan'>Tan</option>
              <option value='exotic'>Exotic</option>
              <option value='medium'>Medium</option>
              <option value='dark'>Dark</option>
              <option value='native'>Native</option>
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
            <textarea value={description} onChange={handleDescription} placeholder='Please provide us with a detailed description of your tattoo concept...' required/>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Artists flex box12'>
          <label className='p__text'>Select a Maximum of Three Artists:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='book__wrapper-section_fragment-Artists_checkboxes'>
            {data.artists.map(artist => (
              <div key={artist.nameArtist} className='flex section__margin '>
                <input type='checkbox' value={artist.nameArtist} checked={isChecked} onChange={handleCheckedArtists} required/>
                <p className='p__labeltext'>{artist.nameArtist}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className='book__wrapper-section_button'>
        <input className='custom__button' type='submit' value='Submit'/>
      </div>
    </form>   
  </div>
)};
  
  export default Appointment;