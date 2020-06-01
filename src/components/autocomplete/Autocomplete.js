import React from 'react';
import PropTypes from 'prop-types';
import './autocomplete.scss';

const Autocomplete = ({ places, selectPlace, name }) => {
  return (
    <div className='autocomplete'>
      <h2>{name}</h2>
      {places.map((place) => {
        return (
          <p onClick={() => selectPlace(place.PlaceName, name)}>
            {place.PlaceName}
          </p>
        );
      })}
    </div>
  );
};

Autocomplete.propTypes = {
  places: PropTypes.array.isRequired,
};

export default Autocomplete;
