import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPlaces, clearPlaces } from '../../actions/getPlaces';
import './search.scss';
import Autocomplete from '../autocomplete/Autocomplete';

const Search = ({ getPlaces, clearPlaces, places: { places } }) => {
  const [query, setQuery] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log(query);
  });

  const handleChange = (e) => {
    setQuery(e.target.value);
    e.target.value.length > 1 ? getPlaces(query) : clearPlaces();
    setIsVisible(true);
  };

  const selectPlace = (place) => {
    setQuery(place);
    setIsVisible(false);
  };

  return (
    <div className='search'>
      <form>
        <input
          onChange={handleChange}
          type='text'
          placeholder='From'
          value={query}
        />
        <input type='submit' value='Search' />
      </form>
      {places.length > 0 && (
        <Autocomplete
          places={places}
          selectPlace={selectPlace}
          isVisible={isVisible}
        />
      )}
    </div>
  );
};

Search.propTypes = {
  places: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  places: state.places,
});

export default connect(mapStateToProps, { getPlaces, clearPlaces })(Search);
