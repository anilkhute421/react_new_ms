/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import signInReducer from './sign-in/signInReducer';
import projectReducer from './project/projectReducer';
import employeeReducer from './employee/employeeReducer';

export const rootReducer = combineReducers({
  signIn: signInReducer,
  project: projectReducer,
  employee: employeeReducer
});
