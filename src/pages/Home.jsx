import React from 'react';

import person from '../assets/person.svg';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <section className="first-serction">
        <div className="lead">
          <div className="lead-breef">
            <h5 className="text">
              <div className="rectangle"></div>
              Build your plan
            </h5>
          </div>
          <h4 className="description">Everything you need to run your online business</h4>
          <p className="small-text">
            Get education on business planning, direct access to planning experts and a funding
            platform that’s helped raise over $500 million for startups and small businesses
            world-wide.
          </p>
          <button className="btn">
            Get Started
            <label className="btn-desc"> - For Free</label>
          </button>
          <button className="watch">
            <FaPlay className="player" />
            Watch video
          </button>
        </div>
        <div className="lead-right">
          <div className="red-caption">
            <FaCheckCircle className="red-caption__check" />
            <p className="red-caption__text">I'd be lost without Affirm.</p>
          </div>
          <div className="yellow-caption">
            <FaCheckCircle className='yellow-caption__check' />
            <p className="yellow-caption__text">
              the best on the net!
            </p>
          </div>
          <img src={person} alt="person" className="person" />
        </div>
        <div className="yellow-line"></div>

      </section>
    </>
  );
};

export default Home;
