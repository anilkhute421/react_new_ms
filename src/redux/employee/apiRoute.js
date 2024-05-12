import axiosInterceptor from '../../utils/axiosInterseptor';

export const createEmployeeApi = (data) =>
  axiosInterceptor.post(`${process.env.REACT_APP_API_URL}/admin/add-employee`, data);

export const editEmployeetApi = (data, id) =>
  axiosInterceptor.put(`${process.env.REACT_APP_API_URL}/admin/update-employee/${id}`, data);

export const getEmployeeIdApi = () =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-random-employeeId`);

export const getEmployeeApi = () =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-employee`);

export const viewEmployeeApi = (id) =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-employee-details/${id}`);

export const createEmployeeJobApi = (data, id) =>
  axiosInterceptor.put(`${process.env.REACT_APP_API_URL}/admin/job-details-update/${id}`, data);
