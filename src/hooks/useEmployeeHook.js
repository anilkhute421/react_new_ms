import { useDispatch } from 'react-redux';
import { createEmployeeAction, editEmployeeAction } from '../redux/employee/action';

const useEmployeeHook = () => {
  const dispatch = useDispatch();

  const addEmployee = (values, fileName, emp_id, setOpen, isSameAddress) => {
    // console.log(fileName, 'fileName');
    const {
      // employeeId,
      firstName,
      lastName,
      gender,
      maritalStatus,
      dob,
      bloodGroup,
      conatctNumber,
      emergencyCN,
      whatsappNumber,
      emailPersonal,
      udid,
      panNo,
      caddress1,
      caddress2,
      ccity,
      country,
      cpostcode,
      cstate,
      paddress1,
      paddress2,
      pcity,
      ppostcode,
      pstate,
      old_id
    } = values;
    let apiData = {
      emp_id: emp_id,
      first_name: firstName,
      last_name: lastName,
      profile_image: 'dfgfd',
      role: '2',
      gender: gender,
      martial_status: maritalStatus,
      date_of_birth: dob,
      blood_group: bloodGroup,
      contact_number: conatctNumber,
      emergency_contact_number: emergencyCN,
      whatsapp_number: whatsappNumber,
      email: emailPersonal,
      udid: udid,
      pan_no: panNo,
      cu_address_line_one: caddress1,
      cu_address_line_two: caddress2,
      cu_city: ccity,
      cu_country: country,
      cu_state: cstate,
      cu_postalcode: cpostcode,
      P_address_line_one: paddress1,
      P_address_line_two: paddress2,
      P_city: pcity,
      P_country: country,
      P_postalcode: ppostcode,
      P_state: pstate,
      isSameAddress: isSameAddress,
      old_id: old_id
    };

    // console.log(apiData, 'apiData');
    dispatch(createEmployeeAction(apiData));
    setOpen();
  };

  const editEmployee = (values, fileName, requiredids, setOpen, isSameAddress) => {
    // console.log(fileName, 'fileName');
    const {
      // employeeId,
      firstName,
      lastName,
      gender,
      maritalStatus,
      dob,
      bloodGroup,
      conatctNumber,
      emergencyCN,
      whatsappNumber,
      emailPersonal,
      udid,
      panNo,
      caddress1,
      caddress2,
      ccity,
      country,
      cpostcode,
      cstate,
      paddress1,
      paddress2,
      pcity,
      ppostcode,
      pstate,
      old_id
    } = values;
    let apiData = {
      emp_id: requiredids?.emp_edit_id,
      first_name: firstName,
      last_name: lastName,
      profile_image: 'dfgfd',
      role: '2',
      gender: gender,
      martial_status: maritalStatus,
      date_of_birth: dob,
      blood_group: bloodGroup,
      contact_number: conatctNumber,
      emergency_contact_number: emergencyCN,
      whatsapp_number: whatsappNumber,
      email: emailPersonal,
      udid: udid,
      pan_no: panNo,
      currentAddressId: +requiredids?.cureent_add_id ? +requiredids?.cureent_add_id : null,
      cu_address_line_one: caddress1,
      cu_address_line_two: caddress2,
      cu_city: ccity,
      cu_country: country,
      cu_state: cstate,
      cu_postalcode: cpostcode,
      permanentAddressId: +requiredids?.permanent_add_id ? +requiredids?.permanent_add_id : null,
      P_address_line_one: paddress1,
      P_address_line_two: paddress2,
      P_city: pcity,
      P_country: country,
      P_postalcode: ppostcode,
      P_state: pstate,
      isSameAddress: isSameAddress,
      old_id: old_id
    };

    // console.log(apiData, 'apiData');
    dispatch(editEmployeeAction(apiData, requiredids?.emp_edit_id));
    setOpen();
  };
  return { addEmployee, editEmployee };
};

export default useEmployeeHook;
