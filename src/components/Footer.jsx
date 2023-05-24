import React from 'react';
import { twitter, facebook, instagram } from '../assets';
import { FaEnvelope, FaGlobeAmericas, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="first">
        <h1 className="footer-title">Affirm consalting</h1>
        <p className="footer-description">
          Get education on business planning, direct access to planning experts and a funding
          platform that’s helped raise over $5M.
        </p>
        <div className="media">
          <img src={twitter} alt="twitter logo" className="logos" style={{ marginLeft: '-10px' }} />
          <img src={facebook} alt="facebook logo" className="logos" />
          <img src={instagram} alt="instagram logo" className="logos" />
        </div>
      </div>
      <div className="company">
        <h1 className="company-title">company</h1>
        <p className="company-text">About Us</p>
        <p className="company-text"> Services</p>
        <p className="company-text"> Contact</p>
      </div>
      <div className="solutions">
        <h1 className="company-title">solutions</h1>
        <p className="company-text">Business Consulting</p>
        <p className="company-text">Financial Advisory</p>
        <p className="company-text">Contact</p>
      </div>
      <div className="contact">
        <h1 className="company-title">contact</h1>
        <p className="company-text">
          <FaPhoneAlt color="#00C59A" style={{marginRight: 9}}/>
          (832) 231-5685
        </p>
        <p className="company-text">
          <FaEnvelope color="#00C59A" style={{marginRight: 9}}/>
          hello@affirm.com
        </p>
        <p className="company-text">
          <FaGlobeAmericas color="#00C59A" style={{marginRight: 9}}/>
          3701 Rollins Road, London
        </p>
      </div>
    </div>
  );
};

export default Footer;
