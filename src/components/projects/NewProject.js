import { Box, FormControl, Grid, IconButton } from '@mui/material';

import { BoxWrap, FormFieldStyle, TextArea } from './style';
import { RedCrossIcon } from '../../theme/SvgIcons';
import PropTypes from 'prop-types';
import CustomSelect from '../form/CustomSelect';
import { Controller, useForm } from 'react-hook-form';
import CustomText from '../form/CustomText';
import CustomTextField from '../form/CustomTextField';
import CustomButton from '../form/CustomButton';
import useProjectHook from '../../hooks/useProjectsHook';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import colors from '../../theme/colors';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ImportantMark } from '../../utils/common_functions';

const fields = [
  { name: 'startDate', inputlabel: 'Start Date', type: 'date' },
  { name: 'endDate', inputlabel: 'End Date', type: 'date' },
  { name: 'projectUrl', inputlabel: 'Project Upwork URL', type: 'text' },
  { name: 'upworkId', inputlabel: 'Upwork Hired ID', type: 'text' },
  { name: 'noOfHours', inputlabel: 'No of Hours', type: 'number' },
  { name: 'budget', inputlabel: 'Project Budget', type: 'number' },
  { name: 'appName', inputlabel: 'App Name', type: 'text' }
];

const schema = yup.object().shape({
  projectName: yup
    .string()
    .required('Project Name is required')
    .min(2, 'Project Name must have at least 2 characters'),
  projectType: yup.string().required('Project Type is required'),
  projectCondition: yup.string().required('Project Condition is required'),
  projectPhase: yup.string().required('Project Type is required'),
  projectPlatform: yup.string().required('Project Plateform is required'),
  startDate: yup.string().required('Project Strat Date is required'),
  endDate: yup.string().required('Project End Date is required')
});
function NewProject(props) {
  const { handleSubmit, control, register } = useForm({
    resolver: yupResolver(schema)
  });
  const { addProject } = useProjectHook();
  // const [isValidUrl, setIsValidUrl] = useState();

  const { drop_down } = useSelector((e) => e.signIn);

  const onSubmit = (data) => {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    // return !!pattern.test(str);
    const isValidUrl = !!pattern.test(data?.projectUrl);

    if (data?.projectUrl && !isValidUrl) {
      toast.error('URL must start with http:// or https://');
    } else if (data?.startDate && data?.endDate && data?.startDate > data?.endDate) {
      toast.error('End date must be greater than the start date');
    } else {
      addProject(data, props.setOpen());
    }
  };

  const textC = (text) => {
    return (
      <CustomText sx={{ mb: '10px', mt: '5px' }} variant={'body_1'}>
        {text}
      </CustomText>
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BoxWrap>
          <CustomButton width="122px" type="submit" variant="submitPrimary">
            Save
          </CustomButton>
          <IconButton onClick={() => props.setOpen()}>
            <RedCrossIcon />
          </IconButton>
        </BoxWrap>
        <Box sx={{ padding: '30px', paddingBottom: '6rem' }}>
          <CustomText variant={'body_2'}> Add Project</CustomText>
          <Grid rowSpacing={1} sx={{ mt: '25px' }} columnSpacing={'20px'} container>
            <Grid sx={{ marginBottom: '22px' }} item xs={6}>
              <FormControl fullWidth>
                <ImportantMark name="Project Name" top="0px" left="99px" />
                <Controller
                  name={'projectName'}
                  control={control}
                  rules={{
                    required: `Project Name is required`
                    // minLength: 2
                  }}
                  render={({ fieldState: { error }, field: { onChange } }) => (
                    <CustomTextField
                      register={{ ...register('projectName') }}
                      label=""
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                      type={'text'}
                      placeholder="Enter"
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid sx={{ marginBottom: '22px' }} item xs={6}>
              <FormControl fullWidth>
                {textC('Client Name')}
                <Controller
                  name={'clientName'}
                  control={control}
                  rules={
                    {
                      // required: `Client Name is required`
                    }
                  }
                  render={({ fieldState: { error }, field: { onChange } }) => (
                    <CustomTextField
                      register={{ ...register('clientName') }}
                      label=""
                      onChange={onChange}
                      error={!!error}
                      type={'text'}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid sx={{ marginBottom: '22px' }} item xs={6}>
              <FormControl fullWidth>
                {/* {textC('Project Type')} */}
                <div style={{ display: 'flex', position: 'relative' }}>
                  {textC('Project Type')}
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
                  name={'projectType'}
                  control={control}
                  rules={{
                    required: `Project  Type is required`
                  }}
                  render={({ fieldState: { error }, field: { onChange, value } }) => (
                    <>
                      <CustomSelect
                        width="100%"
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                        {...register('projectType')}
                        option={drop_down?.project_type}
                        name="projectType"
                        errorText="Project  Type is required"
                        onChange={onChange}
                      />
                    </>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid sx={{ marginBottom: '22px' }} item xs={6}>
              <FormControl fullWidth>
                {/* {textC(' Project Condition')} */}
                <div style={{ display: 'flex', position: 'relative' }}>
                  {textC('Project Condition')}
                  <label
                    style={{
                      position: 'absolute',
                      top: '0px',
                      left: '125px',
                      color: colors.red
                    }}>
                    *
                  </label>
                </div>
                <Controller
                  name={'projectCondition'}
                  control={control}
                  rules={{
                    required: `Project Condition is required`
                  }}
                  render={({ fieldState: { error }, field: { onChange, value } }) => (
                    <>
                      <CustomSelect
                        width="100%"
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                        {...register('projectCondition')}
                        option={drop_down?.project_condition}
                        name="projectCondition"
                        errorText="Project Condition is required"
                        onChange={onChange}
                      />
                    </>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid sx={{ marginBottom: '22px' }} item xs={6}>
              <FormControl fullWidth>
                {/* {textC(' Project Phase')} */}
                <div style={{ display: 'flex', position: 'relative' }}>
                  {textC('Project Phase')}
                  <label
                    style={{
                      position: 'absolute',
                      top: '0px',
                      left: '98px',
                      color: colors.red
                    }}>
                    *
                  </label>
                </div>
                <Controller
                  name={'projectPhase'}
                  control={control}
                  rules={{
                    required: `Project Phase is required`
                  }}
                  render={({ fieldState: { error }, field: { onChange, value } }) => (
                    <>
                      <CustomSelect
                        width="100%"
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                        {...register('projectPhase')}
                        option={drop_down?.project_phase}
                        name="projectPhase"
                        errorText="Project  Phase is required"
                        onChange={onChange}
                      />
                    </>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid sx={{ marginBottom: '22px' }} item xs={6}>
              <FormControl fullWidth>
                <div style={{ display: 'flex', position: 'relative' }}>
                  {textC('Project Platform')}
                  <label
                    style={{
                      position: 'absolute',
                      top: '0px',
                      left: '115px',
                      color: colors.red
                    }}>
                    *
                  </label>
                </div>
                <Controller
                  name={'projectPlatform'}
                  control={control}
                  rules={{
                    required: `Project Platform is required`
                  }}
                  render={({ fieldState: { error }, field: { onChange, value } }) => (
                    <>
                      <CustomSelect
                        width="100%"
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                        {...register('projectPlatform')}
                        option={drop_down?.platform}
                        name="projectPlatform"
                        errorText="Project Platform is required"
                        onChange={onChange}
                      />
                    </>
                  )}
                />
              </FormControl>
            </Grid>
            {fields.map((field, key) => {
              return (
                <Grid key={key} sx={{ marginBottom: '22px' }} item xs={6}>
                  <FormControl fullWidth>
                    {field.type === 'date' ? (
                      <div style={{ display: 'flex', position: 'relative' }}>
                        {textC(field.inputlabel)}
                        <label
                          style={{
                            position: 'absolute',
                            top: '0px',
                            left: '75px',
                            color: colors.red
                          }}>
                          *
                        </label>
                      </div>
                    ) : (
                      <>{textC(field.inputlabel)}</>
                    )}
                    <Controller
                      name={field.name}
                      min={field.type === 'number' ? 0 : undefined}
                      control={control}
                      rules={{
                        required: field.type === 'date' ? field.inputlabel + ' is required' : ''
                        // min: field.type === 'number' ? 0 : undefined
                      }}
                      render={({ fieldState: { error } }) => (
                        <FormFieldStyle
                          hasError={error}
                          {...register(field.name)}
                          label=""
                          error={!!error}
                          type={field.type}
                          helperText={error ? error.message : null}
                          inputProps={{
                            min: field.type === 'number' ? 0 : undefined
                          }}
                          placeholder="Enter"
                          onWheel={(event) => event.target.blur()}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
              );
            })}
            {/* <Grid sx={{ marginBottom: '22px' }} item xs={6}>
              <FormControl fullWidth>
                {textC(' Project Status')}
                <Controller
                  name={'status'}
                  control={control}
                  rules={{
                    required: `Status is required`
                  }}
                  render={({ fieldState: { error }, field: { onChange, value } }) => (
                    <>
                      <CustomSelect
                        width="100%"
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                        {...register('status')}
                        option={drop_down?.project_status}
                        name="status"
                        errorText="status is required"
                        onChange={onChange}
                      />
                    </>
                  )}
                />
              </FormControl>
            </Grid> */}

            <Grid sx={{ marginBottom: '22px' }} item xs={6}>
              <FormControl fullWidth>
                {textC('Sourced Form')}
                <Controller
                  name={'sourced_form'}
                  control={control}
                  rules={
                    {
                      // required: `Sourced Form is required`
                    }
                  }
                  render={({ fieldState: { error }, field: { onChange, value } }) => (
                    <>
                      <CustomSelect
                        width="100%"
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                        {...register('sourced_form')}
                        option={drop_down?.sourced_from}
                        name="sourced_form"
                        errorText="Sourced Form is required"
                        onChange={onChange}
                      />
                    </>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid sx={{ marginBottom: '22px' }} item xs={12}>
              <FormControl fullWidth>
                {textC('Notes')}
                <TextArea {...register('notes')} placeholder="Enter" />
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
}

NewProject.propTypes = {
  setOpen: PropTypes.func
};

export default NewProject;
