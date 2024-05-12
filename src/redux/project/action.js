import {
  CREATE_PROJECT,
  GET_PROJECTS,
  GET_PROJECTS_RESPONSE,
  GET_CREATE_PROJECTS_RESPONSE,
  GET_EMPLOYEE_DROPDOWN,
  GET_EMPLOYEE_DROPDOWN_RES,
  CREATE_TEAM,
  GET_TEAM,
  GET_TEAM_RES,
  CREATE_MILESTONE,
  GET_MILESTONE,
  GET_MILESTONE_RES,
  DELETE_MILESTONE,
  DELETE_PROJECT,
  VIEW_PROJECT,
  VIEW_PROJECT_RES,
  EDIT_PROJECT,
  VIEW_MILESTONE,
  VIEW_MILESTONE_RES,
  EDIT_MILESTONE,
  CREATE_DOCUMENT,
  GET_DOCUMENT,
  GET_DOCUMENT_RES,
  DELETE_DOCUMENT,
  EDIT_DOCUMENT,
  CREATE_CHANGEREQ,
  GET_CHANGEREQ,
  GET_CHANGEREQ_RES,
  GET_ASSIGNEE_USER,
  GET_ASSIGNEE_USER_RES,
  DELETE_CHANGEREQ,
  VIEW_CHANGEREQ_RES,
  VIEW_CHANGEREQ,
  DELETE_CHANGEREQ_LINKS,
  EDIT_CHANGEREQ,
  SET_SPINNER,
  EDIT_CHANGEREQ_LINK_TITLE,
  EDIT_MILESTONE_STATUS,
  EDIT_MILESTONE_PRIORITY,
  CREATE_TASK,
  GET_TASK,
  GET_TASK_RES,
  DELETE_TASK,
  VIEW_TASK,
  VIEW_TASK_RES,
  EDIT_TASK,
  DELETE_TEAM,
  GET_PROJECT_STATUS_COUNT,
  GET_PROJECT_STATUS_RES
} from './type';
export const createProject = (data) => {
  return {
    type: CREATE_PROJECT,
    payload: data
  };
};

export const editProject = (data, id) => {
  return {
    type: EDIT_PROJECT,
    payload: data,
    id: id
  };
};

export const getProjects = () => {
  return {
    type: GET_PROJECTS
  };
};

export const getProjectsRes = (res) => {
  return {
    type: GET_PROJECTS_RESPONSE,
    payload: res
  };
};

export const getCreateProjectsRes = (res) => {
  return {
    type: GET_CREATE_PROJECTS_RESPONSE,
    payload: res
  };
};

export const getEmployeeDropDownAction = () => {
  return {
    type: GET_EMPLOYEE_DROPDOWN
  };
};

export const getEmployeeDropDownRes = (res) => {
  return {
    type: GET_EMPLOYEE_DROPDOWN_RES,
    payload: res
  };
};

export const createTeamAction = (data, id) => {
  return {
    type: CREATE_TEAM,
    payload: data,
    id: id
  };
};

export const getTeamAction = (id) => {
  return {
    type: GET_TEAM,
    payload: id
  };
};

export const getTeamRes = (res) => {
  return {
    type: GET_TEAM_RES,
    payload: res
  };
};

export const createMilestoneAction = (data, id) => {
  return {
    type: CREATE_MILESTONE,
    payload: data,
    id: id
  };
};

export const getMileStoneAction = (id) => {
  return {
    type: GET_MILESTONE,
    payload: id
    // id: id
  };
};

export const getMilestoneRes = (res) => {
  return {
    type: GET_MILESTONE_RES,
    payload: res
  };
};

export const deleteMilestoneAction = (id, getmilestoneid) => {
  console.log(getmilestoneid, 'get_employee_listdsfdsfdsfdsf');
  return {
    type: DELETE_MILESTONE,
    payload: id,
    id: getmilestoneid
  };
};

export const deleteProjectAction = (id) => {
  return {
    type: DELETE_PROJECT,
    payload: id
  };
};

export const viewProjectAction = (id) => {
  return {
    type: VIEW_PROJECT,
    payload: id
  };
};

export const viewProjectRes = (res) => {
  return {
    type: VIEW_PROJECT_RES,
    payload: res
  };
};

export const viewMilestoneAction = (id) => {
  return {
    type: VIEW_MILESTONE,
    payload: id
  };
};

export const viewMileStoneRes = (res) => {
  return {
    type: VIEW_MILESTONE_RES,
    payload: res
  };
};

export const editMilstoneAction = (data, id, project_id) => {
  return {
    type: EDIT_MILESTONE,
    payload: data,
    id: id,
    project_id: project_id
  };
};

