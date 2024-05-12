import axiosInterceptor from '../../utils/axiosInterseptor';

export const createProjectApi = (data) =>
  axiosInterceptor.post(`${process.env.REACT_APP_API_URL}/admin/create-project`, data);

export const editProjectApi = (data, id) =>
  axiosInterceptor.put(`${process.env.REACT_APP_API_URL}/admin/update-project/${id}`, data);

export const getProjectApi = () =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-projects`);

export const getEmployeeDrDoApi = () =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-employees-dropdown`);

export const createTeamApi = (data, id) =>
  axiosInterceptor.post(
    `${process.env.REACT_APP_API_URL}/admin/add-project-team-member/${id}`,
    data
  );

export const getTeamApi = (id) =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-team-members/${id}`);

export const createMilestoneApi = (data, id) =>
  axiosInterceptor.post(`${process.env.REACT_APP_API_URL}/admin/add-project-milestone/${id}`, data);

export const editMilestoneApi = (data, id, project_id) =>
  axiosInterceptor.put(
    `${process.env.REACT_APP_API_URL}/admin/edit-milestone/${id}?project_id=${project_id}`,
    data
  );

export const getMilestoneApi = (id) =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-milestones/${id}`);

export const viewMilestoneApi = (id) =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-milestones-details/${id}`);

export const deleteMilestoneApi = (id) =>
  axiosInterceptor.delete(`${process.env.REACT_APP_API_URL}/admin/delete-milestones/${id}`);

export const deleteProjectApi = (id) =>
  axiosInterceptor.delete(`${process.env.REACT_APP_API_URL}/admin/delete-project/${id}`);

export const viewProjectApi = (id) =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-project-details/${id}`);

export const createDocumentApi = (data, id) =>
  axiosInterceptor.post(`${process.env.REACT_APP_API_URL}/admin/add-project-documents/${id}`, data);

export const editDocumentApi = (data, id) =>
  axiosInterceptor.put(
    `${process.env.REACT_APP_API_URL}/admin/update-project-documents/${id}`,
    data
  );

// export const editDocumentApi = (data, id) => console.log(data, id, 'editDocumentApi');

export const getDocumentApi = (id) =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-project-doucment-details/${id}`);

export const deleteDocumentApi = (id) =>
  axiosInterceptor.delete(`${process.env.REACT_APP_API_URL}/admin/delete-project-document/${id}`);

export const createChangeReqApi = (data, id) =>
  axiosInterceptor.post(`${process.env.REACT_APP_API_URL}/admin/change-request-module/${id}`, data);

export const getChangeReqApi = (id) =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-change-request-module/${id}`);

export const getAssigneeApi = (id) =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-assignee/${id}`);

export const deleteChangeReqApi = (id) =>
  axiosInterceptor.delete(`${process.env.REACT_APP_API_URL}/admin/delete-module/${id}`);

export const viewChangeReqApi = (id) =>
  axiosInterceptor.get(
    `${process.env.REACT_APP_API_URL}/admin/get-change-request-module-details/${id}`
  );

export const deleteChangeReqLinksApi = (id) =>
  axiosInterceptor.delete(`${process.env.REACT_APP_API_URL}/admin/delete-module-links/${id}`);

export const editChangeReqApi = (data, id) =>
  axiosInterceptor.put(`${process.env.REACT_APP_API_URL}/admin/update-request-module/${id}`, data);

export const editChangeReqtTitleApi = (data, id) =>
  axiosInterceptor.put(
    `${process.env.REACT_APP_API_URL}/admin/update-link-title-module/${id}`,
    data
  );

export const editMilestoneStatusApi = (data, id) =>
  axiosInterceptor.put(
    `${process.env.REACT_APP_API_URL}/admin/update-milestone-status/${id}`,
    data
  );

export const editMilestonePriorityApi = (data, id) =>
  axiosInterceptor.put(
    `${process.env.REACT_APP_API_URL}/admin/update-milestone-priority/${id}`,
    data
  );

export const createTaskApi = (data, id) =>
  axiosInterceptor.post(`${process.env.REACT_APP_API_URL}/admin/add-tasks/${id}`, data);

export const getTaskApi = (id) =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-tasks/${id}`);

export const deleteTaskApi = (id) =>
  axiosInterceptor.delete(`${process.env.REACT_APP_API_URL}/admin/delete-tasks/${id}`);

export const viewTaskApi = (id) =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-task-details/${id}`);

export const editTaskApi = (data, id) =>
  axiosInterceptor.put(`${process.env.REACT_APP_API_URL}/admin/update-tasks/${id}`, data);

export const deleteTeamApi = (id, getmilestoneid) =>
  axiosInterceptor.delete(
    `${process.env.REACT_APP_API_URL}/admin/delete-team-member/${id}?milestone_id=${getmilestoneid}`
  );

export const getProjectStatusCountApi = () =>
  axiosInterceptor.get(`${process.env.REACT_APP_API_URL}/admin/get-project-status-count`);
