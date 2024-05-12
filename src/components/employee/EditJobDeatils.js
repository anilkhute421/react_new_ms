import { Box, FormControl, Grid, IconButton, Typography } from '@mui/material';

import { BoxWrap, ButtonStyle, FormFieldStyle, labelStyle } from './style';
import { RedCrossIcon } from '../../theme/SvgIcons';
import colors from '../../theme/colors';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import CustomSelect from '../form/CustomSelect';
import CheckBox from '../form/CheckBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getEmployeeDropDownAction } from '../../redux/project/action';
import { createEmployeeJobAction } from '../../redux/employee/action';

const style = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '16px',
  marginBottom: '10px',
  color: colors.nero
};

// const Department = [
//   { value: 'Management', label: 'Management' },
//   { value: 'Business', label: 'Business' },
//   { value: 'HRM', label: 'HRM' },
//   { value: 'ProjectManagement', label: 'Project Management' },
//   { value: 'Mobility', label: 'Mobility' },
//   { value: 'Web', label: 'Web' },
//   { value: 'Backend', label: 'Backend' },
//   { value: 'Quality', label: 'Quality' },
//   { value: 'Admin', label: 'Admin' },
//   { value: 'Accounting', label: 'Accounting' },
//   { value: 'Training', label: 'Training' },
//   { value: 'Hospitality', label: 'Hospitality' }
// ];

// const Designation = [
//   { value: 'Management', label: 'Management' },
//   { value: 'Business', label: 'Business' },
//   { value: 'HRM', label: 'HRM' },
//   { value: 'ProjectManagement', label: 'Project Management' },
//   { value: 'Mobility', label: 'Mobility' },
//   { value: 'Web', label: 'Web' },
//   { value: 'Backend', label: 'Backend' },
//   { value: 'Quality', label: 'Quality' },
//   { value: 'Admin', label: 'Admin' },
//   { value: 'Accounting', label: 'Accounting' },
//   { value: 'Training', label: 'Training' },
//   { value: 'Hospitality', label: 'Hospitality' }
// ];

function EditJobDetails(props) {
  const {} = props || {};
  const { handleSubmit, control, register, setValue } = useForm();
  const { employee_view } = useSelector((state) => state?.employee);
  const { employee_drop_down_list } = useSelector((state) => state?.project);

  const { drop_down } = useSelector((state) => state?.signIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeDropDownAction());
  }, []);
  console.log(drop_down, 'fdsfdsfdsf', 'department');

  console.log(employee_view, 'employee_viewddasdsad');

  const onSubmit = (data) => {
    console.log(data, 'datakjiih');
    dispatch(createEmployeeJobAction(data, employee_view?.id));
    props.open();
  };

  useEffect(() => {
    setValue('date_of_joinig', employee_view?.job_details?.date_of_joinig);
    setValue('date_of_leaving', employee_view?.job_details?.date_of_leaving);
    setValue('designation', employee_view?.job_details?.designation);
    setValue('department', employee_view?.job_details?.department);
    setValue('job_status', employee_view?.job_details?.job_status);
    setValue('Reporting_manager', employee_view?.job_details?.Reporting_manager);
  }, [employee_view, setValue]);
  const fields = [
    {
      name: 'date_of_joinig',
      inputlabel: 'Date of Joining',
      type: 'date',
      gridwith: '6'
    },
    { name: 'date_of_leaving', type: 'date', inputlabel: 'Re-leaving Date ', gridwith: '6' },
    {
      name: 'designation',
      inputlabel: 'Designation',
      type: 'select',
      gridwith: '6',
      option: drop_down?.designation,
      default: employee_view?.job_details?.designation
    },
    {
      name: 'department',
      inputlabel: 'Department',
      type: 'select',
      gridwith: '6',
      option: drop_down?.department,
      default: employee_view?.job_details?.department
    },
    {
      name: 'job_status',
      inputlabel: 'Job Status',
      type: 'select',
      gridwith: '6',
      option: [
        { key: '1', value: 'Active' },
        { key: '1', value: 'Left' },
        { key: '1', value: 'Terminated' },
        { key: '1', value: 'Resigned' }
      ],
      default: employee_view?.job_details?.job_status
    },
    {
      name: 'Reporting_manager',
      inputlabel: 'Reporting Manager',
      type: 'select',
      gridwith: '6',
      option: employee_drop_down_list,
      default: employee_view?.job_details?.Reporting_manager
    }
  ];

  console.log(
    employee_view?.job_details?.designation,
    employee_view?.job_details?.department,
    'hjjh'
  );
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BoxWrap spaceBetween="space-between">
          <div style={{ padding: '0px 25px' }}>
            <Typography sx={{ ...labelStyle(colors.black, '22px', 700) }}>Job Details </Typography>
          </div>
          <Box>
            <ButtonStyle type="submit" variant="contained">
              Save
            </ButtonStyle>
            <IconButton onClick={() => props.open()}>
              <RedCrossIcon />
            </IconButton>
          </Box>
        </BoxWrap>
        <Box sx={{ padding: '30px', paddingBottom: '6rem' }}>
          <Grid rowSpacing={1} columnSpacing={'20px'} container>
            {fields.map((field, key) => {
              return (
                <Grid key={key} sx={{ marginBottom: '22px' }} item xs={field.gridwith}>
                  <FormControl fullWidth>
                    {key === 1 || key === 5 ? (
                      <CheckBox name={field.inputlabel} />
                    ) : (
                      <Typography sx={style}>{field.inputlabel}</Typography>
                    )}

                    {field.type === 'select' ? (
                      <Controller
                        name={field.name}
                        control={control}
                        rules={{
                          required: `${field.inputlabel} is required`
                        }}
                        render={({ fieldState: { error }, field: { onChange, value } }) => (
                          <>
                            <CustomSelect
                              width="100%"
                              value={value}
                              error={!!error}
                              helperText={error ? error.message : null}
                              {...register(field.name)}
                              option={field.option}
                              name={field.name}
                              errorText="Blood Group is required`"
                              onChange={onChange}
                              defaultValue={field?.default}
                            />
                          </>
                        )}
                      />
                    ) : (
                      <Controller
                        name={field.name}
                        control={control}
                        rules={{
                          required: `${field.inputlabel} is required`
                        }}
                        render={({ fieldState: { error } }) => (
                          <FormFieldStyle
                            hasError={error}
                            {...register(field.name)}
                            label=""
                            error={!!error}
                            type={field.type === 'date' ? 'date' : 'text'}
                            helperText={error ? error.message : null}
                          />
                        )}
                      />
                    )}
                  </FormControl>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </form>
    </>
  );
}

EditJobDetails.propTypes = {
  open: PropTypes.func
};

export default EditJobDetails;
