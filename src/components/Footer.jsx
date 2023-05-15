import React from 'react';
import { twitter, facebook, instagram } from '../assets';

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
      <div className="company"></div>
    </div>
  );
};

export default Footer;
