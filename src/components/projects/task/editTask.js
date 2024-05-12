import { Box, Card, FormControl, Grid, IconButton } from '@mui/material';
// import { useState } from 'react';
// import { BoxWrap, CustomArea, labelStyle } from '../style';
import { RedCrossIcon } from '../../../theme/SvgIcons';
import colors from '../../../theme/colors';
import { Controller, useForm } from 'react-hook-form';
// import MultiSelect from '../../form/MultiSelect';
// import { AddIconButton, CardActionsStyle, GridItem } from './style';
// import { Link } from 'react-router-dom';
// import FileUpload from '../../form/FileUpload';
import CustomText from '../../form/CustomText';
// import CustomButton from '../../form/CustomButton';
import CustomTextField from '../../form/CustomTextField';
// import { CustomFlexBox } from '../../../utils/common_functions';
import PropTypes from 'prop-types';
import { BoxWrap, CustomArea } from '../style';
import { GridItem } from '../milestone/style';
import { ButtonStyle } from '../../employee/style';
// import CustomSelect from '../../form/CustomSelect';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { editTaskAction, getEmployeeDropDownAction } from '../../../redux/project/action';
import { useLocation } from 'react-router-dom';
import CustomSelect from '../../form/CustomSelect';
import { useEffect } from 'react';

// const avatar = () => {
//   return (
//     <Avatar
//       sx={{ width: '24px ', height: '24px' }}
//       alt="Remy Sharp"
//       src="https://material-ui.com/static/images/avatar/1.jpg"
//     />
//   );
// };
// const top100Films = [
//   {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     comp: avatar()
//   },
//   {
//     title: 'The Godfather',
//     year: 1972,
//     comp: avatar()
//   },
//   {
//     title: 'The Godfather: Part II',
//     year: 1974,
//     comp: avatar()
//   },
//   {
//     title: 'The Dark Knight',
//     year: 2008,
//     comp: avatar()
//   },
//   {
//     title: '12 Angry Men',
//     year: 1957,
//     comp: avatar()
//   },
//   {
//     title: "Schindler's List",
//     year: 1993,
//     comp: avatar()
//   },
//   {
//     title: 'Pulp Fiction',
//     year: 1994,
//     comp: avatar()
//   },
//   {
//     title: 'The Lord of the Rings: The Return of the King',
//     year: 2003,
//     comp: avatar()
//   },
//   {
//     title: 'The Good, the Bad and the Ugly',
//     year: 1966,
//     comp: avatar()
//   },
//   {
//     title: 'Fight Club',
//     year: 1999,
//     comp: avatar()
//   },
//   {
//     title: 'The Lord of the Rings: The Fellowship of the Ring',
//     year: 2001,
//     comp: avatar()
//   },
//   {
//     title: 'Star Wars: Episode V - The Empire Strikes Back',
//     year: 1980,
//     comp: avatar()
//   },
//   {
//     title: 'Forrest Gump',
//     year: 1994,
//     comp: avatar()
//   },
//   {
//     title: 'Inception',
//     year: 2010,
//     comp: avatar()
//   }
// ];

const schema = yup.object().shape({
  task_title: yup
    .string()
    .required('Title is required')
    .min(2, 'Title must have at least 2 characters'),
  description: yup.string().optional(),
  // Priority_Label: yup.string().optional(),
  start_date: yup.string().required('Strat Date is required'),
  end_date: yup.string().required('End Date is required')
});

