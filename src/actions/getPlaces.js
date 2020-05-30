import skyscanner from '../api/skyscanner';
import { GET_PLACES, CLEAR_PLACES } from './types';

export const getPlaces = (query) => async (dispatch) => {
  try {
    const res = await skyscanner.get('/', {
      params: {
        query: query,
      },
    });

    dispatch({
      type: GET_PLACES,
      payload: res.data.Places,
    });
  } catch (err) {
    console.log(err);
  }
};

export const clearPlaces = () => {
  return {
    type: CLEAR_PLACES,
  };
};
