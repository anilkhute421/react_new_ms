import React, { useState } from 'react';
// import UserInfo from '../employee/UserInfo';
import InfoDetails from './InfoDetails';
import { PermissionWrapper } from './style';
import LastSalary from './LastSalary';
import CustomDrawer from '../form/CustomDrawer';
import EditSalary from './EditSalary';
import { emp_last_sal_heading, emp_sal_heading } from './empText';

const SalaryLeftdata = [
  { column: 'Basic Salary (INR)', row: ' 30,000 ' },
  { column: 'Effective Date', row: '28-03-2020' },
  { column: 'Next review Date', row: '28-03-2020' }
];

const SalaryRightdata = [
  { column: 'Basic Account Number', row: '2031682502' },
  { column: 'Branch Name', row: 'state bank of india' },
  { column: 'IFSC', row: 'SBIN0657' }
];

const LastSalaryLeftdata = [
  { column: 'Last CTC', row: ' 30,000 ' },
  { column: 'In Hand Salary', row: '28-03-2020' },
  { column: 'Last Salary Review', row: '28-03-2020' }
];

const LastSalaryRightdata = [
  { column: 'Mode Of Payement', row: '00012031682502' },
  { column: 'Hike on last salary', row: 'saimajara' }
];

const Salary = () => {
  const [open, setOpen] = useState({ openD: false, type: '' });

  return (
    <PermissionWrapper>
      {/* <UserInfo /> */}
      <InfoDetails
        onClick={() => setOpen({ openD: true, type: 'salary' })}
        Leftdata={SalaryLeftdata}
        Rightdata={SalaryRightdata}
        Title={emp_sal_heading}
      />
      <InfoDetails
        Leftdata={LastSalaryLeftdata}
        Rightdata={LastSalaryRightdata}
        Title={emp_last_sal_heading}
        onClick={() => setOpen({ open, openD: true, type: 'edit' })}
      />
      <CustomDrawer open={open.openD} setOpen={() => setOpen({ openD: false, type: '' })}>
        {open.type === 'salary' ? (
          <LastSalary
            open={() => setOpen(false)}
            // projetclist={projetclist}
            // setProjetclist={setProjetclist}
          />
        ) : (
          <EditSalary open={() => setOpen(false)} />
        )}
      </CustomDrawer>
    </PermissionWrapper>
  );
};

export default Salary;
