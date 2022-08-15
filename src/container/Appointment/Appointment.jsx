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
/* 12 */ const [artists, setArtists] = useState([]);




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
    console.log(newFiles);
    setFiles(newFiles);
}
/* 11 */  function handleDescription(e) {
    setDescription((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1));
  }
/* 12 */  function handleCheckedArtists (e) {
    /*  const checkboxes = document.querySelectorAll('.book__wrapper-section_fragment-Artists_checkboxes input')
      let limit = 3;
      const allArtists = artists;
      
      if (allArtists.length <= 2) {
        allArtists.push(e.target.value);
        setArtists(allArtists);
      };

      console.log(artists);
      console.log(artists.length > 2);
      checkboxes.forEach(checkbox => {
        if (!allArtists.find(artist => artist === checkbox.value)) {
          checkbox.setAttribute('disabled', artists.length > 2);
        }
      })
      */
  }





  const handleFormSubmit = (e) => {
    e.preventDefault();

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
  /* 12 */ setArtists([]);


  /* 1 */  console.log(`First name: ${firstName}`);
  /* 1 */  console.log(`Last name: ${lastName}`);
  /* 2 */  console.log(`Email: ${email}`);
  /* 3 */  console.log(`Phone: ${phone}`);
  /* 4 */  console.log(`Availability: ${date}`);
  /* 5 */  console.log(`Adult: ${isAdult}`);
  /* 6 */  console.log(`Tattoo type: ${tattooType}`);
  /* 7 */  console.log(`Tattoo placement: ${placement}`);
  /* 8 */  console.log(`Tattoo size: ${size}cm`);
  /* 9 */  console.log(`Skin color: ${selectedColor}`);
  /* 10 */ console.log(`Photos: ${files}`);
  /* 11 */ console.log(`Tattoo description: ${description}`);
  /* 12 */ console.log(`Artists checked: ${artists.join(', ')}`);
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
              <input type='text' value={firstName} onChange={handleFirstName}/>
              <p className='p__labeltext'>First Name</p>
            </div>
            <div className='section__margin w-100'>
              <input type='text' value={lastName} onChange={handleLastName}/>
              <p className='p__labeltext'>Last Name</p>
            </div>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Email flex box2'>
          <label className='p__text'>E-Mail: 
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box2-content'>
            <input type='email' value={email} onChange={handleEmail}/>
            <p className='p__labeltext'>example@example.com</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Phone flex box3'>
          <label className='p__text'>Phone Number:</label>
          <div className='section__margin w-100 box3-content'>
            <input type='tel' value={phone} onChange={handlePhone} minLength={10}/>
            <p className='p__labeltext'>ex: 07xx.xxx.xxx</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Availability flex box4'>
          <label className='p__text'>Availability:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box4-content'>
            <input type='datetime-local' value={date} onChange={handleAvailability}/>
            <p className='p__labeltext'>Choose your availability date</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Verify flex box5'>
          <label className='p__text'>Are you 18 years old?
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin'>
            <div className='flex'>
              <input type='radio' value='Yes' checked={isAdult === 'Yes'} onChange={handleIsAdultValue}/>
              <p className='p__labeltext'>Yes</p>
            </div>
            <div className='flex'>
              <input type='radio' value='No' checked={isAdult === 'No'} onChange={handleIsAdultValue}/>
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
              <input type='radio' value='Color' checked={tattooType === 'Color'} onChange={handleTattooType}/>
              <p className='p__labeltext'>Color</p>
            </div>
            <div className='flex'>
              <input type='radio' value='Black & Grey' checked={tattooType === 'Black & Grey'} onChange={handleTattooType}/>
              <p className='p__labeltext'>Black & Grey</p>
            </div>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Placement flex box7'>
          <label className='p__text'>Placement on your Body:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box7-content'>
            <input type='text' value={placement} onChange={handlePlacement}/>
            <p className='p__labeltext'>ex: Upper Chest</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Size flex box8'>
          <label className='p__text'>Tattoo Size (in centimeters):
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box8-content'>
            <input type='number' value={size} onChange={handleSize}/>
            <p className='p__labeltext'>ex: 10cm</p>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Skin box9'>
          <label className='p__text'>Skin Tone (optional)</label>
          <div style={{marginTop: '3px'}}>
            <select style={{marginBottom: '3px', background: 'var(--color-golden)'}} value={selectedColor} onChange={handleSkinColors}>
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
          <label className='p__text'>Upload Your Photo References
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div style={{marginTop: '3px'}}>
            <div className="upload__files">
              <input type="file" id="upload__files" className="upload__files-input" onChange={handleSelectedPhotos} multiple/>
              <label className="upload__files-label" htmlFor="upload__files">
                <FaUpload />
                <span className='p__labeltext section__margin'>Upload files</span>
              </label>
            </div>
            <p className='p__labeltext' style={{marginTop: '3px'}}>Please Provide 3-5 photo references and the area being tattooed on your body to assist our artists in better understanding your tattoo concept.</p>
            {Object.values(files).length > 0 && Object.values(files).map(file => (
             /* <p key={file.name} style={{color: 'white'}}>{file.name} was uploaded</p> */
             <img src={URL.createObjectURL(file)} alt={file.name} style={{width: '50px', height: '50px'}} />
            ))}
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Description flex box11'>
          <label className='p__text'>Tattoo Description:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='section__margin w-100 box11-content'>
            <textarea value={description} onChange={handleDescription} placeholder='Please provide us with a detailed description of your tattoo concept...'/>
          </div>
        </div>


        <div className='book__wrapper-section_fragment-Artists flex box12'>
          <label className='p__text'>Select a Maximum of Three Artists:
            <span style={{color: 'var(--color-golden)'}}> *</span>
          </label>
          <div className='book__wrapper-section_fragment-Artists_checkboxes'>
            {data.artists.map(artist => (
              <div key={artist.nameArtist} className='flex section__margin '>
                <input 
                  type='checkbox' 
                  value={artist.nameArtist} 
                  onChange={handleCheckedArtists}
                />
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