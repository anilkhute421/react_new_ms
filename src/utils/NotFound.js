import { Button, Typography } from '@mui/material';
import { NotFoundCard, textStyle } from './style';
import colors from '../theme/colors';

function DataNotFound(prop) {
  const { label, path, text } = prop;
  return (
    <NotFoundCard>
      <Typography sx={textStyle()}>
        {text ? text : 'No project created Yet Kindly create project first'}
      </Typography>
      <Button
        onClick={() => path()}
        variant="contained"
        sx={{ background: colors.darkSkyBlue, marginTop: '15px' }}>
        {label}
      </Button>
    </NotFoundCard>
  );
}

export default DataNotFound;
