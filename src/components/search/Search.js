import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPlaces, clearPlaces } from '../../actions/getPlaces';
import './search.scss';
import InputForm from '../input-form/InputForm';

const Search = ({ getPlaces, clearPlaces, places: { places } }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
  });

  useEffect(() => {
    console.log(formData);
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    e.target.value.length > 0 ? getPlaces(e.target.value) : clearPlaces();
  };

  const selectPlace = (place, name) => {
    setFormData({ ...formData, [name]: place });
  };

  return (
    <div className='search'>
      <form>
        <InputForm
          handleChange={(e) => handleChange(e)}
          query={formData.from}
          placeholder='From'
          name='from'
          places={places}
          selectPlace={selectPlace}
        />
        <InputForm
          handleChange={(e) => handleChange(e)}
          query={formData.to}
          placeholder='to'
          name='to'
          places={places}
          selectPlace={selectPlace}
        />
        <input type='submit' value='Search' />
      </form>
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
