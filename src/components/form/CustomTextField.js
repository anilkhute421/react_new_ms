import { TextField } from '@mui/material';
import colors from '../../theme/colors';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export const FieldStyle = styled(TextField)(({ hasError, width }) => ({
  background: colors.white,
  width: width || '100%',
  border: `1px solid ${hasError ? colors.redError : colors.Gray90}`,
  borderRadius: '4px',
  height: '47px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '0px',
      borderRadius: '6px'
    },
    '& input': {
      padding: '12px'
    }
  }
}));

const CustomTextField = (props) => {
  const {
    value,
    onChange,
    name,
    type,
    placeholder,
    width,
    sx,
    error,
    helperText,
    register,
    inputProps
  } = props;
  return (
    <FieldStyle
      {...register}
      name={name}
      // inputProps={inputProps}
      sx={sx}
      placeholder={placeholder}
      type={type ? type : 'text'}
      value={value}
      hasError={error}
      error={error ? error : false}
      width={width}
      helperText={helperText ? helperText : ''}
      onChange={onChange}
      inputProps={{ max: inputProps, min: '0' }}></FieldStyle>
  );
};

CustomTextField.propTypes = {
  name: PropTypes.string,
  inputProps: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  sx: PropTypes.object,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  register: PropTypes.object
};

export default CustomTextField;
