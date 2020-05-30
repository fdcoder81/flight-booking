import React from 'react';
import PropTypes from 'prop-types';
import './autocomplete.scss';

const Autocomplete = ({ places, selectPlace, isVisible }) => {
  if (places.length > 0 && isVisible === true) {
    return (
      <div className='autocomplete'>
        {places.map((place) => {
          return (
            <p onClick={() => selectPlace(place.PlaceName)}>
              {place.PlaceName}
            </p>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

Autocomplete.propTypes = {
  places: PropTypes.array.isRequired,
};

export default Autocomplete;
