import { GET_ALL_DROPDOWN_RES, SIGN_IN_RES } from './types';

const initialState = {
  token: {},
  drop_down: {}
};

function signInReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_RES:
      return {
        ...state,
        token: action.payload
      };
    case GET_ALL_DROPDOWN_RES:
      return {
        ...state,
        drop_down: action.payload
      };
    default:
      return state;
  }
}

export default signInReducer;
