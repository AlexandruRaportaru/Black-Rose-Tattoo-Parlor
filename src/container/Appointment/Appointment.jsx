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
/* 9 */  const [selectedColor, setSelectedColor] = useState('');
/* 10 */ const [files, setFiles] = useState({});
/* 11 */ const [description, setDescription] = useState('');




/* 1 */  function handleFirstName(e) {
    setFirstName(((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1)).trim());
  }
/* 1 */  function handleLastName(e) {
    setLastName(((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1)).trim());
  }
/* 2 */  function handleEmail(e) {
    setEmail((e.target.value).trim());
  }
/* 3 */  function handlePhone(e) {
    setPhone((e.target.value).trim());
  }
/* 4 */  function handleAvailability(e) {
    setDate(e.target.value);
  }
/* 5 */  function handleIsAdultValue(e) {
    if (e.target.checked) {
      setIsAdult(e.target.value);
    }
  }
/* 6 */  function handleTattooType(e) {
    if (e.target.checked) {
      setTattooType(e.target.value);
    }
  }
/* 7 */  function handlePlacement(e) {
    setPlacement((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1));
  }
/* 8 */  function handleSize(e) {
    setSize((e.target.value).trim());
  }
/* 9 */  function handleSkinColors(e) {
    e.target.style.cssText = `
      background-color: ${e.target.value};
      border: none;
      margin-bottom: 5px;
    `
    setSelectedColor(e.target.value);
}
/* 10 */ function handleSelectedPhotos(e) {
    const newFiles = e.target.files;
    setFiles(newFiles);
}
/* 11 */  function handleDescription(e) {
    setDescription((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1));
}
/* 12 */  function handleCheckedArtists(e) {
      const checkboxes = document.querySelectorAll('.book__wrapper-section_fragment-Artists_checkboxes input');
      let limit = 0;

      checkboxes.forEach(checkbox => {
        if(checkbox.checked === true) {
          limit = limit + 1;
        }
      })

      if(limit >= 3) {
        checkboxes.forEach(checkbox => {
          if(checkbox.checked === false) {
            checkbox.setAttribute('disabled', '');
          }
        })
      } else {
        checkboxes.forEach(checkbox => {
            checkbox.removeAttribute('disabled');
        })
      }
}

const clearCheckboxes = () => {
  const checkboxes = document.querySelectorAll('.book__wrapper-section_fragment-Artists_checkboxes input');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
    checkbox.removeAttribute('disabled');
  });
}

