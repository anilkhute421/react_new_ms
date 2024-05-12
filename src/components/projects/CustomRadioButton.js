import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { RadioRightIcon } from '../../theme/SvgIcons';
// import vector from '../../assets/Vector.png';
// import { RadioRightIcon } from '../../theme/SvgIcons';
import * as ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 20,
  height: 20,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5'
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)'
  }
}));

const svgString = encodeURIComponent(ReactDOMServer.renderToStaticMarkup(<RadioRightIcon />));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#0000E9',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 10,
    height: 10,
    backgroundImage: `url("data:image/svg+xml,${svgString}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    content: '""',
    marginLeft: '5px',
    marginTop: '4px'
  },
  'input:hover ~ &': {
    backgroundColor: '#0000E9'
  }
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function CustomizedRadios(props) {
  const { fields, defaultValues } = props;

  return (
    <FormControl>
      <RadioGroup defaultValue={defaultValues} aria-labelledby="demo-customized-radios" {...fields}>
        <div>
          <FormControlLabel value="true" control={<BpRadio />} label="True" />
          <FormControlLabel value="false" control={<BpRadio />} label="False" />
        </div>
      </RadioGroup>
    </FormControl>
  );
}

CustomizedRadios.propTypes = {
  fields: PropTypes.object,
  defaultValues: PropTypes.string
  // onChange: PropTypes.func
};