export const createDocumentAction = (data, id) => {
  return {
    type: CREATE_DOCUMENT,
    payload: data,
    id: id
  };
};

export const getDocumentAction = (id) => {
  console.log(id, 'getDocumentAction');
  return {
    type: GET_DOCUMENT,
    id: id
    // id: id
  };
};

export const getDocumentRes = (res) => {
  return {
    type: GET_DOCUMENT_RES,
    payload: res
    // id: id
  };
};

export const deleteDocumentAction = (id, project_id) => {
  return {
    type: DELETE_DOCUMENT,
    id: id,
    project_id: project_id
  };
};

export const editDocumentAction = (data, id, projetct_id) => {
  return {
    type: EDIT_DOCUMENT,
    payload: data,
    id: id,
    projetct_id: projetct_id
  };
};

export const createChangeReqAction = (data, id) => {
  // log
  return {
    type: CREATE_CHANGEREQ,
    payload: data,
    id: id
  };
};

export const getChangeReqAction = (projetct_id) => {
  return {
    type: GET_CHANGEREQ,
    projetct_id: projetct_id
  };
};

export const getChangeReqRes = (res) => {
  return {
    type: GET_CHANGEREQ_RES,
    payload: res
  };
};

export const getAssigneeAction = (id) => {
  return {
    type: GET_ASSIGNEE_USER,
    payload: id
  };
};

export const getAssigneeRes = (res) => {
  return {
    type: GET_ASSIGNEE_USER_RES,
    payload: res
  };
};

export const deleteChangeReqAction = (id, project_id) => {
  return {
    type: DELETE_CHANGEREQ,
    payload: id,
    project_id: project_id
  };
};

export const viewChangeReqAction = (id) => {
  return {
    type: VIEW_CHANGEREQ,
    payload: id
  };
};

export const viewChangeReqRes = (res) => {
  return {
    type: VIEW_CHANGEREQ_RES,
    payload: res
  };
};

export const deleteChangeReqLinkAction = (id, listing_id) => {
  // console.log(id, 'chnagereqid');
  return {
    type: DELETE_CHANGEREQ_LINKS,
    payload: id,
    listing_id: listing_id
  };
};

export const editChangeReqAction = (data, id, project_id) => {
  return {
    type: EDIT_CHANGEREQ,
    payload: data,
    id: id,
    project_id: project_id
  };
};

export const spineerAction = (value) => {
  return {
    type: SET_SPINNER,
    payload: value
  };
};

export const editChangeReqTitleAction = (data, id) => {
  return {
    type: EDIT_CHANGEREQ_LINK_TITLE,
    payload: data,
    id: id
    // projetct_id: projetct_id
  };
};

export const editMilestoneStatusAction = (data, id, project_id) => {
  // console.log(data, id, projetct_id, 'editMilestoneStatusAction');
  return {
    type: EDIT_MILESTONE_STATUS,
    payload: data,
    id: id,
    project_id: project_id
  };
};

export const editMilestonePriorityAction = (data, id, project_id) => {
  // console.log(data, id, projetct_id, 'editMilestonePriorityAction');
  return {
    type: EDIT_MILESTONE_PRIORITY,
    payload: data,
    id: id,
    project_id: project_id
  };
};

export const createTaskAction = (data, id) => {
  console.log(data, id, 'kkkkkaaa');
  return {
    type: CREATE_TASK,
    payload: data,
    id: id
  };
};

export const getTaskAction = (id) => {
  return {
    type: GET_TASK,
    payload: id
  };
};

export const getTaskRes = (res) => {
  return {
    type: GET_TASK_RES,
    payload: res
  };
};

export const deleteTaskAction = (id, project_id) => {
  return {
    type: DELETE_TASK,
    payload: id,
    project_id: project_id
  };
};

export const viewTaskAction = (id) => {
  return {
    type: VIEW_TASK,
    payload: id
  };
};

export const viewTaskRes = (res) => {
  return {
    type: VIEW_TASK_RES,
    payload: res
  };
};

export const editTaskAction = (data, id, project_id) => {
  return {
    type: EDIT_TASK,
    payload: data,
    id: id,
    project_id: project_id
  };
};

export const deleteTeamAction = (id, project_id, getmilestoneid) => {
  return {
    type: DELETE_TEAM,
    payload: id,
    project_id: project_id,
    getmilestoneid: getmilestoneid
  };
};

export const getProjectStatusCountAction = () => {
  return {
    type: GET_PROJECT_STATUS_COUNT
  };
};

export const getProjectStatusCountRes = (res) => {
  return {
    type: GET_PROJECT_STATUS_RES,
    payload: res
  };
};
