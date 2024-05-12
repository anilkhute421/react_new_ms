import { takeLatest, call, put } from 'redux-saga/effects';
import {
  createChangeReqApi,
  createDocumentApi,
  createMilestoneApi,
  createProjectApi,
  createTaskApi,
  createTeamApi,
  deleteChangeReqApi,
  deleteChangeReqLinksApi,
  deleteDocumentApi,
  deleteMilestoneApi,
  deleteProjectApi,
  deleteTaskApi,
  deleteTeamApi,
  editChangeReqApi,
  editChangeReqtTitleApi,
  editDocumentApi,
  editMilestoneApi,
  editMilestonePriorityApi,
  editMilestoneStatusApi,
  editProjectApi,
  editTaskApi,
  getAssigneeApi,
  getChangeReqApi,
  getDocumentApi,
  // deleteMilestoneApi,
  getEmployeeDrDoApi,
  getMilestoneApi,
  getProjectApi,
  getProjectStatusCountApi,
  getTaskApi,
  getTeamApi,
  viewChangeReqApi,
  viewMilestoneApi,
  viewProjectApi,
  viewTaskApi
} from './apiRoute';
import {
  CREATE_PROJECT,
  EDIT_PROJECT,
  GET_PROJECTS,
  GET_EMPLOYEE_DROPDOWN,
  CREATE_TEAM,
  GET_TEAM,
  CREATE_MILESTONE,
  GET_MILESTONE,
  DELETE_MILESTONE,
  DELETE_PROJECT,
  VIEW_PROJECT,
  VIEW_MILESTONE,
  EDIT_MILESTONE,
  CREATE_DOCUMENT,
  GET_DOCUMENT,
  DELETE_DOCUMENT,
  EDIT_DOCUMENT,
  CREATE_CHANGEREQ,
  GET_CHANGEREQ,
  GET_ASSIGNEE_USER,
  DELETE_CHANGEREQ,
  VIEW_CHANGEREQ,
  DELETE_CHANGEREQ_LINKS,
  EDIT_CHANGEREQ,
  EDIT_CHANGEREQ_LINK_TITLE,
  EDIT_MILESTONE_STATUS,
  EDIT_MILESTONE_PRIORITY,
  CREATE_TASK,
  GET_TASK,
  DELETE_TASK,
  VIEW_TASK,
  EDIT_TASK,
  DELETE_TEAM,
  GET_PROJECT_STATUS_COUNT
} from './type';
import {
  getProjectsRes,
  getCreateProjectsRes,
  getProjects,
  getEmployeeDropDownRes,
  getTeamRes,
  getMilestoneRes,
  getMileStoneAction,
  getTeamAction,
  viewProjectRes,
  viewMileStoneRes,
  viewProjectAction,
  viewMilestoneAction,
  getDocumentRes,
  getDocumentAction,
  getChangeReqRes,
  getAssigneeRes,
  getChangeReqAction,
  viewChangeReqRes,
  viewChangeReqAction,
  getTaskRes,
  getTaskAction,
  viewTaskRes,
  getProjectStatusCountRes
} from './action';
import { toast } from 'react-toastify';

