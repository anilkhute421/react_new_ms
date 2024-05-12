import { Box, Card, FormControl, Grid, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import CustomSelect from '../../form/CustomSelect';
import { DeleteMyIcon, DownLoadIcon, ForwordIcon, PdfIcon } from '../../../theme/SvgIcons';
import { CustomFlex } from '../../../utils/common_functions';
import { PropTypes } from 'prop-types';
import CustomModal from '../../form/CustomModal';
import * as React from 'react';
// import { IconButtonStyle } from '../../dashboard/navbar/style';
import { linkOptions } from '../document/DocumentFields';
import { BoxWrap, IconButtonStyle } from '../document/style';
import { labelStyle } from '../../employee/style';
import colors from '../../../theme/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { editChangeReqTitleAction } from '../../../redux/project/action';

const typeAry = [{ pdfname: 'Projectmodulesheet.pdf' }, { pdfname: 'Requirements.pdf' }];

const ChangeReqList = () => {
  const { control, register } = useForm();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState({ status: false, id: '' });
  const { changeReq_view } = useSelector((state) => state?.project);
  const { drop_down } = useSelector((state) => state?.signIn);
  const listing_id = useLocation()?.state?.listingid;

  // console.log(changeReq_view, 'changeReq_view');
  const handleForwardClick = (url) => {
    window.open(url, '_blank');
    // console.log(url, 'url');
  };

  const onChangeDis = (data_id, documentid) => {
    // console.log(url, 'url');
    console.log(data_id, documentid, 'urfjkdhfjkdhfl');
    const data = {
      link_title: data_id
    };
    console.log(data, 'hjgbhjgj');
    dispatch(editChangeReqTitleAction(data, documentid));
  };
  return (
    <Card>
      <Box
        sx={{
          p: '10px 35px',
          borderBottom: `1px solid ${colors.Gray90}`,
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '15px'
        }}>
        <div style={{ width: '100%' }}>
          <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>Documents</Typography>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '240px',
              height: '55px',
              background: colors.white,
              boxShadow: '0px 16px 32px rgba(20, 30, 73, 0.15)',
              borderRadius: '8px',
              padding: '0px 10px'
            }}>
            <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>
              No of Hours Approved :
            </Typography>
            <Typography sx={{ ...labelStyle(colors.darkSkyBlue, '14px', 500) }}>
              {changeReq_view?.no_of_hours}
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '240px',
              height: '55px',
              background: colors.white,
              boxShadow: '0px 16px 32px rgba(20, 30, 73, 0.15)',
              borderRadius: '8px',
              padding: '0px 10px'
            }}>
            <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>
              Approved by client :
            </Typography>
            <Typography sx={{ ...labelStyle(colors.darkSkyBlue, '14px', 500) }}>
              {changeReq_view?.client_approved ? 'True' : 'False'}
            </Typography>
          </div>
        </div>
      </Box>
      <Box sx={{ m: '10px 40px', pb: '5rem' }}>
        <Typography sx={{ ...labelStyle(colors.blackDark, '12px', 500) }}>
          Type of Document
        </Typography>

        {typeAry.map((type, key) => {
          return (
            <Grid
              key={key}
              rowSpacing={1}
              sx={{ display: 'flex', alignItems: 'center', my: '15px' }}
              columnSpacing={'20px'}
              container>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <Controller
                    name={'employeeID'}
                    control={control}
                    rules={{
                      required: `Employee ID is required`
                    }}
                    render={({ fieldState: {} }) => (
                      <CustomSelect
                        sx={{
                          '& fieldset': {
                            border: `1px solid ${colors.Gray90}`
                          }
                        }}
                        {...register('employeeID')}
                        option={linkOptions}
                        name="employeeID"
                        label=""
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={9}>
                <BoxWrap>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PdfIcon />
                    <Typography
                      sx={{ ...labelStyle(colors.grayLight, '14px', 400), marginLeft: '9px' }}>
                      {type.pdfname}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButtonStyle bg={colors.pink80}>
                      <DownLoadIcon />
                    </IconButtonStyle>

                    <IconButtonStyle bg={colors.bgDelete} onClick={() => setOpen(true)}>
                      <DeleteMyIcon />
                    </IconButtonStyle>
                  </Box>
                </BoxWrap>
              </Grid>
            </Grid>
          );
        })}
        <CustomFlex sx={{ mt: '40px' }}>
          <Typography sx={{ ...labelStyle(colors.blackDark, '12px', 500) }}>Links</Typography>
        </CustomFlex>

        {changeReq_view?.request_module_links?.map((type, key) => {
          return (
            <Grid
              key={key}
              rowSpacing={1}
              sx={{ display: 'flex', alignItems: 'center', my: '15px' }}
              columnSpacing={'20px'}
              container>
              <Grid item xs={3}>
                {/* <FormControl fullWidth>
                  <Controller
                    name={'employeeID'}
                    control={control}
                    rules={{
                      required: `Employee ID is required`
                    }}
                    render={({ fieldState: {} }) => (
                      <CustomSelect
                        sx={{
                          '& fieldset': {
                            border: `1px solid ${colors.Gray90}`
                          }
                        }}
                        {...register('employeeID')}
                        option={linkOptions}
                        name="employeeID"
                        label=""
                      />
                    )}
                  />
                </FormControl> */}

                <FormControl fullWidth>
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
                          onChange={(e) => {
                            onChange();
                            onChangeDis(e, type?.id);
                          }}
                          defaultValue={type?.link_title}
                        />
                      </>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={9}>
                <BoxWrap>
                  <Typography sx={{ ...labelStyle(colors.grayLight, '14px', 400) }}>
                    {type?.link_url}
                  </Typography>
                  <Box>
                    <IconButtonStyle
                      bg={colors.darkBlue}
                      onClick={() => handleForwardClick(type?.link_url)}>
                      <ForwordIcon />
                    </IconButtonStyle>

                    <IconButtonStyle
                      bg={colors.bgDelete}
                      onClick={() => setOpen({ status: true, id: type?.id })}>
                      <DeleteMyIcon />
                    </IconButtonStyle>
                  </Box>
                </BoxWrap>
              </Grid>
            </Grid>
          );
        })}
      </Box>

      {open?.status && (
        <CustomModal
          id={open?.id}
          getmilestoneid={listing_id}
          open={open?.status}
          setOpen={() => setOpen({ status: false, id: '' })}
          type="changeReqLink_del"></CustomModal>
      )}
    </Card>
  );
};

ChangeReqList.propTypes = {
  onClick: PropTypes.func
};
export default ChangeReqList;
