import { Box, Card, FormControl, Grid, Typography } from '@mui/material';
import React from 'react';
import colors from '../../theme/colors';
import { DocBoxWrap, PermissionWrapper, labelStyle } from './style';
// import UserInfo from '../employee/UserInfo';
import { Controller, useForm } from 'react-hook-form';
import CustomSelect from '../form/CustomSelect';
import { DeleteMyIcon, DownLoadIcon } from '../../theme/SvgIcons';
import { IconButtonStyle } from '../projects/document/style';
import FileUpload from '../form/FileUpload';
import { linkOptions } from '../projects/document/DocumentFields';
import { emp_doc_heading, emp_type_doc } from './empText';

const ViewDoc = () => {
  const typeAry = [{ pdfname: 'Projectmodulesheet.pdf' }, { pdfname: 'Requirements.pdf' }];
  const { control, register } = useForm();

  return (
    <PermissionWrapper>
      {/* <UserInfo /> */}
      <div style={{ marginTop: '30px' }}>
        <Card>
          <Box sx={{ p: '10px 35px', borderBottom: `1px solid ${colors.Gray90}` }}>
            <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>
              {emp_doc_heading}
            </Typography>
          </Box>
          <Box sx={{ m: '10px 40px', pb: '5rem' }}>
            <Typography sx={{ ...labelStyle(colors.blackDark, '12px', 500) }}>
              {emp_type_doc}
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
                    <DocBoxWrap>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* <PdfIcon />{' '} */}
                        <Typography sx={{ ...labelStyle(colors.grayLight, '14px', 400) }}>
                          https://app.asana.com/0/1165939257451906
                        </Typography>
                      </Box>
                      <Box>
                        <IconButtonStyle bg={colors.pink80}>
                          <DownLoadIcon />
                        </IconButtonStyle>

                        <IconButtonStyle bg={colors.bgDelete}>
                          <DeleteMyIcon />
                        </IconButtonStyle>
                      </Box>
                    </DocBoxWrap>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
          <Box
            sx={{ pb: '2rem', boxShadow: '0px 0px 32px rgba(20, 30, 73, 0.05)', padding: '20px' }}>
            <FileUpload />
          </Box>
        </Card>
      </div>
    </PermissionWrapper>
  );
};

export default ViewDoc;
