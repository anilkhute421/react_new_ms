import { Box, IconButton, Link } from '@mui/material';
import { TableInput } from './style';
import CustomButton from '../form/CustomButton';
import { CustomFlex } from '../../utils/common_functions';
import colors from '../../theme/colors';
import CustomTable from '../form/CustomTable';
import CustomText from '../form/CustomText';
import CustomDrawer from '../form/CustomDrawer';
import { DeleteIcon, EditIcon } from '../../theme/SvgIcons';
import { eduColumn, eduRow, expColumn, expRows, idsColumn, rowsData } from './ViewList';
import InfoDetails from './InfoDetails';
import { useEffect, useState } from 'react';
// import CreateEmployee from './CreateEmployee';
import EditJobDetails from './EditJobDeatils';
import OfficeId from './OfficeId';
import WorkExperiance from './WorkExperiance';
import Education from './Education';
import UserInfo from './UserInfo';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { viewEmployeeAction } from '../../redux/employee/action';
import EditEmployee from './EditEmployee';
// const SalaryLeftdata = [
//   { column: 'First Name', row: ' Navjot' },
//   { column: 'Last Name', row: 'Mandava' },
//   { column: 'Gender', row: 'Male' },
//   { column: 'D.O.B', row: '28-3-1998' },
//   { column: 'Blood Group', row: 'A+' },
//   { column: 'Marital Status', row: 'Male' },
//   { column: 'Contact Number', row: '+91-9832372832' }
// ];

// const jobLeft = [
//   { column: 'Date of Joining', row: '28-02-2019' },
//   { column: 'Job Status', row: 'Regular' },
//   { column: 'Designation', row: 'Manager' },
//   { column: 'Department', row: 'Web' }
// ];
// const jobRight = [
//   { column: 'Team', row: 'View' },
//   { column: 'Reporting To', row: 'N/A' },
//   { column: 'Re-leaving Date', row: 'N/A' }
// ];
// const SalaryRightdata = [
//   { column: 'Emergency Contact No.', row: '+91-9832372832' },
//   { column: 'Whatsapp No.', row: '+91-9832372832' },
//   { column: 'Personal Email', row: 'personal@gmail.com' },
//   { column: 'UDID', row: '9832372832' },
//   { column: 'PAN No.', row: 'EN9832832' },
//   {
//     column: 'Current Address',
//     row: '#3104,Street NO. 1, Guru Nanak Colony Amritsar-143101, Punjab, INDIA'
//   },
//   {
//     column: 'Permanent Address',
//     row: '#3104,Street NO. 1, Guru Nanak Colony Amritsar-143101, Punjab, INDIA'
//   }
// ];
// const rows = () => {
//   const [openModal, setOpenModal] = useState({ openD: false, type: '' });

//   console.log(openModal, 'openModal');

//   if (Array.isArray(rowsData)) {
//     if (rowsData.length > 0) {
//       return rowsData.map((el) => {
//         return {
//           service: <CustomText variant="title_1">{el.service}</CustomText>,
//           serviceURL: (
//             <Link variant="title_1" color={colors.rudyBlue} href="#" underline="none">
//               {el.serviceURL}
//             </Link>
//           ),
//           userName: (
//             <Link variant="title_1" color={colors.rudyBlue} href="#" underline="none">
//               {el.userName}
//             </Link>
//           ),
//           password: <TableInput type="password" value={el.password} disabled />,
//           contactNumber: <CustomText variant="title_1">{el.contactNumber}</CustomText>,
//           code: <CustomText variant="title_1">{el.code}</CustomText>,
//           remark: <CustomText variant="title_1">{el.remark}</CustomText>,
//           action: (
//             <Box>
//               <IconButton
//                 sx={{ width: '29px', height: '29px', background: colors.darkSkyBlue }}
//                 onClick={() => setOpenModal({ openD: true, type: 'essentialid' })}>
//                 <EditIcon />
//               </IconButton>
//               <IconButton
//                 sx={{ width: '29px', height: '29px', ml: '10px', background: colors.bgDelete }}>
//                 <DeleteIcon />
//               </IconButton>