const valuesCheckboxes = () => {
  const checkboxes = document.querySelectorAll('.book__wrapper-section_fragment-Artists_checkboxes input');
  const artists = [];
  checkboxes.forEach(checkbox => {
    if(checkbox.checked === true) {
      artists.push(checkbox.value);
    }
  });
  return artists;
}




  const handleFormSubmit = (e) => {


  /* 1 */  console.log(`First name: ${firstName}`);
  /* 1 */  console.log(`Last name: ${lastName}`);
  /* 2 */  console.log(`Email: ${email}`);
  /* 3 */  console.log(`Phone: ${phone}`);
  /* 4 */  console.log(`Availability: ${date}`);
  /* 5 */  console.log(`Adult: ${isAdult}`);
  /* 6 */  console.log(`Tattoo type: ${tattooType}`);
  /* 7 */  console.log(`Tattoo placement: ${placement}`);
  /* 8 */  console.log(`Tattoo size: ${size}cm`);
  /* 9 */  console.log(`Skin color: ${data.skinColors[selectedColor]}`);
  /* 10 */ console.log(`Photos: ${files}`);
  /* 11 */ console.log(`Tattoo description: ${description}`);
  /* 12 */ console.log(`Artists checked: ${valuesCheckboxes()}`);


  /* 1 */  setFirstName();
  /* 1 */  setLastName();
  /* 2 */  setEmail();
  /* 3 */  setPhone();
  /* 4 */  setDate();
  /* 5 */  setIsAdult();
  /* 6 */  setTattooType();
  /* 7 */  setPlacement();
  /* 8 */  setSize();
  /* 9 */  setSelectedColor();
  /* 10 */ setFiles({});
  /* 11 */ setDescription();
  /* 12 */ clearCheckboxes();

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
    <form 
      className='book__wrapper-section section__padding' 
      onSubmit={handleFormSubmit} 
      action="https://getform.io/f/385f359a-1e7a-4361-85ce-f2e6176b3018" 
      method="POST" 
      encType="multipart/form-data"
    >
      <h1 className='book__wrapper-section_title'>Book an appointment</h1>
      <div className='book__wrapper-section_fragment'>

        <div className='book__wrapper-section_fragment-FullName flex box1'>
          <label className='p__text'>Full Name: 
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='flex section__margin w-100 box1-content'>
            <div className='w-100'>
              <input 
                type='text' 
                value={firstName} 
                onChange={handleFirstName}
                name='firstName'
                required
              />
              <p className='p__labeltext'>First Name</p>
            </div>
            <div className='section__margin w-100'>
              <input 
                type='text' 
                value={lastName} 
                onChange={handleLastName}
                name='lastName'
                required
              />
              <p className='p__labeltext'>Last Name</p>
            </div>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Email flex box2'>
          <label className='p__text'>E-Mail: 
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box2-content'>
            <input 
              type='email' 
              value={email} 
              onChange={handleEmail}
              name='email'
              required
            />
            <p className='p__labeltext'>example@example.com</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Phone flex box3'>
          <label className='p__text'>Phone Number:</label>
          <div className='section__margin w-100 box3-content'>
            <input 
              type='tel' 
              value={phone} 
              onChange={handlePhone} 
              minLength={10}
              name='phone'
            />
            <p className='p__labeltext'>ex: 07xx.xxx.xxx</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Availability flex box4'>
          <label className='p__text'>Availability:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box4-content'>
            <input 
              type='datetime-local' 
              value={date} 
              onChange={handleAvailability}
              name='availability'
              required
            />
            <p className='p__labeltext'>Choose your availability date</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Verify flex box5'>
          <label className='p__text'>Are you 18 years old?</label>
          <div className='section__margin'>
            <div className='flex'>
              <input 
                type='radio' 
                value='Yes' 
                checked={isAdult === 'Yes'} 
                onChange={handleIsAdultValue}
                name='adultYes'
              />
              <p className='p__labeltext'>Yes</p>
            </div>
            <div className='flex'>
              <input 
                type='radio' 
                value='No' 
                checked={isAdult === 'No'} 
                onChange={handleIsAdultValue}
                name='adultNo'
              />
              <p className='p__labeltext'>No</p>
            </div>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-TattooColor flex box6'>
          <label className='p__text'>Tattoo Color: </label>
          <div className='section__margin'>
            <div className='flex'>
              <input 
                type='radio' 
                value='Color' 
                checked={tattooType === 'Color'} 
                onChange={handleTattooType}
                name='tattooTypeC'
              />
              <p className='p__labeltext'>Color</p>
            </div>
            <div className='flex'>
              <input 
                type='radio' 
                value='Black & Grey' 
                checked={tattooType === 'Black & Grey'} 
                onChange={handleTattooType}
                name='tattooTypeB&G'
              />
              <p className='p__labeltext'>Black & Grey</p>
            </div>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Placement flex box7'>
          <label className='p__text'>Placement on your Body:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box7-content'>
            <input 
              type='text' 
              value={placement} 
              onChange={handlePlacement}
              name='placement'
              required
            />
            <p className='p__labeltext'>ex: Upper Chest</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Size flex box8'>
          <label className='p__text'>Tattoo Size (in centimeters):
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box8-content'>
            <input
              type='number' 
              value={size} 
              onChange={handleSize}
              name='size'
              required
            />
            <p className='p__labeltext'>ex: 10cm</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Skin box9'>
          <label className='p__text'>Skin Tone (optional)</label>
          <div style={{marginTop: '3px'}}>
            <select value={selectedColor} onChange={handleSkinColors} name='skinColor'>
              <option value='' style={{background: '#ffffff'}} defaultValue disabled>Skin color</option>
              <option value='#F8D5C2' className='pale' style={{background: '#F8D5C2'}}>Pale</option>
              <option value='#EFBBA6' className='rosy-pale' style={{background: '#EFBBA6'}}>Rosy-Pale</option>
              <option value='#E6AA86' className='light' style={{background: '#E6AA86'}}>Light</option>
              <option value='#D2946B' className='normal' style={{background: '#D2946B'}}>Normal</option>
              <option value='#C58F63' className='tan' style={{background: '#C58F63'}}>Tan</option>
              <option value='#AE7142' className='exotic' style={{background: '#AE7142'}}>Exotic</option>
              <option value='#845736' className='medium' style={{background: '#845736'}}>Medium</option>
              <option value='#715031' className='dark' style={{background: '#715031'}}>Dark</option>
              <option value='#88563B' className='native' style={{background: '#88563B'}}>Native</option>
            </select>
            <p className='p__labeltext'>Choose your skin color</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Photos box10'>
          <label className='p__text'>Upload Your Photo Reference
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div style={{marginTop: '3px'}}>
            <div className="upload__files">
              <input 
                type="file" 
                id="upload__files" 
                className="upload__files-input" 
                onChange={handleSelectedPhotos} 
                multiple
                name='files'
                required
              />
              <label className="upload__files-label" htmlFor="upload__files">
                <FaUpload />
                <span className='p__labeltext section__margin'>Upload files</span>
              </label>
            </div>
            <p className='p__labeltext' style={{margin: '3px 0'}}>Please Provide 1 photo (5MB Maximum) reference about the tattoo or the area being tattooed on your body to assist our artists in better understanding your tattoo concept.</p>
            {Object.values(files).length > 0 && Object.values(files).map(file => (
              <div key={file.name} className='upload__files-done'>
                <img src={URL.createObjectURL(file)} alt={file.name} style={{width: '10%'}}/>
                <p className='p__labeltext' style={{color: 'var(--color-white)'}}>File has been uploaded.</p>
              </div>
            ))}
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Description flex box11'>
          <label className='p__text'>Tattoo Description:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box11-content'>
            <textarea 
              value={description} 
              onChange={handleDescription} 
              placeholder='Please provide us with a detailed description of your tattoo concept...'
              name='description'
            />
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Artists flex box12'>
          <label className='p__text'>Select a Maximum of Three Artists:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='book__wrapper-section_fragment-Artists_checkboxes'>
            {data.artists.map(artist => (
              <div key={artist.nameArtist} className='flex section__margin double'>
                <input
                  type='checkbox' 
                  value={artist.nameArtist} 
                  onChange={handleCheckedArtists}
                  name='artists'
                  required
                />
                <label className='p__labeltext'>{artist.nameArtist}</label>
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