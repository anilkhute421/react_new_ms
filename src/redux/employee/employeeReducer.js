import { GET_EMPLOYEE_RES, GET_EMPLOYEE_ID_RES, VIEW_EMPLOYEE_RES } from './type';

const initialState = {
  employee_list: [],
  employee_id: {},
  employee_view: {}
};

function employeeReducer(state = initialState, action) {
  // console.log(action, 'sdndnmdfn');
  switch (action.type) {
    // case GET_CREATE_EMPLOYEE_RESPONSE:
    //   return {
    //     ...state,
    //     employee_data: action.payload
    //   };
    case GET_EMPLOYEE_ID_RES:
      return {
        ...state,
        employee_id: action.payload
      };
    case GET_EMPLOYEE_RES:
      return {
        ...state,
        employee_list: action.payload
      };
    case VIEW_EMPLOYEE_RES:
      return {
        ...state,
        employee_view: action.payload
      };

    default:
      return state;
  }
}

export default employeeReducer;
