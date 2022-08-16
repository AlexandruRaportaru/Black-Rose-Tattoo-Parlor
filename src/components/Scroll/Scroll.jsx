import { useState, useEffect } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi'

import './Scroll.css';

const Scroll = () => {
    const [isVisible, setisVisible] = useState(false);
    
    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ');
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setisVisible(true)
        } else {
            setisVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.addEventListener('scroll', toggleVisibility)
        }
    }, [])
    

    return (
        <div className='scroll'>
            <button type='button' onClick={scrollToTop} className={classNames(
                isVisible ? 'opacity-100' : 'opacity-0',
                'custom__button'
            )}>
                <BiArrowFromBottom size={25} aria-hidden='true'/>
            </button>
        </div>
    )
};

export default Scroll;