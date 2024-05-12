import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../../theme/colors';

export const SelectStyle = styled(Select)(({ height }) => ({
  height: height || '56px',
  background: colors.white,
  '& .MuiSvgIcon-root': {
    color: colors.blackDark
  }
}));

const CustomSelect = (props) => {
  const {
    option,
    onChange,
    name,
    rest,
    children,
    height,
    value,
    sx,
    width,
    placholder,
    error,
    helperText,
    register,
    defaultValue,
    errorText
  } = props || {};

  console.log(defaultValue, 'defaultValue545', value);
  return (
    <FormControl sx={{ width: width && width }}>
      <InputLabel>{placholder && placholder}</InputLabel>
      <SelectStyle
        height={height}
        {...register}
        error={error ? error : false}
        helperText={helperText ? helperText : ''}
        sx={sx}
        {...rest}
        value={value}
        defaultValue={defaultValue}
        name={name}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}>
        {children && children}
        {/* <MenuItem value="">Select</MenuItem> */}
        {option?.map((opt, key) => {
          return (
            <MenuItem key={key} value={opt.key}>
              {opt.value}
            </MenuItem>
          );
        })}
      </SelectStyle>
      {error && <FormHelperText sx={{ color: colors.redError }}>{errorText}</FormHelperText>}
    </FormControl>
  );
};

CustomSelect.propTypes = {
  children: PropTypes.func,
  option: PropTypes.array,
  onChange: PropTypes.func,
  name: PropTypes.string,
  rest: PropTypes.func,
  height: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string,
  sx: PropTypes.object,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  register: PropTypes.func,
  errorText: PropTypes.string,
  defaultValue: PropTypes.string
};

export default CustomSelect;
