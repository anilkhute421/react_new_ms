import { Box, FormControl, Grid, IconButton, Typography } from '@mui/material';

import { BoxWrap, ButtonStyle, FormFieldStyle, labelStyle } from './style';
import { RedCrossIcon } from '../../theme/SvgIcons';
import colors from '../../theme/colors';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';

const style = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '16px',
  marginBottom: '10px',
  color: colors.nero
};
function LastSalary(props) {
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
    { name: 'salary', inputlabel: 'Basic Salary (INR)', gridwith: '12' },
    { name: 'effectivedate', inputlabel: 'Effective Date', type: 'date', gridwith: '6' },
    { name: 'nextDate', inputlabel: 'Next review Date', type: 'date', gridwith: '6' },
    { name: 'accountno', inputlabel: 'Bank Account no.', gridwith: '12' },
    { name: 'branchname', inputlabel: 'Branch Name', gridwith: '6' },
    { name: 'ifsc', inputlabel: 'IFSC', gridwith: '6' }
  ];
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BoxWrap spaceBetween="space-between">
          <div style={{ padding: '0px 25px' }}>
            <Typography sx={{ ...labelStyle(colors.black, '22px', 700) }}>Salary</Typography>
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
                  </FormControl>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </form>
    </>
  );
}

LastSalary.propTypes = {
  open: PropTypes.func,
  projetclist: PropTypes.array
};

export default LastSalary;
