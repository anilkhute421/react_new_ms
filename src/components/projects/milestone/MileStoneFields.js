import { Box, Card, FormControl, Grid, IconButton, Typography } from '@mui/material';
// import { useState } from 'react';
import { BoxWrap, CustomArea, labelStyle } from '../style';
import { Plusicon, RedCrossIcon } from '../../../theme/SvgIcons';
import colors from '../../../theme/colors';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import MultiSelect from '../../form/MultiSelect';
import CustomSelect from '../../form/CustomSelect';
import { AddIconButton, CardActionsStyle, GridItem } from './style';
// import { Link } from 'react-router-dom';
import FileUpload from '../../form/FileUpload';
import CustomText from '../../form/CustomText';
// import CustomButton from '../../form/CustomButton';
import CustomTextField from '../../form/CustomTextField';
// import { CustomFlexBox } from '../../../utils/common_functions';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect } from 'react';
import {
  createMilestoneAction,
  getAssigneeAction
  // getEmployeeDropDownAction
} from '../../../redux/project/action';
import { useLocation } from 'react-router-dom';
import { ButtonStyle } from '../../employee/style';
import { toast } from 'react-toastify';
import { ImportantMark } from '../../../utils/common_functions';
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
  title: yup
    .string()
    .required('Title is required')
    .min(2, 'Title Name must have at least 2 characters'),
  milestone_detail: yup.string().required('Milestone is required'),
  priorityLabel: yup.string().required('Priority Label  is required'),
  startDate: yup.string().required('Strat Date is required'),
  endDate: yup.string().required('End Date is required'),
  assignee: yup.array().min(1, 'Please select at least one option'),
  links: yup.array().of(
    yup.object().shape({
      link_title: yup.string(),
      link_url: yup
        .string()
        .test('is-valid-number', 'URL must start with http:// or https://', function (value) {
          if (value && value.length > 0) {
            return /^(https?:\/\/)?(((\w+([-\w+]*\w+)+)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-\w\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-\w\d_]*)?$/.test(
              value
            );
          }
          return true; // Skip the validation if the field is empty
        })
    })
  )
});

