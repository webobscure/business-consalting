import React from 'react';

import person from '../assets/person.svg';
import { FaCheck, FaCheckCircle, FaPlay, FaTimes } from 'react-icons/fa';
import { circle, codelab, lightai, treva, velocity, recent, statistic, wallet, command, dollar, leaf } from '../assets';

const Home = () => {
  return (
    <>
      <section className="first-section">
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
            <FaCheckCircle className="yellow-caption__check" />
            <p className="yellow-caption__text">the best on the net!</p>
          </div>
          <img src={person} alt="person" className="person" />
        </div>
        <div className="yellow-line"></div>
      </section>
      <section className="tagline">
        <h1 className="tagline-text">Trusted by copmanies all over the world</h1>
        <img src={lightai} alt="lightai" className="tagline-logo__first" />
        <img src={treva} alt="treva" className="tagline-logo" />
        <img src={codelab} alt="codelab" className="tagline-logo" />
        <img src={circle} alt="circle" className="tagline-logo" />
        <img src={velocity} alt="velocity" className="tagline-logo" />
      </section>
      <section className="information">
        <div className="information-overview">
          <h4 className="information-overview__text">
            <div className="information-rectangle"></div>
            What it does
          </h4>
        </div>
        <div className="left">
          <div className="information-pros">
            <h2 className="information-pros__text">Supercharge your online business development</h2>
            <ul className="information-pros-list">
              <li className="information-pros-list__text">
                <FaCheck color="#00C59A" style={{ marginRight: '10px' }} />
                Prioritize the features your customers need
              </li>
              <li className="information-pros-list__text">
                <FaCheck color="#00C59A" style={{ marginRight: '10px' }} />
                Align everyone around the roadmap
              </li>
              <li className="information-pros-list__text">
                <FaCheck color="#00C59A" style={{ marginRight: '10px' }} />
                Define your product vision with customer feedback
              </li>
            </ul>
            <p className="information-description">
              Spend less time writing a business plan and more time building your business. We help
              you with the best tools you need to best communicate your idea.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="close-element">
            <FaTimes className="close" size={15} />
          </div>
          <img src={statistic} alt="statistic" className="statistic" />
          <img src={recent} alt="recent" className="recent" />
          <img src={wallet} alt="wallet" className="wallet" />
        </div>
      </section>
      <section className="path">
        <div className="path-success">
          <h2 className="path-success__small">
            <div className="path-success__rectangle"></div>
            Your path to success
          </h2>
          <h1 className="path-success__text">Start building the products your customers want</h1>
          <p className="path-success__description">
            Spend less time writing a plan and more time building your business. We help you with
            the tools you need to communicate your idea.
          </p>
        </div>
        <section className="container">
          <div className="card">
            <div className="card-image-1">
              <img src={command} alt="interface" className="card-1"/>
            </div>
            <h1>Accelerate innovation</h1>
            <h1>Ramp subway tile roof party squid actually deep whatever hashtag tousled mumblecore truffaut.</h1>
          </div>
          <div className="card">
            <div className="card-image-2">
              <img src={leaf} alt="leaf" className="card-2"/>
            </div>
            <h1>Improve productivity</h1>
            <h1>Ramp subway tile roof party squid actually deep whatever hashtag tousled mumblecore truffaut.</h1>
          </div>
          <div className="card">
            <div className="card-image-3">
              <img src={dollar} alt="dollar" className="card-3"/>
            </div>
            <h1>Rise capital online</h1>
            <h1>Ramp subway tile roof party squid actually deep whatever hashtag tousled mumblecore truffaut.</h1>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
