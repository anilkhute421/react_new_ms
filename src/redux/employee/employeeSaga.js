import { takeLatest, call, put } from 'redux-saga/effects';
import {
  createEmployeeApi,
  createEmployeeJobApi,
  editEmployeetApi,
  getEmployeeApi,
  getEmployeeIdApi,
  viewEmployeeApi
} from './apiRoute';
import {
  CREATE_EMPLOYEE,
  GET_EMPLOYEE_ID,
  GET_EMPLOYEE,
  VIEW_EMPLOYEE,
  EDIT_EMPLOYEE,
  CREATE_JOB
} from './type';
import {
  getCreateEmployeeRes,
  getEmployeeAction,
  getEmployeeActionRes,
  getEmployeeIdRes,
  viewEmployeeAction,
  viewEmployeeRes
} from './action';
import { toast } from 'react-toastify';

function* employeeCreateGenerator(action) {
  const { payload } = action || {};
  try {
    const res = yield call(createEmployeeApi, payload);
    console.log(res, 'res');
    if (res.status === 200) {
      // console.log('successs ', res);
      yield put(getCreateEmployeeRes(res?.data));
      toast.success(res?.message || 'Create employee sucssfully');
      yield put(getEmployeeAction());
    } else {
      // console.log('errorresponse', res);
      toast.error(res?.message);
    }
  } catch (error) {
    // console.log('error', error);
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* employeeEditGenerator(action) {
  const { payload, id } = action || {};
  try {
    const res = yield call(editEmployeetApi, payload, id);
    console.log(res, 'res');
    if (res.status === 200) {
      // console.log('successs ', res);
      // yield put(getCreateEmployeeRes(res?.data));
      toast.success(res?.message || 'Update employee sucssfully');
      yield put(viewEmployeeAction(id));
    } else {
      // console.log('errorresponse', res);
      toast.error(res?.message);
    }
  } catch (error) {
    // console.log('error', error);
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* employeeGetIdGenerator() {
  try {
    const res = yield call(getEmployeeIdApi);
    if (res.status === 200) {
      yield put(getEmployeeIdRes(res?.data));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* employeeListGetGenerator() {
  try {
    const res = yield call(getEmployeeApi);
    if (res.status === 200) {
      // console.log(res, 'employee_list');
      yield put(getEmployeeActionRes(res?.listingEmployee));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* employeeViewGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(viewEmployeeApi, payload);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      // toast.success(res?.message || 'Milestone deleted sucssfully');
      yield put(viewEmployeeRes(res.data));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* employeeCreateJobGenerator(action) {
  const { payload, id } = action || {};
  try {
    const res = yield call(createEmployeeJobApi, payload, id);
    console.log(res, 'res');
    if (res.status === 200) {
      // console.log('successs ', res);
      yield put(getCreateEmployeeRes(res?.data));
      toast.success(res?.message || 'Employee job update sucssfully');
      yield put(viewEmployeeAction(id));
    } else {
      // console.log('errorresponse', res);
      toast.error(res?.message);
    }
  } catch (error) {
    // console.log('error', error);
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* employeeSaga() {
  yield takeLatest(CREATE_EMPLOYEE, employeeCreateGenerator);
  yield takeLatest(EDIT_EMPLOYEE, employeeEditGenerator);
  yield takeLatest(GET_EMPLOYEE_ID, employeeGetIdGenerator);
  yield takeLatest(GET_EMPLOYEE, employeeListGetGenerator);
  yield takeLatest(VIEW_EMPLOYEE, employeeViewGenerator);
  yield takeLatest(CREATE_JOB, employeeCreateJobGenerator);
}

export default employeeSaga;
