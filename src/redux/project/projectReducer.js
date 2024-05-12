import {
  GET_CREATE_PROJECTS_RESPONSE,
  GET_PROJECTS_RESPONSE,
  GET_EMPLOYEE_DROPDOWN_RES,
  GET_TEAM_RES,
  GET_MILESTONE_RES,
  VIEW_PROJECT_RES,
  VIEW_MILESTONE_RES,
  GET_DOCUMENT_RES,
  GET_CHANGEREQ_RES,
  GET_ASSIGNEE_USER_RES,
  VIEW_CHANGEREQ_RES,
  SET_SPINNER,
  GET_TASK_RES,
  VIEW_TASK_RES,
  GET_PROJECT_STATUS_RES
} from './type';

const initialState = {
  data: null,
  project_list: [],
  employee_drop_down_list: [],
  team_list: [],
  milestone_list: [],
  project_view: {},
  milesone_view: {},
  document_list: [],
  changeReq_list: [],
  assignee_list: [],
  changeReq_view: {},
  spineer_value: false,
  task_list: [],
  task_view: {},
  project_status_count: {}
};

function projectReducer(state = initialState, action) {
  // console.log(action, 'sdndnmdfn');
  switch (action.type) {
    case GET_PROJECTS_RESPONSE:
      return {
        ...state,
        project_list: action.payload
      };
    case GET_CREATE_PROJECTS_RESPONSE:
      return {
        ...state,
        create_res: action.payload
      };
    case GET_EMPLOYEE_DROPDOWN_RES:
      return {
        ...state,
        employee_drop_down_list: action.payload
      };
    case GET_TEAM_RES:
      return {
        ...state,
        team_list: action.payload
      };
    case GET_MILESTONE_RES:
      return {
        ...state,
        milestone_list: action.payload
      };
    case VIEW_PROJECT_RES:
      return {
        ...state,
        project_view: action.payload
      };
    case VIEW_MILESTONE_RES:
      return {
        ...state,
        milesone_view: action.payload
      };
    case GET_DOCUMENT_RES:
      return {
        ...state,
        document_list: action.payload
      };
    case GET_CHANGEREQ_RES:
      return {
        ...state,
        changeReq_list: action.payload
      };
    case GET_ASSIGNEE_USER_RES:
      return {
        ...state,
        assignee_list: action.payload
      };
    case VIEW_CHANGEREQ_RES:
      return {
        ...state,
        changeReq_view: action.payload
      };
    case SET_SPINNER:
      return {
        ...state,
        spineer_value: action.payload
      };
    case GET_TASK_RES:
      return {
        ...state,
        task_list: action.payload
      };
    case VIEW_TASK_RES:
      return {
        ...state,
        task_view: action.payload
      };
    case GET_PROJECT_STATUS_RES:
      return {
        ...state,
        project_status_count: action.payload
      };
    default:
      return state;
  }
}

export default projectReducer;
