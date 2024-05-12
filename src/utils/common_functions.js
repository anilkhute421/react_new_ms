/* eslint-disable react/prop-types */
import { Box, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import { FieldStyle } from '../components/dashboard/navbar/style';
import { SearchIcon } from '../theme/SvgIcons';
import CustomText from '../components/form/CustomText';

/**
 *
 * @param {*} props
 * @returns  common FlexBox with justifyContent
 */
export const CustomFlex = (props) => {
  const { children, sx } = props;
  let style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };
  return <Box sx={{ ...style, ...sx }}>{children}</Box>;
};

CustomFlex.prototype = {
  children: PropTypes.func,
  sx: PropTypes.object
};

/**
 *
 * @param {*} props
 * @returns common Search field
 */
export const SearchField = (props) => {
  const { sx, setSearchText } = props || {};
  return (
    <FieldStyle
      onChange={(e) => setSearchText(e.target.value)}
      sx={sx}
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <InputAdornment>
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  );
};

/**
 *
 * @param {*} props
 * @returns Custom Flex
 */
export const CustomFlexBox = (props) => {
  const { children, alignItems, sx } = props;

  let style = {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  };

  return <Box sx={{ ...style, alignItems, ...sx }}>{children}</Box>;
};

CustomFlexBox.prototype = {
  children: PropTypes.func,
  alignItems: PropTypes.object
};

/**
 *
 * @param {*} _key key name which set in local storage.
 * @param {*} _localData data which is set in local storage.
 */
export const setDataInLocalStorage = (_key, _localData) => {
  localStorage.setItem(_key, JSON.stringify(_localData));
};

/**
 *
 * @param {*} _item key name to get data.
 * @returns
 */
export const getDataFromLocalStorage = (_item) => {
  return JSON.parse(localStorage.getItem(_item));
};

const textC = (text) => {
  return (
    <CustomText sx={{ mb: '10px', mt: '5px' }} variant={'body_1'}>
      {text}
    </CustomText>
  );
};

export const ImportantMark = (props) => {
  const { name, top, left } = props;
  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      {textC(name)}
      <label style={{ position: 'absolute', top: top, left: left, color: 'red' }}>*</label>
    </div>
  );
};
