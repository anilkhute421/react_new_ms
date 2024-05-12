import axiosInterceptor from '../../utils/axiosInterseptor';

export const signInUrl = (data) =>
  axiosInterceptor.post(`${process.env.REACT_APP_API_URL}/auth/login`, data);

export const dropDownUrl = () =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-master-data`);
