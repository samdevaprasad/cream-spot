import { REQUEST, SUCCESS, FAILURE, PLAYER_DATA, ALL_PLAYERS } from '../constants/actionTypes';

const initialState = {
    dustinJohnson: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${PLAYER_DATA}_${SUCCESS}`:
      return {
          ...state,
          dustinJohnson: action.payload.plrs
      };
    case `${ALL_PLAYERS}_${SUCCESS}`:
      return state;
    default:
      return state;
  }
};
