import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import SelectProject from '../projects/SelectProject';
import { UserDetailWrapper, UserDetails, UserImageWrapper, UserWrapper, labelStyle } from './style';
import colors from '../../theme/colors';
import CustomizedSwitches from './CustomizedSwitches';
import {
  DocumentIcon,
  GeneralInfoIcon,
  PermissionIcon,
  RemarksIcon,
  SalaryIcon
} from '../../theme/SvgIcons';
import {
  emp_active,
  emp_contact_no,
  emp_depart,
  emp_desig,
  emp_id,
  emp_official_email,
  emp_reporting
} from './empText';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const { employee_view } = useSelector((state) => state?.employee);
  const [checked, setChecked] = useState(false);
  console.log(checked, employee_view?.status, 'checked');
  const projecttype = [
    {
      value: 'permission',
      label: 'Permission',
      icon: <PermissionIcon />,
      path: '/permission'
    },
    {
      value: 'general-info',
      label: 'General Info',
      icon: <GeneralInfoIcon />,
      path: '/view-employee'
    },
    {
      value: 'documents',
      label: 'Documents',
      icon: <DocumentIcon />,
      path: '/employee-doc'
    },
    {
      value: 'salary',
      label: 'Salary',
      icon: <SalaryIcon />,
      path: '/view-salary'
    },
    {
      value: 'remarks',
      label: 'Remarks',
      icon: <RemarksIcon />,
      path: '/remarks'
    }
  ];

  useEffect(() => {
    setChecked(employee_view?.status === 'Active' ? true : false);
  }, [employee_view?.status]);
  return (
    <UserWrapper>
      <div style={{ width: '15%' }}>
        <UserImageWrapper>
          <img src={''} />
        </UserImageWrapper>
      </div>
      <UserDetailWrapper>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            sx={{
              ...labelStyle(`${colors.rudyBlue}`, '12px', 400),
              margin: '10px 0px'
            }}>
            {emp_id}: {employee_view?.id}
          </Typography>
          <div style={{ display: 'flex', textAlign: 'center' }}>
            <div>
              <Typography
                sx={{
                  ...labelStyle(`${colors.grayLight}`, '12px', 400),
                  margin: '7px 20px 0px 0px'
                }}>
                {emp_active}
              </Typography>
            </div>
            <div>
              <CustomizedSwitches status={checked} setChecked={setChecked} />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <Typography sx={labelStyle(colors.nero, '22px', 700)}>
            {`${employee_view?.first_name} ${employee_view?.last_name} `}
          </Typography>
          <Typography sx={{ ...labelStyle(colors.rudyBlue, '12px', 400) }}> | Executive</Typography>
        </div>
        <UserDetails>
          <div>
            <Typography sx={labelStyle(colors.grayLight, '12px', 400)}>{emp_desig}</Typography>
            <Typography sx={labelStyle(colors.black, '14px', 500)}>
              {employee_view?.job_details?.designation
                ? employee_view?.job_details?.designation
                : '--'}
            </Typography>
          </div>
          <div>
            <Typography sx={labelStyle(colors.grayLight, '12px', 400)}>{emp_depart}</Typography>
            <Typography sx={labelStyle(colors.black, '14px', 500)}>
              {employee_view?.job_details?.department
                ? employee_view?.job_details?.department
                : '--'}
            </Typography>
          </div>
          <div>
            <Typography sx={labelStyle(colors.grayLight, '12px', 400)}>{emp_reporting}</Typography>
            <Typography sx={labelStyle(colors.black, '14px', 500)}>
              {employee_view?.job_details?.Reporting_manager
                ? employee_view?.job_details?.Reporting_manager
                : '--'}
            </Typography>
          </div>
          <div>
            <Typography sx={labelStyle(colors.grayLight, '12px', 400)}>{emp_contact_no}</Typography>
            <Typography sx={labelStyle(colors.black, '14px', 500)}>
              +91-{employee_view?.contact_number}
            </Typography>
          </div>
          <div>
            <Typography sx={labelStyle(colors.grayLight, '12px', 400)}>
              {emp_official_email}
            </Typography>
            <Typography sx={labelStyle(colors.rudyBlue, '14px', 500)}>
              {employee_view?.email}
            </Typography>
          </div>
          <SelectProject option={projecttype} height="40px" />
        </UserDetails>
      </UserDetailWrapper>
    </UserWrapper>
  );
};

export default UserInfo;
