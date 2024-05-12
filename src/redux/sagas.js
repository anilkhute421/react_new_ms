import signInSaga from './sign-in/signInSaga';
import { all, fork } from 'redux-saga/effects';
// import profileSaga from './profile/profileSaga';
import projectSaga from './project/projectSaga';
import employeeSaga from './employee/employeeSaga';

function* rootSaga() {
  yield all([fork(signInSaga), fork(projectSaga), fork(employeeSaga)]);
}

export default rootSaga;
