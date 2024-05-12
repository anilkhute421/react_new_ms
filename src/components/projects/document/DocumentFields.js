import { Box, FormControl, Grid, IconButton, Typography } from '@mui/material';
import { BoxWrap, ButtonStyle, FormFieldStyle, labelStyle } from '../style';
import { RedCrossIcon, ValidInfo } from '../../../theme/SvgIcons';
import colors from '../../../theme/colors';
import { Controller, useForm } from 'react-hook-form';
import CustomSelect from '../../form/CustomSelect';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { createDocumentAction } from '../../../redux/project/action';
import { ImportantMark } from '../../../utils/common_functions';

export const linkOptions = [
  { value: 'Requirements', label: 'Project Requirements' },
  { value: 'Milestone', label: 'Milestone' },
  { value: 'Website', label: 'Website link' },
  { value: 'Policy', label: 'Privacy Policy' },
  { value: 'Conditions', label: 'Terms & Conditions' },
  { value: 'app', label: 'iOS app' },
  { value: 'Android', label: 'Android app' },
  { value: 'Database', label: 'Database' },
  { value: 'designs', label: 'Mobile app designs' },
  { value: 'Web', label: 'Web app designs' }
];
const DocumentFields = (props) => {
  const { onClick } = props;
  const dispatch = useDispatch();
  const { drop_down } = useSelector((state) => state?.signIn);
  const { project_view } = useSelector((state) => state.project);

  console.log(drop_down, 'link_title');
  const { control, register, handleSubmit } = useForm();

  const project_id = useLocation().state?.project_id;
  console.log(project_id, 'project_idgghjghjhjg');

  const onSubmit = (data) => {
    console.log(data, 'datadata');

    var pattern = new RegExp(
      '^(?!http:\\/\\/)(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    // return !!pattern.test(str);

    // const isValidUrl = /^https:\/\/.*/.test(data?.url);
    const isValidUrl = !!pattern.test(data?.url);
    if (data?.url && !isValidUrl) {
      // console.log('dsaasdasdsdasd');
      toast.error('URL must start with http:// or https://');
    } else {
      // console.log('anil');
      const payload = {
        document_type: data?.title,
        document_url: data?.url
      };
      dispatch(createDocumentAction(payload, project_id));
      onClick();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <BoxWrap spaceBetween="space-between">
          <Typography sx={{ ...labelStyle() }}>{project_view?.name}</Typography>
          <Box>
            <ButtonStyle type="submit" variant="contained">
              Save
            </ButtonStyle>
            <IconButton onClick={() => onClick()}>
              <RedCrossIcon />
            </IconButton>
          </Box>
        </BoxWrap>
        <Box sx={{ padding: '30px' }}>
          <Typography
            sx={{
              ...labelStyle(colors.nero, '22px', 700),
              lineHeight: '18px',
              marginBottom: '20px'
            }}>
            Add New Link
          </Typography>
          <form>
            <Grid rowSpacing={1} columnSpacing={'20px'} container>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  {/* <Typography sx={{ ...labelStyle(colors.nero, '12px', 400) }}></Typography> */}
                  <ImportantMark name={'Link Title'} left="65px" />
                  <Controller
                    name={'title'}
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
                          {...register('title')}
                          option={drop_down?.link_title}
                          name="title"
                          errorText="Link Title is required"
                          onChange={onChange}
                        />
                      </>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  {/* <Typography sx={{ ...labelStyle(colors.nero, '12px', 400) }}>URL</Typography> */}
                  <ImportantMark name={'URL'} left="25px" />
                  <Controller
                    name={'url'}
                    control={control}
                    rules={{
                      required: `Url is required`
                    }}
                    render={({ fieldState: { error } }) => (
                      <FormFieldStyle
                        hasError={error}
                        {...register('url')}
                        label=""
                        error={!!error}
                        type={'text'}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </FormControl>
                <Typography
                  sx={{ ...labelStyle(colors.grayLight, '12px', 400), marginTop: '15PX' }}>
                  <ValidInfo />
                  Add valid URL start with https://
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </form>
  );
};

DocumentFields.propTypes = {
  onClick: PropTypes.func
};
export default DocumentFields;
