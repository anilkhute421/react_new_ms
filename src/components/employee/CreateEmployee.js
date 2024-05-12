import React, { useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Switch,
  Typography
} from '@mui/material';
import colors from '../../theme/colors';
import {
  BoxStyle,
  ButtonStyle,
  CrossBox,
  EmployeeContainer,
  ImageStyle,
  labelStyle
} from './style';
import CustomButton from '../form/CustomButton';
import { RedCrossIcon, UserImage } from '../../theme/SvgIcons';
import { Controller, useForm } from 'react-hook-form';
import CustomTextField from '../form/CustomTextField';
import CustomSelect from '../form/CustomSelect';
// import CustomSwitch from '../form/CustomSwitch';
import { CustomFlex } from '../../utils/common_functions';
import CustomText from '../form/CustomText';
import PropTypes from 'prop-types';
import {
  create_employee_heading,
  create_upload_profile,
  emp_add_one,
  emp_add_two,
  emp_blood_group,
  emp_city,
  emp_contact,
  emp_current_add,
  emp_dob,
  emp_email,
  emp_emergency_no,
  emp_first_name,
  emp_gender,
  emp_id,
  emp_last_name,
  emp_marital_status,
  emp_old_id,
  emp_pan_no,
  emp_pascode,
  emp_permamnent_add,
  emp_state,
  emp_udid,
  emp_use_same_add,
  emp_whatsapp_no,
  save
} from './empText';
import options from '../../utils/allDropDown.json';
import useEmployeeHook from '../../hooks/useEmployeeHook';
import { getEmployeeId } from '../../redux/employee/action';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import moment from 'moment';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const fields = [
  { name: 'conatctNumber', inputlabel: emp_contact, type: 'number', required: true },
  { name: 'emergencyCN', inputlabel: emp_emergency_no, type: 'number', required: false },
  { name: 'whatsappNumber', inputlabel: emp_whatsapp_no, type: 'number', required: true },
  { name: 'emailPersonal', inputlabel: emp_email, type: 'email', required: true },
  { name: 'udid', inputlabel: emp_udid, type: 'text', required: false },
  { name: 'panNo', inputlabel: emp_pan_no, type: 'text', required: false }
];

const addressField = [
  { name: 'caddress1', inputlabel: emp_add_one, type: 'text' },
  { name: 'caddress2', inputlabel: emp_add_two, type: 'text' },
  { name: 'ccity', inputlabel: emp_city, type: 'text' },
  { name: 'cpostcode', inputlabel: emp_pascode, type: 'number' },
  { name: 'cstate', inputlabel: emp_state, type: 'text' }
];

const permanentAdd = [
  { name: 'paddress1', inputlabel: emp_add_one, type: 'text' },
  { name: 'paddress2', inputlabel: emp_add_two, type: 'text' },
  { name: 'pcity', inputlabel: emp_city, type: 'text' },
  { name: 'ppostcode', inputlabel: emp_pascode, type: 'number' },
  { name: 'pstate', inputlabel: emp_state, type: 'text' }
];

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is required')
    .min(2, 'Project Name must have at least 2 characters'),
  lastName: yup
    .string()
    .required('Last Name is required')
    .min(2, 'Last Name must have at least 2 characters'),
  dob: yup.string().required('Date of birth is required'),
  emailPersonal: yup.string().required('Email is required'),
  gender: yup.string().required('Gender Date is required'),
  conatctNumber: yup
    .string()
    .required('Contact number is required')
    // .matches(^[6-9]d{9}$, 'Is not in correct format'),
    .matches(/^[6-9]\d{9}$/, 'Invalid mobile number'),
  whatsappNumber: yup
    .string()
    .required('Whatsapp number is required')
    .matches(/^[6-9]\d{9}$/, 'Invalid mobile number'),
  emergencyCN: yup.string().test('is-valid-number', 'Invalid mobile number', function (value) {
    if (value && value.length > 0) {
      return /^[6-9]\d{9}$/.test(value);
    }
    return true; // Skip the validation if the field is empty
  }),
  ppostcode: yup
    .string()
    .test('is-post-code', 'Post code must have at least 2 characters', function (value) {
      if (value && value.length > 0) {
        // return /^[6-9]\d{9}$/.test(value);
        return value.length >= 2;
      }
      return true; // Skip the validation if the field is empty
    }),
  cpostcode: yup
    .string()
    .test('is-post-code', 'Post code must have at least 2 characters', function (value) {
      if (value && value.length > 0) {
        // return /^[6-9]\d{9}$/.test(value);
        return value.length >= 2;
      }
      return true; // Skip the validation if the field is empty
    })
});

