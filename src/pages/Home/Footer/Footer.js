import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className='bg-dark'>
            <div className='d-flex justify-content-evenly'>
                <div>
                    <h1 className='fs-1 text-danger'>Red <span className='text-white'>Onion</span></h1>
                    <p>51/C/A,Karana,Uganda</p>
                    <h6 className='text-white'>Phone: <FontAwesomeIcon icon={faPhone} className='text-warning' /> +570-5468752</h6>

                </div>
                <div>
                    <h3 className='text-secondary'>Follow Us</h3>
                    <FontAwesomeIcon icon={faFacebook} className='text-primary fs-4 me-2' />   <FontAwesomeIcon icon={faYoutube} className='text-danger fs-4 me-2' />  <FontAwesomeIcon icon={faDiscord} className='text-secondary fs-4 me-2' />
                </div>
            </div>
            <p className='text-center'> <small className="text-white">&copy;2021 All right reserved by <span className='text-danger'>Red</span> <span className='text-white'>Onion</span> </small></p>
        </div>
    );
};

export default Footer;