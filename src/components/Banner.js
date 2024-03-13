import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <div className="heading">
        <h1>Empowering creators and elevating ideas</h1>
      </div>
      <div className='content'>
        <p>Browse 5000 Permanent and Contract Jobs</p>
      </div>
      <div className='login'>
        <button className='button3'>Candidates</button>
        <Link to="/Login">Login</Link>
        <button className='button4'>Clients</button>
      </div>
    </div>
  );
};

export default Banner;
