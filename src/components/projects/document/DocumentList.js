import { Box, Card, FormControl, Grid, Typography } from '@mui/material';
import { labelStyle } from '../style';
import colors from '../../../theme/colors';
import { Controller, useForm } from 'react-hook-form';
import CustomSelect from '../../form/CustomSelect';
import { linkOptions } from './DocumentFields';
import { BoxWrap, IconButtonStyle } from './style';
import { DeleteMyIcon, DownLoadIcon, ForwordIcon, PdfIcon } from '../../../theme/SvgIcons';
import CustomButton from '../../form/CustomButton';
import { CustomFlex } from '../../../utils/common_functions';
import FileUpload from '../../form/FileUpload';
import { PropTypes } from 'prop-types';
import CustomModal from '../../form/CustomModal';
// import MyDrawer from '../../../utils/DeleteWrapper';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editDocumentAction } from '../../../redux/project/action';

const typeAry = [{ pdfname: 'Projectmodulesheet.pdf' }, { pdfname: 'Requirements.pdf' }];

const DocumentList = (props) => {
  const { onClick, document_list, projetct_id } = props;
  const dispatch = useDispatch();
  console.log(document_list, 'jghjghj');
  const { drop_down } = useSelector((state) => state?.signIn);

  const { control, register } = useForm();
  const [open, setOpen] = React.useState(false);
  const [documentId, setDocumentId] = React.useState(false);

  const handleForwardClick = (url) => {
    window.open(url, '_blank');
  };

  const onChangeDis = (data_id, documentid) => {
    // console.log(url, 'url');
    // console.log(data_id, documentid, 'url');
    const data = {
      document_type: data_id
    };
    dispatch(editDocumentAction(data, documentid, projetct_id));
  };

  const handleDelte = (id) => {
    setOpen(true);
    setDocumentId(id);
  };

  console.log(documentId, 'documentId');

  return (
    <Card>
      <Box sx={{ p: '10px 35px', borderBottom: `1px solid ${colors.Gray90}` }}>
        <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>Documents</Typography>
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
          <CustomButton bg={colors.pink80} label="Add" onClick={() => onClick()}></CustomButton>
        </CustomFlex>

        {document_list?.map((type, key) => {
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
                          defaultValue={type?.document_type}
                        />
                      </>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={9}>
                <BoxWrap>
                  <Typography sx={{ ...labelStyle(colors.grayLight, '14px', 400) }}>
                    {type?.document_url}
                  </Typography>
                  <Box>
                    <IconButtonStyle
                      bg={colors.darkBlue}
                      onClick={() => handleForwardClick(type?.document_url)}>
                      <ForwordIcon />
                    </IconButtonStyle>

                    <IconButtonStyle bg={colors.bgDelete} onClick={() => handleDelte(type?.id)}>
                      <DeleteMyIcon />
                    </IconButtonStyle>
                  </Box>
                </BoxWrap>
              </Grid>
            </Grid>
          );
        })}
      </Box>
      <Box sx={{ pb: '2rem', boxShadow: '0px 0px 32px rgba(20, 30, 73, 0.05)', padding: '20px' }}>
        <FileUpload />
      </Box>
      {open && (
        <CustomModal
          open={open}
          setOpen={() => setOpen(false)}
          id={documentId}
          type={'document_del'}
          projetct_id={projetct_id}>
          {/* <p>anil</p> */}
        </CustomModal>
        // <p>kkk</p>
      )}
    </Card>
  );
};

DocumentList.propTypes = {
  onClick: PropTypes.func,
  document_list: PropTypes.array,
  projetct_id: PropTypes.string
};
export default DocumentList;
