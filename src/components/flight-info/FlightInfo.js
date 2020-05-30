import React from 'react';
import PropTypes from 'prop-types';
import './flightInfo.scss';

const flightInfo = () => {
  return (
    <div className='flight-container'>
      <h3>London - New York</h3>
      <div className='flight-box'>
        <div className='col'>
          <div className='row'>
            <div className='item'>
              <p>4:55pm - 7:00pm</p>
              <p>Delta Air Lines</p>
            </div>
            <p>Direct</p>
            <div className='item'>
              <p>8h 00m</p>
              <p>London - New York</p>
            </div>
          </div>
          <div className='row'>
            <div className='item'>
              <p>4:55pm - 7:00pm</p>
              <p>Delta Air Lines</p>
            </div>
            <p>Direct</p>
            <div className='item'>
              <p>8h 00m</p>
              <p>London - New York</p>
            </div>
          </div>
        </div>

        <div className='col-end'>
          <p>255£</p>
          <button>Book Flight</button>
        </div>
      </div>
    </div>
  );
};

flightInfo.propTypes = {};

export default flightInfo;
