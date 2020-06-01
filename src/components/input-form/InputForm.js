import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '../autocomplete/Autocomplete';
import './inputForm.scss';

const InputForm = ({
  handleChange,
  query,
  placeholder,
  name,
  places,
  selectPlace,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const node = useRef();

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      setIsVisible(!isVisible);
      return;
    }
    setIsVisible(!isVisible);
  };

  return (
    <div className='input-group' ref={node}>
      <input
        onClick={handleClick}
        onChange={handleChange}
        type='text'
        placeholder={placeholder}
        value={query}
        name={name}
      />
      {places !== undefined && places.length > 0 && isVisible && (
        <Autocomplete places={places} selectPlace={selectPlace} name={name} />
      )}
    </div>
  );
};

InputForm.propTypes = {};

export default InputForm;