const MileStoneFields = (props) => {
  const { setOpen } = props;
  const dispatch = useDispatch();
  const { handleSubmit, control, register } = useForm({
    resolver: yupResolver(schema),

    defaultValues: {
      links: [{ link_title: '', link_url: '' }]
    }
  });

  const {
    fields: LinkFields,
    append: UrlAppend,
    remove: UrlRemove
  } = useFieldArray({ control, name: 'links' });

  const handleAddField = () => {
    UrlAppend({ link_title: '', link_url: '' });
  };

  const { drop_down } = useSelector((e) => e.signIn);
  const { project_view } = useSelector((state) => state.project);

  // console.log(drop_down, 'milestone');

  const manupilcateData = (payload) => {
    let object = {
      name: payload?.title,
      milestone_detail: payload?.milestone_detail,
      assignee: payload?.assignee?.map((el) => ({ assignee_id: el?.key })),
      priority: payload?.priorityLabel,
      start_date: payload?.startDate,
      due_date: payload?.endDate,
      links: payload?.links
    };
    return object;
  };

  const id = useLocation()?.state?.project_id;

  const onSubmit = (data) => {
    let result = manupilcateData(data);
    console.log(result, 'result');
    if (result?.start_date && result?.due_date && result?.start_date > result?.due_date) {
      toast.error('End date must be greater than the start date');
    } else {
      dispatch(createMilestoneAction(result, id));
      setOpen(false);
    }
  };

  useEffect(() => {
    dispatch(getAssigneeAction(id));
  }, []);

  const { assignee_list } = useSelector((state) => state.project);
  // console.log(assignee_list, 'assignee_list');

  const commonText = (text) => {
    return (
      <CustomText sx={{ marginBottom: '10px' }} variant={'body_1'}>
        {text}
      </CustomText>
    );
  };

  return (
    <Card sx={{ overflowY: 'scroll' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BoxWrap spaceBetween="space-between">
          <CustomText sx={{ pl: '20px' }} variant={'body_2'}>
            {project_view?.name}
          </CustomText>
          {/* <Box>
            <CustomButton width="122px" type="submit" variant="submitPrimary">
              Save
            </CustomButton>
            <IconButton onClick={() => setOpen(false)}>
              <RedCrossIcon />
            </IconButton>
          </Box> */}
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
            <CustomText variant="body_2">Create New Milestone</CustomText>
          </Box>
          <GridItem item xs={12}>
            <FormControl fullWidth>
              {/* {commonText('Title')} */}
              <ImportantMark name={'Title'} left="33px" />
              <Controller
                name={'title'}
                control={control}
                rules={{
                  required: `Title is required`
                }}
                render={({ fieldState: { error }, field: { onChange } }) => (
                  <CustomTextField
                    register={{ ...register('title') }}
                    label=""
                    type={'text'}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    placeholder={'Milestone Name'}
                  />
                )}
              />
            </FormControl>
          </GridItem>
          <GridItem item xs={12}>
            {/* <FormControl fullWidth>
              {commonText('Milestone Details / Tasks')}
              <CustomArea
                {...register('milestone_detail')}
                placeholder="Enter details or tasks here "></CustomArea>
              {error && <p style={{ color: 'red' }}>{error?.message}</p>}
            </FormControl> */}
            <FormControl fullWidth>
              {/* {commonText('Milestone Details / Tasks')} */}
              <ImportantMark name={'Milestone Details / Tasks'} left="180px" />

              <Controller
                name={'milestone_detail'}
                control={control}
                // rules={{
                //   required: `Title is required`
                // }}
                render={({ fieldState: { error }, field: { onChange } }) => (
                  // <CustomTextField
                  //   register={{ ...register('title') }}
                  //   label=""
                  //   type={'text'}
                  //   onChange={onChange}
                  //   error={!!error}
                  //   helperText={error ? error.message : null}
                  // />
                  <>
                    <Box sx={{ mt: '2px', position: 'relative' }}>
                      <Typography
                        sx={{
                          ...labelStyle(colors.grayLight, '14px', 400),
                          position: 'absolute',
                          m: '10px'
                        }}>
                        Enter details or tasks here
                      </Typography>
                      {/* <CustomArea value={project_view?.notes} /> */}
                    </Box>
                    <CustomArea
                      {...register('milestone_detail')}
                      // placeholder="Enter details or tasks here "
                      label=""
                      // type={'text'}
                      // placeholder={'Milestone Name'}
                      onChange={onChange}></CustomArea>
                    {error && (
                      <p style={{ color: '#d32f2f', fontSize: '0.75rem' }}>{error?.message}</p>
                    )}
                  </>
                )}
              />
            </FormControl>
          </GridItem>
          <GridItem item xs={12}>
            <FormControl fullWidth>
              <ImportantMark name={'Assignee'} left="68px" />
              <Controller
                name={'assignee'}
                control={control}
                rules={{
                  required: `Assignee is required`
                }}
                render={({ fieldState: { error }, field: { onChange } }) => (
                  <MultiSelect
                    name="assignee"
                    options={assignee_list}
                    onChange={onChange}
                    error={!!error}
                    errorText={'Please select at least one Assignee'}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </FormControl>
          </GridItem>
          <GridItem item xs={4}>
            <FormControl fullWidth>
              <ImportantMark name={'Priority Label'} left="95px" />
              <Controller
                name={'priorityLabel'}
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
                    {...register('priorityLabel')}
                    option={drop_down?.milestone_priority}
                    name="priorityLabel"
                    onChange={onChange}
                    errorText={'Priority Label is required'}
                  />
                )}
              />
            </FormControl>
          </GridItem>
          <GridItem item xs={4}>
            <FormControl fullWidth>
              <ImportantMark name={'Start Date'} left="75px" />
              <Controller
                name={'startDate'}
                control={control}
                rules={{
                  required: `Start Date is required`
                }}
                render={({ fieldState: { error }, field: { onChange } }) => (
                  <CustomTextField
                    register={{ ...register('startDate') }}
                    label=""
                    name="startDate"
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
          <GridItem item xs={4}>
            <FormControl fullWidth>
              <ImportantMark name={'Due Date'} left="70px" />
              <Controller
                name={'endDate'}
                control={control}
                rules={{
                  required: `End Date is required`
                }}
                render={({ fieldState: { error }, field: { onChange } }) => (
                  <CustomTextField
                    register={{ ...register('endDate') }}
                    label=""
                    name="endDate"
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
          <GridItem sx={{ height: '20px' }} item xs={12}>
            {commonText('Link')}
          </GridItem>
          {LinkFields.map((item, index) => (
            <>
              <GridItem item xs={3}>
                <CustomText variant={'title_2'}>Link Title</CustomText>
                <FormControl fullWidth>
                  <Controller
                    name={`links.${index}.link_title`}
                    control={control}
                    rules={{
                      required: `Title is required`
                    }}
                    render={({ fieldState: { error }, field: { onChange, value } }) => (
                      <>
                        <CustomSelect
                          sx={{
                            '& fieldset': {
                              border: `1px solid ${colors.Gray90}`
                            }
                          }}
                          width="100%"
                          value={value}
                          error={!!error}
                          helperText={error ? error.message : null}
                          {...register(`links.${index}.link_title`)}
                          option={drop_down?.link_title}
                          name="title"
                          errorText="Link Title is required"
                          onChange={onChange}
                        />
                      </>
                    )}
                  />
                </FormControl>
              </GridItem>
              <GridItem item xs={8}>
                <CustomText variant={'title_2'}>URL</CustomText>
                <FormControl fullWidth>
                  <Controller
                    name={`links.${index}.link_url`}
                    control={control}
                    rules={{
                      required: `Title is required`
                    }}
                    render={({ fieldState: { error }, field: { onChange } }) => (
                      <CustomTextField
                        register={{ ...register(`links.${index}.link_url`) }}
                        label=""
                        type={'text'}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </FormControl>
              </GridItem>
              {index > 0 && (
                <GridItem sx={{ display: 'flex', alignItems: 'center' }} item xs={1}>
                  <AddIconButton onClick={() => UrlRemove(index)}>
                    <RedCrossIcon fill={colors.white} w="20" h="20" />
                  </AddIconButton>
                </GridItem>
              )}
            </>
          ))}
          {/* {itemsError && (
            <FormHelperText sx={{ ml: '20px', color: colors.redError }}>
              Please Enter Value
            </FormHelperText>
          )}
          {linkList.map((link, key) => {
            return (
              <GridItem sx={{ display: 'flex', alignItems: 'center' }} key={key} item xs={12}>
                <CustomFlexBox>
                  <CustomText variant={'body_1'} sx={{ marginRight: '20px' }}>
                    {link.title}
                  </CustomText>
                  <Link
                    target="_blank"
                    href="https://app.upwork.com"
                    sx={{ ...labelStyle(colors.rudyBlue, '14px', 500), lineHeight: '18px' }}>
                    {link.url}
                  </Link>
                </CustomFlexBox>
                <AddIconButton onClick={() => removeItem(key)}>
                  <RedCrossIcon fill={colors.white} w="20" h="20" />
                </AddIconButton>
              </GridItem>
            );
          })} */}
          <GridItem sx={{ display: 'flex', alignItems: 'center' }} item xs={1}>
            <IconButton
              onClick={() => handleAddField()}
              sx={{ background: colors.pink80, mt: '10px' }}>
              <Plusicon fill={colors.white} w="20" h="20" />
            </IconButton>
          </GridItem>
        </Grid>
      </form>
      <CardActionsStyle disableSpacing>
        <FileUpload />
      </CardActionsStyle>
    </Card>
  );
};

MileStoneFields.propTypes = {
  setOpen: PropTypes.func
};
export default MileStoneFields;
