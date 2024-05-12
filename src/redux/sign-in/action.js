import { GET_ALL_DROPDOWN_RES, SIGN_IN, SIGN_IN_RES } from './types';

export const signInAction = (data) => {
  // console.log(data, 'data');
  return {
    type: SIGN_IN,
    payload: data
  };
};

export const signInRes = (data) => {
  return {
    type: SIGN_IN_RES,
    payload: data
  };
};

export const dropDownAction = () => {
  return {
    type: GET_ALL_DROPDOWN
  };
};

export const dropDownRes = (data) => {
  return {
    type: GET_ALL_DROPDOWN_RES,
    payload: data
  };
};
