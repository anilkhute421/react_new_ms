import { Box, Card, FormControl, Grid, IconButton } from '@mui/material';
// import { useState } from 'react';
// import { BoxWrap, CustomArea, labelStyle } from '../style';
import { Plusicon, RedCrossIcon } from '../../../theme/SvgIcons';
import colors from '../../../theme/colors';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
// import MultiSelect from '../../form/MultiSelect';
// import { AddIconButton, CardActionsStyle, GridItem } from './style';
// import { Link } from 'react-router-dom';
import FileUpload from '../../form/FileUpload';
import CustomText from '../../form/CustomText';
// import CustomButton from '../../form/CustomButton';
import CustomTextField from '../../form/CustomTextField';
// import { CustomFlexBox } from '../../../utils/common_functions';
import PropTypes from 'prop-types';
import { BoxWrap, CustomArea } from '../style';
import { AddIconButton, CardActionsStyle, GridItem } from '../milestone/style';
import CustomizedRadios from '../CustomRadioButton';
import { ButtonStyle } from '../../employee/style';
import CustomSelect from '../../form/CustomSelect';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { editChangeReqAction, viewChangeReqRes } from '../../../redux/project/action';
import { ImportantMark } from '../../../utils/common_functions';
import { useLocation } from 'react-router-dom';
// import React, { useCallback, useEffect } from 'react';

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
  title: yup.string().required('Title is required').min(2, 'Title must have at least 2 characters'),
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
  ),
  // link_title: yup.string().required('Link title is required'),
  // link_url: yup.string().required('Link url  is required'),
  // no_of_hours: yup.string().required('Number of hours is required')
  description: yup.string().required('description is required'),
  no_of_hours: yup.string().matches(/^[0-9]+$/, 'Only numbers are allowed')
});

const EditChangeReq = (props) => {
  const { setOpen, listing_id } = props;
  const { drop_down } = useSelector((state) => state?.signIn);
  const { project_view, changeReq_view } = useSelector((state) => state.project);
  console.log(changeReq_view, 'changeReq_viewwewe');
  // const { changeReq_view } = useSelector((state) => state?.project);

  // useEffect(() => {
  //   dispatch(viewChangeReqAction(listing_id));
  // }, []);

  const { handleSubmit, control, register } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: changeReq_view?.title,
      no_of_hours: changeReq_view?.no_of_hours,
      links: changeReq_view?.request_module_links,
      description: changeReq_view?.description,
      client_approved: changeReq_view?.client_approved
    }
  });

  // const setInitialValues = useCallback(() => {
  //   if (changeReq_view) {
  //     setValue('title', changeReq_view?.title);
  //     setValue('no_of_hours', changeReq_view?.no_of_hours);
  //     setValue('description', changeReq_view?.description);
  //     setValue('links', changeReq_view?.request_module_links);
  //     setValue('client_approved', changeReq_view?.client_approved);
  //   }
  // }, [changeReq_view]);
  // const setInitialValues = (changeReq_view) => {

  // };

  const {
    fields: LinkFields,
    append: UrlAppend,
    remove: UrlRemove
  } = useFieldArray({ control, name: 'links' });

  const handleAddField = () => {
    UrlAppend({ link_title: '', link_url: '' });
  };

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(viewChangeReqRes({}));
    setOpen(false);
  };
  const project_id = useLocation().state?.project_id;

  const onSubmit = (data) => {
    // console.log(listing_id, 'dasdsadsadas');
    closeModal();
    dispatch(editChangeReqAction(data, listing_id, project_id));
    // console.log(data, 'chnage_req');
  };

  const commonText = (text) => {
    return (
      <CustomText sx={{ marginBottom: '10px' }} variant={'body_1'}>
        {text}
      </CustomText>
    );
  };
  // useEffect(() => {
  //   if (changeReq_view) {
  //     setInitialValues(changeReq_view);
  //   }
  // }, [changeReq_view, setValue]);

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
            <CustomText variant="body_2">Change Request Module</CustomText>
          </Box>
          <GridItem item xs={12}>
            <FormControl fullWidth>
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
                    placeholder={'Enter'}
                  />
                )}
              />
            </FormControl>
          </GridItem>
          {LinkFields.length > 0 &&
            LinkFields?.map((item, index) => (
              <>
                <GridItem item xs={3}>
                  <FormControl fullWidth>
                    {commonText('Link Title')}
                    <Controller
                      name={`links.${index}.link_title`}
                      control={control}
                      rules={{
                        required: `Title is required`
                      }}
                      render={({ fieldState: { error }, field: { onChange, value } }) => (
                        console.log(value, 'qewqeqwe'),
                        (
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
                        )
                      )}
                    />
                  </FormControl>
                </GridItem>
                <GridItem item xs={8}>
                  {commonText('URL')}
                  <FormControl fullWidth>
                    {/* {commonText('Title')} */}
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

          <GridItem sx={{ display: 'flex', alignItems: 'center' }} item xs={1}>
            <IconButton
              onClick={() => handleAddField()}
              sx={{ background: colors.pink80, mt: '10px' }}>
              <Plusicon fill={colors.white} w="20" h="20" />
            </IconButton>
          </GridItem>

          {/* {itemsError && (
            <FormHelperText sx={{ ml: '20px', color: colors.redError }}>
              Please Enter Value
            </FormHelperText>
          )}
          {linkList.map((link, key) => {
            return (
              <GridItem sx={{ display: 'flex', alignItems: 'center' }} key={key} item xs={12}>
                {' '}
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
              </GridItem>
            );
          })} */}
          <GridItem item xs={12}>
            <FormControl fullWidth>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: '5px' }}>{commonText('Approved by client')}</div>
                <div style={{ marginLeft: '40px' }}>
                  {/* <CustomizedRadios
                    register={{ ...register('client_approved') }}
                    name="client_approved"
                    onChange={onChange}
                  /> */}

                  <Controller
                    name={'client_approved'}
                    control={control}
                    rules={{
                      required: `Title is required`
                    }}
                    render={({ field }) => (
                      <CustomizedRadios
                        fields={field}
                        defaultValues={changeReq_view?.client_approved ? 'true' : 'false'}
                      />
                    )}
                  />
                </div>
              </div>
            </FormControl>
          </GridItem>
          <GridItem item xs={12}>
            <FormControl fullWidth>
              {/* {commonText('No of Hours Approved')} */}
              <ImportantMark name={'No of Hours Approved'} left="160px" />
              <Controller
                name={'no_of_hours'}
                control={control}
                rules={{
                  required: `Title is required`
                }}
                render={({ fieldState: { error }, field: { onChange } }) => (
                  <CustomTextField
                    register={{ ...register('no_of_hours') }}
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
          <GridItem item xs={12}>
            {/* <FormControl fullWidth>
              {commonText('Description')}
              <CustomArea placeholder="Enter"></CustomArea>
            </FormControl> */}
            <FormControl fullWidth>
              {/* {commonText('Milestone Details / Tasks')} */}
              <Controller
                name={'description'}
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
                      {/* {commonText('Description')} */}
                      <ImportantMark name={'Description'} left="85px" />
                    </Box>
                    <CustomArea
                      {...register('description')}
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
        </Grid>
      </form>
      <CardActionsStyle disableSpacing>
        <FileUpload />
      </CardActionsStyle>
    </Card>
  );
};

EditChangeReq.propTypes = {
  setOpen: PropTypes.func,
  listing_id: PropTypes.string,
  changeReq_view: PropTypes.object
};
export default EditChangeReq;
