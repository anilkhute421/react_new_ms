import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckBox(name) {
  console.log(name, 'iohi');
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox size="small" />} label={name?.name} />
      {/* <FormControlLabel required control={<Checkbox defaultChecked />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
    </FormGroup>
  );
}
