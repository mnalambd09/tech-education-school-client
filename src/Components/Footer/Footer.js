import React from 'react';
import './Footer.css';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black p-5 text-white text-center'>
            <div>
                <div><h4>All Right Reserved</h4></div>
                <div className='social-icon'>
                    <h5>Follow us on Social Network</h5>
                <FaGoogle />
                <FaGithub />
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
                <FaLinkedin></FaLinkedin>
                </div>
            </div>
        </div>
    );
};

export default Footer;