function* projectCreateGenerator(action) {
  console.log(action, 'actionaction');
  const { payload } = action || {};
  try {
    const res = yield call(createProjectApi, payload);
    // console.log(res, 'res');
    if (res.status === 200) {
      yield put(getCreateProjectsRes(res?.data));
      toast.success(res?.message || 'Create project sucssfully');
      // yield call(getProjectsGenerator);
      yield put(getProjects());
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* projectEditGenerator(action) {
  // console.log(action, 'actionaction');
  const { payload, id } = action || {};
  try {
    const res = yield call(editProjectApi, payload, id);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getCreateProjectsRes(res?.data));
      toast.success(res?.message || 'Create project sucssfully');
      // yield call(getProjectsGenerator);
      yield put(viewProjectAction(id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* getProjectsGenerator() {
  try {
    const res = yield call(getProjectApi);
    if (res.status === 200) {
      // console.log(res, 'get_project_list');
      yield put(getProjectsRes(res?.data));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* getEmployeeGenerator() {
  try {
    const res = yield call(getEmployeeDrDoApi);
    if (res.status === 200) {
      // console.log(res, 'get_project_list');
      yield put(getEmployeeDropDownRes(res?.data));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* teamCreateGenerator(action) {
  // console.log(id, 'actionaction');
  const { payload, id } = action || {};
  try {
    const res = yield call(createTeamApi, payload, id);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getCreateProjectsRes(res?.data));
      toast.success(res?.message || 'Create team sucssfully');
      // yield call(getProjectsGenerator);
      yield put(getTeamAction(id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* teamGeteGenerator(action) {
  // console.log(id, 'actionaction');
  const { payload } = action || {};
  try {
    const res = yield call(getTeamApi, payload);
    console.log(res, 'resdasdasdasdds');
    if (res.status === 200) {
      yield put(getTeamRes(res?.data));
    } else {
      // toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* milestoneCreateGenerator(action) {
  // console.log(id, 'actionaction');
  const { payload, id } = action || {};
  try {
    const res = yield call(createMilestoneApi, payload, id);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getCreateProjectsRes(res?.data));
      toast.success(res?.message || 'Milestone Created sucssfully');
      // yield call(getProjectsGenerator);
      yield put(getMileStoneAction(id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* MilestoneGetGenerator(action) {
  // console.log(id, 'MilestoneGetGenerator');
  const { payload } = action || {};
  try {
    const res = yield call(getMilestoneApi, payload);
    // console.log(res, 'res');
    if (res.status === 200) {
      yield put(getMilestoneRes(res?.data));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* MilestoneDeleteGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload, id } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(deleteMilestoneApi, payload);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      toast.success(res?.message || 'Milestone deleted sucssfully');
      yield put(getMileStoneAction(id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* ProjectDeleteGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(deleteProjectApi, payload);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      toast.success(res?.message || 'Milestone deleted sucssfully');
      yield put(getProjects());
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* ProjectViewGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(viewProjectApi, payload);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      // toast.success(res?.message || 'Milestone deleted sucssfully');
      yield put(viewProjectRes(res.data));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* MilestoneViewGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(viewMilestoneApi, payload);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      // toast.success(res?.message || 'Milestone deleted sucssfully');
      yield put(viewMileStoneRes(res.data));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* MilestoneEditGenerator(action) {
  console.log(action, 'actionaction');
  const { payload, id, project_id } = action || {};
  try {
    const res = yield call(editMilestoneApi, payload, id, project_id);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getCreateProjectsRes(res?.data));
      toast.success(res?.message || 'Update Milestone sucssfully');
      // yield call(getProjectsGenerator);
      yield put(getMileStoneAction(project_id));
      yield put(viewMilestoneAction(id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* documentCreateGenerator(action) {
  console.log(action, 'actionaction');
  const { payload, id } = action || {};
  try {
    const res = yield call(createDocumentApi, payload, id);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getCreateProjectsRes(res?.data));
      toast.success(res?.message || 'Create document sucssfully');
      // yield call(getProjectsGenerator);
      yield put(getDocumentAction(id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* DocumentGetGenerator(action) {
  const { id } = action || {};
  try {
    const res = yield call(getDocumentApi, id);
    if (res.status === 200) {
      // console.log(res, 'get_project_list');
      yield put(getDocumentRes(res?.data));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* DocumentDeleteGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { id, project_id } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(deleteDocumentApi, id);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      toast.success(res?.message || 'Document deleted sucssfully');
      yield put(getDocumentAction(project_id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* DocumentEditGenerator(action) {
  // console.log(action, 'actionaction');
  const { payload, id, projetct_id } = action || {};
  try {
    const res = yield call(editDocumentApi, payload, id);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getCreateProjectsRes(res?.data));
      toast.success(res?.message || 'Update Document sucssfully');
      yield put(getDocumentAction(projetct_id));
      // yield put(getDocumentAction(project_id));
      // yield put(viewMilestoneAction(id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* changeReqCreateGenerator(action) {
  console.log(action, 'actionaction');
  const { payload, id } = action || {};
  try {
    const res = yield call(createChangeReqApi, payload, id);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getCreateProjectsRes(res?.data));
      toast.success(res?.message || 'Create project sucssfully');
      yield put(getChangeReqAction(id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* getChangeReqGenerator(action) {
  const { projetct_id } = action;
  try {
    const res = yield call(getChangeReqApi, projetct_id);
    if (res.status === 200) {
      // console.log(res, 'get_project_list');
      yield put(getChangeReqRes(res?.data));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* getAssigneeReqGenerator(action) {
  const { payload } = action;
  try {
    const res = yield call(getAssigneeApi, payload);
    if (res.status === 200) {
      yield put(getAssigneeRes(res?.data));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* ChangeReqDeleteGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload, project_id } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(deleteChangeReqApi, payload);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      toast.success(res?.message || 'Change Request deleted sucssfully');
      yield put(getChangeReqAction(project_id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* ChangeReqViewGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(viewChangeReqApi, payload);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      // toast.success(res?.message || 'Milestone deleted sucssfully');
      yield put(viewChangeReqRes(res.data));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* ChangeReqLinksDeleteGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload, listing_id } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(deleteChangeReqLinksApi, payload);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      toast.success(res?.message || 'Link deleted sucssfully');
      yield put(viewChangeReqAction(listing_id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* ChangeReqEditGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload, id, project_id } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(editChangeReqApi, payload, id);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      toast.success(res?.message || 'Link deleted sucssfully');
      yield put(viewChangeReqRes({}));
      yield put(getChangeReqAction(project_id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

//pending work
function* ChangeReqEditTitleGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload, id } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(editChangeReqtTitleApi, payload, id);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      toast.success(res?.message || 'Link Title updated sucessfully');
      // yield put(getChangeReqAction());
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}
//pending work
function* ChangeMilestoneStatusGenerator(action) {
  console.log(action, 'bnbmn');
  const { payload, id, project_id } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(editMilestoneStatusApi, payload, id);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      toast.success(res?.message || 'Status updated sucessfully');
      yield put(getMileStoneAction(project_id));
      yield put(viewMilestoneAction(id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

//pending work
function* ChangeMilestonePriorityGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload, id, project_id } = action || {};
  // console.log(project_id, 'getmilestoneid');
  try {
    const res = yield call(editMilestonePriorityApi, payload, id);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      toast.success(res?.message || 'Priority updated sucessfully');
      yield put(getMileStoneAction(project_id));
      yield put(viewMilestoneAction(id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* TaskCreateGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload, id } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(createTaskApi, payload, id);
    // console.log(res, 'res');
    if (res.status === 200) {
      yield put(getTaskAction(id));
      toast.success(res?.message || 'Task create  sucessfully');
      // yield put(getChangeReqAction());
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* TaskGetGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(getTaskApi, payload);
    // console.log(res, 'res');
    if (res.status === 200) {
      yield put(getTaskRes(res?.data));
      // toast.success(res?.message || 'Status updated sucessfully');
      // yield put(getChangeReqAction());
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* TaskDeleteGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload, project_id } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(deleteTaskApi, payload);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      toast.success(res?.message || 'Task deleted sucssfully');
      yield put(getTaskAction(project_id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* TaskViewGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(viewTaskApi, payload);
    // console.log(res, 'res');
    if (res.status === 200) {
      // yield put(getMilestoneRes(res?.data));
      // toast.success(res?.message || 'Task deleted sucssfully');
      yield put(viewTaskRes(res?.data));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* TaskEditGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload, id, project_id } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(editTaskApi, payload, id);
    // console.log(res, 'res');
    if (res.status === 200) {
      toast.success(res?.message || 'Task updated sucssfully');

      yield put(getTaskAction(project_id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* TeamDeleteGenerator(action) {
  // console.log(id, 'MilestoneDeleteGenerator');
  const { payload, project_id, getmilestoneid } = action || {};
  // console.log(getmilestoneid, 'getmilestoneid');
  try {
    const res = yield call(deleteTeamApi, payload, getmilestoneid);
    // console.log(res, 'res');
    if (res.status === 200) {
      toast.success(res?.message || 'Team deleted sucssfully');
      yield put(getTeamAction(project_id));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* ProjectStatusCountGetGenerator() {
  try {
    const res = yield call(getProjectStatusCountApi);
    // console.log(res, 'res');
    if (res.status === 200) {
      // toast.success(res?.message || 'Team deleted sucssfully');
      yield put(getProjectStatusCountRes(res?.data));
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    if (error) {
      toast.error(error?.message || 'Somthing went wrong');
    }
  }
}

function* projectSaga() {
  yield takeLatest(CREATE_PROJECT, projectCreateGenerator);
  yield takeLatest(EDIT_PROJECT, projectEditGenerator);
  yield takeLatest(GET_PROJECTS, getProjectsGenerator);
  yield takeLatest(GET_EMPLOYEE_DROPDOWN, getEmployeeGenerator);
  yield takeLatest(CREATE_TEAM, teamCreateGenerator);
  yield takeLatest(GET_TEAM, teamGeteGenerator);
  yield takeLatest(CREATE_MILESTONE, milestoneCreateGenerator);
  yield takeLatest(GET_MILESTONE, MilestoneGetGenerator);
  yield takeLatest(DELETE_MILESTONE, MilestoneDeleteGenerator);
  yield takeLatest(DELETE_PROJECT, ProjectDeleteGenerator);
  yield takeLatest(VIEW_PROJECT, ProjectViewGenerator);
  yield takeLatest(VIEW_MILESTONE, MilestoneViewGenerator);
  yield takeLatest(EDIT_MILESTONE, MilestoneEditGenerator);
  yield takeLatest(CREATE_DOCUMENT, documentCreateGenerator);
  yield takeLatest(GET_DOCUMENT, DocumentGetGenerator);
  yield takeLatest(DELETE_DOCUMENT, DocumentDeleteGenerator);
  yield takeLatest(EDIT_DOCUMENT, DocumentEditGenerator);
  yield takeLatest(CREATE_CHANGEREQ, changeReqCreateGenerator);
  yield takeLatest(GET_CHANGEREQ, getChangeReqGenerator);
  yield takeLatest(GET_ASSIGNEE_USER, getAssigneeReqGenerator);
  yield takeLatest(DELETE_CHANGEREQ, ChangeReqDeleteGenerator);
  yield takeLatest(VIEW_CHANGEREQ, ChangeReqViewGenerator);
  yield takeLatest(DELETE_CHANGEREQ_LINKS, ChangeReqLinksDeleteGenerator);
  yield takeLatest(EDIT_CHANGEREQ, ChangeReqEditGenerator);
  yield takeLatest(EDIT_CHANGEREQ_LINK_TITLE, ChangeReqEditTitleGenerator);
  yield takeLatest(EDIT_MILESTONE_STATUS, ChangeMilestoneStatusGenerator);
  yield takeLatest(EDIT_MILESTONE_PRIORITY, ChangeMilestonePriorityGenerator);
  yield takeLatest(CREATE_TASK, TaskCreateGenerator);
  yield takeLatest(GET_TASK, TaskGetGenerator);
  yield takeLatest(DELETE_TASK, TaskDeleteGenerator);
  yield takeLatest(VIEW_TASK, TaskViewGenerator);
  yield takeLatest(EDIT_TASK, TaskEditGenerator);
  yield takeLatest(DELETE_TEAM, TeamDeleteGenerator);
  yield takeLatest(GET_PROJECT_STATUS_COUNT, ProjectStatusCountGetGenerator);
}

export default projectSaga;
