import Projects from '../components/projects';
import ViewProject from '../components/projects/ViewProject';
import AddDocument from '../components/projects/document';
import CreateMilestone from '../components/projects/milestone';
import AddTeam from '../components/projects/team';
import Activity from '../components/projects/activity/Activity';
import Employee from '../components/employee';
import Reporting from '../components/reporting';
import Permission from '../components/employee/Permission';
import ViewEmployee from '../components/employee/ViewEmployee';
import ViewDoc from '../components/employee/ViewDoc';
import Salary from '../components/employee/Salary';
import Remarks from '../components/employee/Remarks';
import Lms from '../components/lms';
import ChaReq from '../components/projects/changeRequest';
import ChangReqDetails from '../components/projects/changeRequest/viewChangeReq';
import Task from '../components/projects/task';
// import Notification from '../components/Notification/notification';

export const routes = [
  { path: '/req-doc-view', Comp: <ChangReqDetails /> },
  { path: '/change-request', Comp: <ChaReq /> },
  { path: '/lms', Comp: <Lms /> },
  { path: '/view-activity', Comp: <Activity /> },
  { path: '/task', Comp: <Task /> },
  { path: '/remarks', Comp: <Remarks /> },
  { path: '/view-salary', Comp: <Salary /> },
  { path: '/permission', Comp: <Permission /> },
  { path: '/employee-doc', Comp: <ViewDoc /> },
  { path: '/view-employee', Comp: <ViewEmployee /> },
  { path: '/employee', Comp: <Employee /> },
  { path: '/dashboard', Comp: 'Dashboard' },
  { path: '/project', Comp: <Projects /> },
  { path: '/reporting', Comp: <Reporting /> },
  // { path: '/lms', Comp: 'lms' },
  { path: '/notification', Comp: 'Notification' },
  { path: '/setting', Comp: 'setting' },
  { path: '/view-project', Comp: <ViewProject /> },
  { path: '/create-milestone', Comp: <CreateMilestone /> },
  { path: '/add-document', Comp: <AddDocument /> },
  { path: '/add-team', Comp: <AddTeam /> }
];