//               {openModal.openD && (
//                 <IconButton
//                   sx={{ width: '29px', height: '29px', ml: '10px', background: colors.bgDelete }}>
//                   <DeleteIcon />
//                 </IconButton>
//               )}

//               {/* {openModal.openD == true ? <OfficeId open={() => setOpenModal(false)} /> : ''} */}
//               {/* <CustomDrawer
//                 open={openModal.openD}
//                 setOpen={() => setOpenModal({ openD: false, type: '' })}>
//                 {openModal.openD && <OfficeId open={() => setOpenModal(false)} />}
//               </CustomDrawer> */}
//             </Box>
//           )
//         };
//       });
//     } else {
//       return [];
//     }
//   }
// };

const rows = (setOpenModal) => {
  if (Array.isArray(rowsData)) {
    if (rowsData.length > 0) {
      return rowsData.map((el, index) => ({
        id: index,
        service: <CustomText variant="title_1">{el.service}</CustomText>,
        serviceURL: (
          <Link variant="title_1" color={colors.rudyBlue} href="#" underline="none">
            {el.serviceURL}
          </Link>
        ),
        userName: (
          <Link variant="title_1" color={colors.rudyBlue} href="#" underline="none">
            {el.userName}
          </Link>
        ),
        password: <TableInput type="password" value={el.password} disabled />,
        contactNumber: <CustomText variant="title_1">{el.contactNumber}</CustomText>,
        code: <CustomText variant="title_1">{el.code}</CustomText>,
        remark: <CustomText variant="title_1">{el.remark}</CustomText>,
        action: (
          <Box>
            <IconButton
              sx={{ width: '29px', height: '29px', background: colors.darkSkyBlue }}
              onClick={() => setOpenModal({ openD: true, type: 'essentialid' })}>
              <EditIcon />
            </IconButton>
            <IconButton
              sx={{ width: '29px', height: '29px', ml: '10px', background: colors.bgDelete }}>
              <DeleteIcon />
            </IconButton>
          </Box>
        )
      }));
    } else {
      return [];
    }
  } else {
    return [];
  }
};

