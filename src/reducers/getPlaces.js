import { GET_PLACES, CLEAR_PLACES } from '../actions/types';

const initialState = {
  places: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PLACES:
      return {
        ...state,
        places: payload,
      };
    case CLEAR_PLACES:
      return {
        ...state,
        places: [],
      };
    default:
      return state;
  }
}
