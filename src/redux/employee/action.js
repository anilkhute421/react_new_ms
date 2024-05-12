import {
  GET_EMPLOYEE_ID,
  CREATE_EMPLOYEE,
  GET_CREATE_EMPLOYEE_RESPONSE,
  GET_EMPLOYEE_ID_RES,
  GET_EMPLOYEE,
  GET_EMPLOYEE_RES,
  VIEW_EMPLOYEE,
  VIEW_EMPLOYEE_RES,
  EDIT_EMPLOYEE,
  CREATE_JOB
} from './type';

export const createEmployeeAction = (data) => {
  // console.log(data, 'action');
  return {
    type: CREATE_EMPLOYEE,
    payload: data
  };
};

export const editEmployeeAction = (data, id) => {
  // console.log(data, 'action');
  return {
    type: EDIT_EMPLOYEE,
    payload: data,
    id: id
  };
};

export const getCreateEmployeeRes = (res) => {
  return {
    type: GET_CREATE_EMPLOYEE_RESPONSE,
    payload: res
  };
};

export const getEmployeeId = () => {
  // console.log('anil');
  return {
    type: GET_EMPLOYEE_ID
  };
};

export const getEmployeeIdRes = (res) => {
  return {
    type: GET_EMPLOYEE_ID_RES,
    payload: res
  };
};

export const getEmployeeAction = () => {
  return {
    type: GET_EMPLOYEE
  };
};

export const getEmployeeActionRes = (res) => {
  // console.log(res, 'get_project_list');
  return {
    type: GET_EMPLOYEE_RES,
    payload: res
  };
};

export const viewEmployeeAction = (id) => {
  return {
    type: VIEW_EMPLOYEE,
    payload: id
  };
};

export const viewEmployeeRes = (res) => {
  return {
    type: VIEW_EMPLOYEE_RES,
    payload: res
  };
};

export const createEmployeeJobAction = (data, id) => {
  // console.log(data, 'action');
  return {
    type: CREATE_JOB,
    payload: data,
    id: id
  };
};
