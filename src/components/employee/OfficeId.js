import { Box, FormControl, Grid, IconButton, Typography } from '@mui/material';

import { BoxWrap, ButtonStyle, CustomArea, FormFieldStyle, labelStyle } from './style';
import { RedCrossIcon, Textareaicon2, Textareaicon1 } from '../../theme/SvgIcons';
import colors from '../../theme/colors';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import CustomSelect from '../form/CustomSelect';

const style = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '16px',
  marginBottom: '10px',
  color: colors.nero
};

// const options = [
//   { value: 'Active', label: 'Active' },
//   { value: 'Complete', label: 'Complete' }
// ];

function OfficeId(props) {
  const { setProjetclist, projetclist } = props || {};
  const { handleSubmit, control, register } = useForm();
  const onSubmit = (data) => {
    if (data) {
      setProjetclist(data);
    }
    console.log(data, 'sdsdsdsd');
  };
  console.log(projetclist, 'qeqseqeqqwes');
  const fields = [
    { name: 'service', inputlabel: 'Select Service', type: 'select', gridwith: '12' },
    { name: 'serviceurl', inputlabel: 'Service URL', gridwith: '12' },
    { name: 'email', inputlabel: 'Email or User name', type: 'email', gridwith: '12' },
    { name: 'password', inputlabel: 'Password', type: 'password', gridwith: '12' },
    { name: 'number', inputlabel: 'Contact Number', gridwith: '12' },
    { name: 'code', inputlabel: 'Code', gridwith: '12' }
  ];
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BoxWrap spaceBetween="space-between">
          <div style={{ padding: '0px 25px' }}>
            <Typography sx={{ ...labelStyle(colors.black, '22px', 700) }}>
              Office Essentials IDs
            </Typography>
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
                    <Typography sx={style}>{field.inputlabel}</Typography>
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
          <div>
            <Typography sx={style}>Remark</Typography>
            <CustomArea style={{ height: '217px' }}></CustomArea>
            <Box sx={{ float: 'right', display: 'flex', mr: '5px' }}>
              <Textareaicon2 />
              <Box sx={{ ml: '20px' }}>
                <Textareaicon1 />
              </Box>
            </Box>
          </div>
        </Box>
      </form>
    </>
  );
}

OfficeId.propTypes = {
  open: PropTypes.func,
  projetclist: PropTypes.array
};

export default OfficeId;
