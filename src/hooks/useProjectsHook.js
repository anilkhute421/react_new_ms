// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createProject, editProject } from '../redux/project/action';

const useProjectHook = () => {
  const dispatch = useDispatch();

  const addProject = (values, setOpen) => {
    const {
      projectName,
      startDate,
      endDate,
      projectUrl,
      clientName,
      upworkId,
      noOfHours,
      budget,
      appName,
      projectPlatform,
      notes,
      // status,
      projectPhase,
      projectType,
      projectCondition,
      sourced_form
    } = values;
    let apiData = {
      name: projectName,
      start_date: startDate,
      end_date: endDate,
      sourced_from: sourced_form,
      url: projectUrl,
      client_name: clientName,
      hired_id: upworkId,
      no_of_hours: noOfHours,
      budget: budget,
      app_name: appName,
      platform: projectPlatform,
      notes: notes,
      project_type: projectType,
      project_phase: projectPhase,
      project_condition: projectCondition
      // remark: 'remark'
    };

    console.log(apiData, 'apiData');
    dispatch(createProject(apiData));

    setOpen();
  };

  const EditProject = (values, setOpen, projetcEditId) => {
    const {
      projectName,
      startDate,
      endDate,
      projectUrl,
      clientName,
      upworkId,
      noOfHours,
      budget,
      appName,
      projectPlatform,
      notes,
      // status,
      projectPhase,
      projectType,
      projectCondition,
      sourced_form
    } = values;
    let apiData = {
      name: projectName,
      start_date: startDate,
      end_date: endDate,
      sourced_from: sourced_form,
      url: projectUrl,
      client_name: clientName,
      hired_id: upworkId,
      no_of_hours: noOfHours,
      budget: budget,
      app_name: appName,
      platform: projectPlatform,
      notes: notes,
      project_type: projectType,
      project_phase: projectPhase,
      project_condition: projectCondition
      // remark: 'remark'
    };

    console.log(apiData, 'apiData');
    dispatch(editProject(apiData, projetcEditId));

    setOpen();
  };
  return { EditProject, addProject };
};

export default useProjectHook;
