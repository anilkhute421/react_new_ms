import { takeLatest, call, put } from 'redux-saga/effects';
import { SIGN_IN } from './types';
import { dropDownUrl, signInUrl } from './apiRoute';
import { toast } from 'react-toastify';
import { dropDownRes, signInRes } from './action';

function* signInGenerator(action) {
  const { data, navigate } = action.payload || {};
  try {
    const res = yield call(signInUrl, data);
    // console.log(res, 'singinres');
    if (res.status === 200) {
      yield put(signInRes(res?.access_token));
      navigate('/dashboard');
      console.log(res, 'res');
      toast.success(res?.message || 'Login Successfully');
      const dropDownres = yield call(dropDownUrl);
      if (dropDownres.status === 200) {
        yield put(dropDownRes(dropDownres));
      } else {
        toast.error(dropDownres?.message || 'Unauthorized user');
      }
    } else {
      // console.log(res, 'error');
      toast.error(res?.message || 'Unauthorized user');
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* signInSaga() {
  yield takeLatest(SIGN_IN, signInGenerator);
}

export default signInSaga;
