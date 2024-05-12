import * as React from 'react';
import PropTypes from 'prop-types';
import useAutocomplete from '@mui/base/useAutocomplete';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { MultiDropDownIcon, MultiSearchIcon, RedCrossIcon } from '../../theme/SvgIcons';
import { FormHelperText, IconButton } from '@mui/material';
import colors from '../../theme/colors';

const Root = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'};
  font-size: 14px;
`
);

const InputWrapper = styled('div')(`
  border: 1px solid ${colors.Gray90};
  background-color: ${colors.white};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;
  // position: relative

  & input {
    background-color: ${colors.white};
    color: ${colors.nero};
    height: 47px;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;

  }

`);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <IconButton onClick={() => onDelete()}>
        <RedCrossIcon fill={colors.nero} />
      </IconButton>
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

const StyledTag = styled(Tag)`
  display: flex;
  max-width: 120px;
  align-items: center;
  background-color: ${colors.Gray94};
  border: 1px solid ${colors.gray90};
  border-radius: 30px;
  padding: 13px 5px;
  overflow: hidden;
  height: 16px;
  margin: 5px;

  &:focus {
    background-color: colors.ghostWhite;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 11px;
  }
  & svg {
    cursor: pointer;
  }
`;

const Listbox = styled('ul')`
  width: 100%;
  margin: 2px 0 0;
  padding: 0;
  list-style: none;
  background-color: ${colors.white};
  overflow: auto;
  max-height: 250px;
  border-radius: 8px;
  box-shadow: 0px 16px 32px rgba(20, 30, 73, 0.15);
  z-index: 1;

  &::-webkit-scrollbar {
    width: 0px;
  }

  & li {
    padding: 6px 25px;
    display: flex;
    align-items: center;

    & p {
      flex-grow: 1;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      margin: 0;
      margin-left: 10px;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${colors.skyblueLight};
    font-weight: 600;
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${colors.ghostWhite};
    cursor: pointer;
  }
`;

const MultiSelect = (props) => {
  const { options, onChange, name, defaultValue, error, errorText, helperText } = props || {};
  console.log(defaultValue, 'defaultValuewe');
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: defaultValue,
    multiple: true,
    options: options && options,
    getOptionLabel: (option) => option.value
  });

  console.log(value, 'dfsfsfsdfsdfsfsfsf');
  React.useEffect(() => {
    if (value) {
      onChange && onChange(value);
    }
  }, [value]);

  return (
    <Root>
      <div {...getRootProps()}>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          <MultiSearchIcon /> {/* Add the search icon */}
          {(value || []).map((option, index) => (
            <StyledTag
              key={index}
              label={option.value}
              {...getTagProps({ index })}
              error={error ? error : false}
              helperText={helperText ? helperText : ''}
              name={name}
            />
          ))}
          <input name={name} {...getInputProps()} />
          <MultiDropDownIcon />
        </InputWrapper>
      </div>
      {groupedOptions?.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions?.map((option, index) => (
            <li key={index} {...getOptionProps({ option, index })}>
              {option?.comp}
              <p>{option.value}</p>
            </li>
          ))}
        </Listbox>
      ) : null}
      {error && <FormHelperText sx={{ color: colors.redError }}>{errorText}</FormHelperText>}
    </Root>
  );
};

export default MultiSelect;