function CreateEmployee(props) {
  // console.log(options, 'selectGenderOption');
  const { handleSubmit, control, register, setValue, watch } = useForm({
    resolver: yupResolver(schema)
  });
  const { addEmployee } = useEmployeeHook();
  const currentDate = new Date().toISOString().split('T')[0];
  // console.log(currentDate, 'currentDate');

  const [showImage, setShowImage] = useState(null);
  const [imageName, setImageName] = useState(false);

  const [isSameAddress, setIsSameAddress] = useState(false);
  const country = watch('country');
  // console.log(country, 'country');

  const handleToggleChange = (event) => {
    // console.log(event, 'event');
    setIsSameAddress(event.target.checked);
    console.log(isSameAddress, 'isSameAddress');
    if (!isSameAddress) {
      setValue('paddress1', watch('caddress1'));
      setValue('paddress2', watch('caddress2'));
      setValue('pcity', watch('ccity'));
      setValue('ppostcode', watch('cpostcode'));
      setValue('pstate', watch('cstate'));
      // setValue('pcountry', watch('country'));
    } else {
      setValue('paddress1', '');
      setValue('paddress2', '');
      setValue('pcity', '');
      setValue('ppostcode', '');
      setValue('pstate', '');
      // setValue('pcountry', '');
      // setValue('permanentCountry', '');
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeId());
  }, []);

  const { employee_id } = useSelector((e) => e.employee);

  const onSubmit = (data, imageName) => {
    // console.log(data, 'sdsdsdsd');
    // console.log(data?.dob, 'fhdfih');
    const dateObj = new Date(data?.dob);

    // Compare the date with the current date
    const currentDate = new Date();
    if (dateObj > currentDate) {
      toast.error('Date of birth cannot be greater than the current date.');
    } else {
      addEmployee(data, imageName, employee_id, props.setOpen(), isSameAddress);
    }
  };

  // console.log(employee_id, 'newsarara');

  const fieldStyle = (text, color) => {
    return (
      <Typography
        sx={{ ...labelStyle(color ? color : `${colors.nero}`, '14px', 500), marginBottom: '10px' }}>
        {text}
      </Typography>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <EmployeeContainer>
          <CustomFlex
            sx={{
              background: colors.white,
              padding: '10px 40px'
            }}>
            <CustomText variant={'body_2'}>{create_employee_heading}</CustomText>
            <Box style={{ display: 'flex' }}>
              <ButtonStyle type="submit" variant="contained">
                {save}
              </ButtonStyle>
              <IconButton onClick={() => props.setOpen()}>
                <RedCrossIcon />
              </IconButton>
            </Box>
          </CustomFlex>

          <Grid container sx={{ p: '13px 36px 24px 24px' }} columnSpacing={5}>
            <Grid item sx={{ mt: '30px', display: 'flex', p: '0px 20px' }} xs={6}>
              {showImage != null ? (
                <CrossBox>
                  <IconButton sx={{ padding: '0px' }} onClick={() => setShowImage(null)}>
                    <RedCrossIcon />
                  </IconButton>
                  <ImageSty
                  le src={showImage} />
                </CrossBox>
              ) : (
                <UserImage />
              )}
              <BoxStyle>
                <CustomButton label="" bg={colors.pink80}>
                  {create_upload_profile}
                  {/* <input
                    onChange={(e) => {
                      e && setShowImage(URL.createObjectURL(e.target.files[0]));
                    }}
                    type="file"
                    name="picture"
                  /> */}
                  <Controller
                    name="picture"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="file"
                        value={''}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          field.onChange(file);
                          setShowImage(URL.createObjectURL(e.target.files[0]));
                          setImageName(file.name);
                          console.log(imageName, 'filename');

                          // const file = e.target.files[0];
                          // setImageName(field.onChange(file));
                          // setShowImage(URL.createObjectURL(e.target.files[0]));
                          // console.log(imageName, 'filename');
                        }}
                        // onChange={handleChangeImage}
                      />
                    )}
                  />
                </CustomButton>
              </BoxStyle>
            </Grid>
            <Grid item sx={{ mt: '30px' }} xs={6}>
              <FormControl fullWidth>
                {/* {fieldStyle(emp_id)} */}
                <div style={{ display: 'flex', position: 'relative' }}>
                  {fieldStyle(emp_id)}
                  <label
                    style={{
                      position: 'absolute',
                      top: '0px',
                      left: '90px',
                      color: colors.red
                    }}>
                    *
                  </label>
                </div>
                <Controller
                  name={'employeeId'}
                  control={control}
                  rules={{
                    required: `Employee Id is required`
                  }}
                  render={({ fieldState: { error }, field: { onChange } }) => (
                    <CustomTextField
                      register={{ ...register('employeeId') }}
                      label=""
                      onChange={onChange}
                      error={!!error}
                      type={'text'}
                      helperText={error ? error.message : null}
                      value={employee_id}
                      // readOnly
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item sx={{ mt: '30px' }} xs={6}>
              <FormControl fullWidth>
                {fieldStyle(emp_old_id)}
                <Controller
                  name={'old_id'}
                  control={control}
                  render={({ fieldState: {}, field: { onChange } }) => (
                    <CustomTextField
                      register={{ ...register('old_id') }}
                      label=""
                      onChange={onChange}
                      // error={!!error}
                      // type={'date'}
                      // helperText={error ? error.message : null}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item sx={{ mt: '30px' }} xs={6}>
              <FormControl fullWidth>
                {/* {fieldStyle(emp_dob)} */}
                <div style={{ display: 'flex', position: 'relative' }}>
                  {fieldStyle(emp_dob)}
                  <label
                    style={{
                      position: 'absolute',
                      top: '0px',
                      left: '90px',
                      color: colors.red
                    }}>
                    *
                  </label>
                </div>
                <Controller
                  name={'dob'}
                  control={control}
                  // max={currentDate}
                  // max={moment().format(currentDate)}
                  rules={{
                    required: `Date of Birth is required`
                  }}
                  render={({ fieldState: { error }, field: { onChange } }) => (
                    <CustomTextField
                      register={{ ...register('dob') }}
                      label=""
                      onChange={onChange}
                      error={!!error}
                      type={'date'}
                      helperText={error ? error.message : null}
                      inputProps={moment().format(currentDate)}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item sx={{ mt: '30px' }} xs={6}>
              <FormControl fullWidth>
                {/* {fieldStyle(emp_first_name)} */}
                <div style={{ display: 'flex', position: 'relative' }}>
                  {fieldStyle(emp_first_name)}
                  <label
                    style={{
                      position: 'absolute',
                      top: '0px',
                      left: '80px',
                      color: colors.red
                    }}>
                    *
                  </label>
                </div>
                <Controller
                  name={'firstName'}
                  control={control}
                  rules={{
                    required: `First Name is required`
                  }}
                  render={({ fieldState: { error }, field: { onChange } }) => (
                    <CustomTextField
                      register={{ ...register('firstName') }}
                      label=""
                      onChange={onChange}
                      error={!!error}
                      // type={'date'}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item sx={{ mt: '30px' }} xs={6}>
              <FormControl fullWidth>
                {/* {fieldStyle(emp_last_name)} */}
                <div style={{ display: 'flex', position: 'relative' }}>
                  {fieldStyle(emp_last_name)}
                  <label
                    style={{
                      position: 'absolute',
                      top: '0px',
                      left: '80px',
                      color: colors.red
                    }}>
                    *
                  </label>
                </div>
                <Controller
                  name={'lastName'}
                  control={control}
                  rules={{
                    required: `Last Name is required`
                  }}
                  render={({ fieldState: { error }, field: { onChange } }) => (
                    <CustomTextField
                      register={{ ...register('lastName') }}
                      label=""
                      onChange={onChange}
                      error={!!error}
                      // type={'date'}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item sx={{ mt: '30px' }} xs={4}>
              <FormControl fullWidth>
                {/* {fieldStyle(emp_gender)} */}
                <div style={{ display: 'flex', position: 'relative' }}>
                  {fieldStyle(emp_gender)}
                  <label
                    style={{
                      position: 'absolute',
                      top: '0px',
                      left: '55px',
                      color: colors.red
                    }}>
                    *
                  </label>
                </div>
                <Controller
                  name={'gender'}
                  control={control}
                  rules={{
                    required: `Gender is required`
                  }}
                  render={({ fieldState: { error }, field: { onChange, value } }) => (
                    <>
                      <CustomSelect
                        width="100%"
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                        {...register('gender')}
                        option={options?.selectGenderOption}
                        name="gender"
                        errorText="Gender is required"
                        onChange={onChange}
                      />
                    </>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item sx={{ mt: '30px' }} xs={4}>
              <FormControl fullWidth>
                {fieldStyle(emp_blood_group)}
                <Controller
                  name={'bloodGroup'}
                  control={control}
                  rules={
                    {
                      // required: `Blood Group is required`
                    }
                  }
                  render={({ fieldState: { error }, field: { onChange, value } }) => (
                    <>
                      <CustomSelect
                        width="100%"
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                        {...register('bloodGroup')}
                        option={options?.bloodGroupOption}
                        name="bloodGroup"
                        errorText="Blood Group is required`"
                        onChange={onChange}
                      />
                    </>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item sx={{ mt: '30px' }} xs={4}>
              <FormControl fullWidth>
                {fieldStyle(emp_marital_status)}
                <Controller
                  name={'maritalStatus'}
                  control={control}
                  rules={
                    {
                      // required: `Marital Status is required`
                    }
                  }
                  render={({ fieldState: { error }, field: { onChange, value } }) => (
                    <>
                      <CustomSelect
                        width="100%"
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                        {...register('maritalStatus')}
                        option={options?.maritalStatusOption}
                        name="maritalStatus"
                        errorText="Marital Status is required"
                        onChange={onChange}
                      />
                    </>
                  )}
                />
              </FormControl>
            </Grid>
            {fields.map((field, key) => {
              return (
                <Grid key={key} sx={{ mt: '30px' }} item xs={6}>
                  <FormControl fullWidth>
                    {/* {fieldStyle(field.inputlabel)} */}
                    {field.required === true ? (
                      <div style={{ display: 'flex', position: 'relative' }}>
                        {fieldStyle(field.inputlabel)}
                        <label
                          style={{
                            position: 'absolute',
                            top: '0px',
                            left: `${
                              field?.name === 'conatctNumber'
                                ? '123px'
                                : field?.name === 'whatsappNumber'
                                ? '140px'
                                : field?.name === 'emailPersonal'
                                ? '130px'
                                : ''
                            }`,
                            color: colors.red
                          }}>
                          *
                        </label>
                      </div>
                    ) : (
                      <>{fieldStyle(field.inputlabel)}</>
                    )}
                    <Controller
                      name={field.name}
                      control={control}
                      rules={{
                        // required: `${field.inputlabel} is required`
                        required: field.required === true ? field.inputlabel + ' is required' : ''
                      }}
                      render={({ fieldState: { error }, field: { onChange } }) => (
                        <CustomTextField
                          register={{ ...register(field.name) }}
                          label=""
                          onChange={onChange}
                          error={!!error}
                          type={field.type}
                          helperText={error ? error.message : null}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
              );
            })}
            <Grid sx={{ mt: '30px' }} item xs={12} md={12}>
              {fieldStyle(emp_current_add, colors.darkSkyBlue)}
            </Grid>
            {addressField.map((field, key) => {
              return (
                <Grid key={key} sx={{ mb: '30px' }} item xs={6}>
                  <FormControl fullWidth>
                    {fieldStyle(field.inputlabel)}
                    <Controller
                      name={field.name}
                      control={control}
                      rules={
                        {
                          // required: `${field.inputlabel} is required`
                        }
                      }
                      render={({ fieldState: { error }, field: { onChange } }) => (
                        <CustomTextField
                          register={{ ...register(field.name) }}
                          label=""
                          onChange={onChange}
                          error={!!error}
                          type={field.type}
                          helperText={error ? error.message : null}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
              );
            })}
            <Grid item sx={{ mb: '30px' }} xs={6}>
              <FormControl fullWidth>
                {fieldStyle('Country')}
                <Controller
                  name={'country'}
                  control={control}
                  rules={
                    {
                      // required: `Country is required`
                    }
                  }
                  render={({ fieldState: { error }, field: { onChange, value } }) => (
                    <>
                      <CustomSelect
                        width="100%"
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                        {...register('country')}
                        option={options?.countryOption}
                        name="country"
                        errorText="country is required`"
                        onChange={onChange}
                      />
                    </>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid sx={{ display: 'flex', alignItems: 'center' }} item xs={12} md={12}>
              <Typography sx={labelStyle(colors.darkSkyBlue, '16px', 500)}>
                {emp_permamnent_add}
              </Typography>
              <Typography sx={{ ...labelStyle(colors.blackDark, '12px', 400), ml: '20px' }}>
                {emp_use_same_add}
                {/* <CustomSwitch
                  sx={{
                    ml: '8px',
                    '& .MuiSwitch-track': {
                      background: colors.Gray94,
                      border: `0px`
                    },
                    '& .MuiSwitch-thumb': {
                      background: colors.gray95,
                      marginLeft: '-2px',
                      boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)'
                    }
                  }}
                  id="toggleAddress"
                  checked={sameAddress}
                  onChange={handleToggleChange}
                /> */}
                {/* <div style={{ marginLeft: '5px' }}> */}
                <FormControlLabel
                  style={{ marginLeft: '5px' }}
                  control={<Switch checked={isSameAddress} onChange={handleToggleChange} />}
                  // label="Permanent Address same as Current Address"
                />
                {/* </div> */}
              </Typography>
            </Grid>
            {permanentAdd.map((field, key) => {
              return (
                <Grid key={key} sx={{ mb: '30px' }} item xs={6}>
                  <FormControl fullWidth>
                    {fieldStyle(field.inputlabel)}
                    <Controller
                      name={field.name}
                      control={control}
                      rules={
                        {
                          // required: `${field.inputlabel} is required`
                        }
                      }
                      render={({ fieldState: { error }, field: { onChange } }) => (
                        <CustomTextField
                          register={{ ...register(field.name) }}
                          label=""
                          onChange={onChange}
                          error={!!error}
                          type={field.type}
                          helperText={error ? error.message : null}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
              );
            })}
            <Grid item sx={{ mb: '30px' }} xs={6}>
              <FormControl fullWidth>
                {fieldStyle('Country')}
                <Controller
                  name={'pcountry'}
                  control={control}
                  rules={
                    {
                      // required: `Country is required`isSameAddress
                    }
                  }
                  defaultValue={isSameAddress ? country : ''}
                  render={({ fieldState: { error }, field: { onChange, value } }) => (
                    <>
                      <CustomSelect
                        width="100%"
                        value={isSameAddress ? country : value}
                        error={!!error}
                        // defaultValue={!isSameAddress ? country : ''}
                        helperText={error ? error.message : null}
                        {...register('pcountry')}
                        option={options?.countryOption}
                        name="pcountry"
                        errorText="pcountry is required`"
                        onChange={onChange}
                      />
                    </>
                  )}
                />
              </FormControl>
            </Grid>
          </Grid>
        </EmployeeContainer>
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: '4rem' }}>
        <CustomButton label="Cancel" bg={colors.white} color={colors.grayLight} />
        <Box sx={{ ml: '10px' }}>
          <CustomButton label="Add Employee" bg={colors.darkSkyBlue} />
        </Box>
      </Box> */}
      </Box>
    </form>
  );
}

CreateEmployee.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.boolean
};

export default CreateEmployee;