const cards = (text, editType) => {
  const [openModal, setOpenModal] = useState({ openD: false, type: '' });
  return (
    <>
      <CustomFlex
        sx={{
          p: '10px 30px',
          borderBottom: `1px solid ${colors.Gray90}`,
          borderRadius: '10px 10px 0px 0px',
          background: 'white'
        }}>
        <CustomText variant="subtitle"> {text}</CustomText>
        <CustomButton
          iconAlign={'left'}
          variant="editBtn"
          label="Add"
          onClick={() => setOpenModal({ openD: true, type: editType })}
        />
      </CustomFlex>
      <CustomDrawer open={openModal.openD} setOpen={() => setOpenModal({ openD: false, type: '' })}>
        {openModal.type === 'essentialid' ? (
          <OfficeId open={() => setOpenModal(false)} />
        ) : openModal.type === 'experience' ? (
          <WorkExperiance open={() => setOpenModal(false)} />
        ) : openModal.type === 'education' ? (
          <Education open={() => setOpenModal(false)} />
        ) : (
          ''
        )}
      </CustomDrawer>
    </>
  );
};
const ViewEmployee = () => {
  const [openModal, setOpenModal] = useState({ openD: false, type: '' });
  const emp_id = useLocation().state?.project_id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewEmployeeAction(emp_id));
  }, []);

  const { employee_view } = useSelector((state) => state?.employee);
  // const { spineer_value } = useSelector((e) => e.project);

  //manupilating data
  const employeeLeftdata = [
    { column: 'First Name', row: employee_view?.first_name },
    { column: 'Last Name', row: employee_view?.last_name },
    {
      column: 'Gender',
      row:
        employee_view?.gender && employee_view?.gender === '1'
          ? 'Male'
          : employee_view?.gender === '2'
          ? 'Female'
          : employee_view?.gender === '3'
          ? 'Other'
          : ''
    },
    { column: 'D.O.B', row: employee_view?.date_of_birth },
    {
      column: 'Blood Group',
      row:
        employee_view?.blood_group && employee_view?.blood_group === '1'
          ? 'A+'
          : employee_view?.blood_group === '2'
          ? 'B+'
          : employee_view?.blood_group === '3'
          ? 'A-'
          : employee_view?.blood_group === '4'
          ? 'B-'
          : employee_view?.blood_group === '5'
          ? 'AB+'
          : employee_view?.blood_group === '6'
          ? 'AB-'
          : employee_view?.blood_group === '7'
          ? 'O+'
          : employee_view?.blood_group === '8'
          ? 'O-'
          : ''
    },
    {
      column: 'Marital Status',
      row:
        employee_view?.martial_status && employee_view?.martial_status === '1'
          ? 'Married'
          : 'UnMarried'
    },
    { column: 'Contact Number', row: employee_view?.contact_number }
  ];

  const employeeRightdata = [
    { column: 'Emergency Contact No.', row: employee_view?.emergency_contact_number },
    { column: 'Whatsapp No.', row: employee_view?.whatsapp_number },
    { column: 'Personal Email', row: employee_view?.email },
    { column: 'UDID', row: employee_view?.udid },
    { column: 'PAN No.', row: employee_view?.pan_no },
    {
      column: 'Current Address',
      row: employee_view?.currentAddress?.address_line_one
    },
    {
      column: 'Permanent Address',
      row: employee_view?.permanentAddress?.address_line_one
    }
  ];

  const jobLeftData = [
    { column: 'Date of Joining', row: employee_view?.job_details?.date_of_joinig },
    { column: 'Job Status', row: employee_view?.job_details?.job_status },
    { column: 'Designation', row: employee_view?.job_details?.designation },
    { column: 'Department', row: employee_view?.job_details?.department }
  ];

  const jobRight = [
    { column: 'Team', row: employee_view?.job_details?.departmen },
    { column: 'Reporting To', row: employee_view?.job_details?.Reporting_manager },
    { column: 'Re-leaving Date', row: employee_view?.job_details?.date_of_leaving }
  ];
  // console.log(employee_view, 'view_employee_id');
  return (
    // { spineer_value ? ''}
    <Box>
      <UserInfo />
      <InfoDetails
        onClick={() => setOpenModal({ openD: true, type: 'perinfo' })}
        Leftdata={employeeLeftdata}
        Rightdata={employeeRightdata}
        Title="Personal  Info"
      />

      <InfoDetails
        onClick={() => setOpenModal({ openD: true, type: 'jobdetails' })}
        Leftdata={jobLeftData}
        Rightdata={jobRight}
        Title="Job"
      />

      <Box sx={{ mt: '30px', borderRadius: '10px 10px 0px 0px' }}>
        {cards('Office Essential IDs', 'essentialid')}
        <CustomTable rows={rows(setOpenModal)} headCells={idsColumn} isTableBorder={false} />
      </Box>

      <Box sx={{ mt: '30px', borderRadius: '10px 10px 0px 0px' }}>
        {cards('Work Experience', 'experience')}
        <CustomTable rows={expRows(setOpenModal)} headCells={expColumn} isTableBorder={false} />
      </Box>

      <Box sx={{ mt: '30px', borderRadius: '10px 10px 0px 0px' }}>
        {cards('Education', 'education')}
        <CustomTable rows={eduRow(setOpenModal)} headCells={eduColumn} isTableBorder={false} />
      </Box>
      <CustomDrawer open={openModal.openD} setOpen={() => setOpenModal({ openD: false, type: '' })}>
        {openModal.type === 'perinfo' ? (
          <EditEmployee open={() => setOpenModal(false)} />
        ) : openModal.type === 'jobdetails' ? (
          <EditJobDetails open={() => setOpenModal(false)} />
        ) : openModal.type === 'essentialid' ? (
          <OfficeId open={() => setOpenModal(false)} />
        ) : openModal.type === 'experience' ? (
          <WorkExperiance open={() => setOpenModal(false)} />
        ) : openModal.type === 'education' ? (
          <Education open={() => setOpenModal(false)} />
        ) : (
          ''
        )}
      </CustomDrawer>
    </Box>
  );
};

export default ViewEmployee;