const EditTask = (props) => {
  const { setOpen, listing_id, task_view } = props;
  const { drop_down } = useSelector((state) => state?.signIn);
  const { project_view } = useSelector((state) => state.project);
  // const { task_view } = useSelector((state) => state.project);
  const { employee_drop_down_list } = useSelector((state) => state?.project);
  // const [proirity, setPriority] = useState('');

  console.log(task_view, 'task_view');

  // console.log(drop_down, 'drop_down');

  const { handleSubmit, control, register, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      Priority_Label: task_view?.Priority_Label,
      status: task_view?.status,
      assigned_to: task_view?.assigned_to,
      description: task_view?.description
    }
  });

  const dispatch = useDispatch();
  const project_id = useLocation().state?.project_id;

  const onSubmit = (data) => {
    // console.log(data, 'editatsk');
    if (data?.start_date && data?.end_date && data?.start_date > data?.end_date) {
      toast.error('End date must be greater than the start date');
    } else {
      dispatch(editTaskAction(data, listing_id, project_id));
      setOpen(false);
    }
    // console.log(data, 'chnage_req');
  };

  useEffect(() => {
    // dispatch(viewTaskAction(listing_id));
    dispatch(getEmployeeDropDownAction());
  }, []);

  const commonText = (text) => {
    return (
      <CustomText sx={{ marginBottom: '10px' }} variant={'body_1'}>
        {text}
      </CustomText>
    );
  };

  useEffect(() => {
    setValue('task_title', task_view?.task_title);
    setValue('start_date', task_view?.start_date);
    setValue('end_date', task_view?.end_date);
    setValue('Priority_Label', task_view.Priority_Label);
    setValue('assigned_to', task_view?.assigned_to);
    setValue('status', task_view?.status);
    setValue('description', task_view?.description);
  }, [
    task_view?.Priority_Label,
    task_view?.assigned_to,
    task_view?.status,
    task_view?.description
  ]);

  // useEffect(() => {
  //   setPriority(task_view?.Priority_Label);
  // }, [task_view?.Priority_Label]);

  console.log('task_view', task_view);

  return (
    <Card sx={{ overflowY: 'scroll' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BoxWrap spaceBetween="space-between">
          <CustomText sx={{ pl: '20px' }} variant={'body_2'}>
            {project_view?.name}
          </CustomText>
          <Box style={{ display: 'flex' }}>
            <ButtonStyle type="submit" variant="contained">
              Save
            </ButtonStyle>
            <IconButton onClick={() => setOpen(false)}>
              <RedCrossIcon />
            </IconButton>
          </Box>
        </BoxWrap>
        <Grid sx={{ padding: '30px' }} rowSpacing={1} columnSpacing={'20px'} container>
          <Box sx={{ padding: '20px' }}>
            <CustomText variant="body_2">Task</CustomText>
          </Box>

          <GridItem item xs={12}>
            <FormControl fullWidth>
              {commonText('Title')}
              <Controller
                name={'task_title'}
                control={control}
                rules={{
                  required: `Title is required`
                }}
                render={({ fieldState: { error }, field: { onChange } }) => (
                  <CustomTextField
                    register={{ ...register('task_title') }}
                    label=""
                    type={'text'}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    placeholder={'Enter'}
                  />
                )}
              />
            </FormControl>
          </GridItem>

          <GridItem item xs={6}>
            <FormControl fullWidth>
              {commonText('Start Date')}
              <Controller
                name={'start_date'}
                control={control}
                rules={{
                  required: `Start Date is required`
                }}
                render={({ fieldState: { error }, field: { onChange } }) => (
                  <CustomTextField
                    register={{ ...register('start_date') }}
                    label=""
                    name="start_date"
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    sx={{ width: '100%' }}
                    placeholder="select"
                    type="date"
                  />
                )}
              />
            </FormControl>
          </GridItem>
          <GridItem item xs={6}>
            <FormControl fullWidth>
              {commonText('End Date')}
              <Controller
                name={'end_date'}
                control={control}
                rules={{
                  required: `End Date is required`
                }}
                render={({ fieldState: { error }, field: { onChange } }) => (
                  <CustomTextField
                    register={{ ...register('end_date') }}
                    label=""
                    name="end_date"
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    placeholder="select"
                    type="date"
                  />
                )}
              />
            </FormControl>
          </GridItem>

          <GridItem item xs={4}>
            <FormControl fullWidth>
              {commonText('Priority Label')}
              <Controller
                name={'Priority_Label'}
                control={control}
                // rules={{
                //   required: `Priority  Label is required`
                // }}
                render={({ fieldState: { error }, field: { onChange, value } }) => (
                  <CustomSelect
                    width="100%"
                    height="47px"
                    defaultValue={task_view?.Priority_Label}
                    value={value}
                    error={!!error}
                    helperText={error ? error.message : null}
                    sx={{
                      '& fieldset': {
                        border: `1px solid ${colors.Gray90}`
                      }
                    }}
                    {...register('Priority_Label')}
                    option={drop_down?.milestone_priority}
                    name="Priority_Label"
                    onChange={onChange}
                    errorText={'Priority Label is required'}
                  />
                )}
              />
            </FormControl>
          </GridItem>

          <GridItem item xs={4}>
            <FormControl fullWidth>
              {commonText('Status')}
              <Controller
                name={'status'}
                control={control}
                rules={{
                  required: `Priority  Label is required`
                }}
                render={({ fieldState: { error }, field: { onChange, value } }) => (
                  <CustomSelect
                    width="100%"
                    height="47px"
                    value={value}
                    error={!!error}
                    helperText={error ? error.message : null}
                    sx={{
                      '& fieldset': {
                        border: `1px solid ${colors.Gray90}`
                      }
                    }}
                    {...register('status')}
                    option={drop_down?.milestone_status}
                    name="status"
                    onChange={onChange}
                    errorText={'Priority Label is required'}
                    defaultValue={task_view?.status}
                  />
                )}
              />
            </FormControl>
          </GridItem>

          <GridItem item xs={4}>
            <FormControl fullWidth>
              {commonText('Assign To')}
              <Controller
                name={'assigned_to'}
                control={control}
                rules={{
                  required: `Priority  Label is required`
                }}
                render={({ fieldState: { error }, field: { onChange, value } }) => (
                  <CustomSelect
                    width="100%"
                    height="47px"
                    value={value}
                    error={!!error}
                    helperText={error ? error.message : null}
                    sx={{
                      '& fieldset': {
                        border: `1px solid ${colors.Gray90}`
                      }
                    }}
                    {...register('assigned_to')}
                    option={employee_drop_down_list}
                    name="assigned_to"
                    onChange={onChange}
                    errorText={'Priority Label is required'}
                    defaultValue={task_view?.assigned_to}
                  />
                )}
              />
            </FormControl>
          </GridItem>

          <GridItem item xs={12}>
            <FormControl fullWidth>
              <Controller
                name={'description'}
                control={control}
                // rules={{
                //   required: `Title is required`
                // }}
                render={({ fieldState: { error }, field: { onChange } }) => (
                  <>
                    <Box sx={{ mt: '2px', position: 'relative' }}>{commonText('Description')}</Box>
                    <CustomArea
                      {...register('description')}
                      label=""
                      onChange={onChange}></CustomArea>
                    {error && (
                      <p style={{ color: '#d32f2f', fontSize: '0.75rem' }}>{error?.message}</p>
                    )}
                  </>
                )}
              />
            </FormControl>
          </GridItem>
        </Grid>
      </form>
    </Card>
  );
};

EditTask.propTypes = {
  setOpen: PropTypes.func,
  listing_id: PropTypes.string,
  task_view: PropTypes.object
};
export default EditTask;
