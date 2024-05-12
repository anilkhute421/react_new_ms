import { Box, Grid, IconButton, Typography } from '@mui/material';
import { BoxWrap, ButtonStyle, TextArea, labelStyle } from './style';
import colors from '../../theme/colors';
import PropTypes from 'prop-types';
import { RedCrossIcon } from '../../theme/SvgIcons';

const style = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '16px',
  marginBottom: '10px',
  color: colors.nero
};
function AddRemarks(props) {
  const { projetclist } = props || {};

  console.log(projetclist, 'qeqseqeqqwes');

  return (
    <>
      <BoxWrap spaceBetween="space-between">
        <div style={{ padding: '0px 25px' }}>
          <Typography sx={{ ...labelStyle(colors.black, '22px', 700) }}>Remarks</Typography>
        </div>
        <Box>
          <ButtonStyle type="submit" variant="contained">
            Save
          </ButtonStyle>
          <IconButton onClick={() => props.setOpen(false)}>
            <RedCrossIcon />
          </IconButton>
        </Box>
      </BoxWrap>
      <Box sx={{ padding: '30px', paddingBottom: '6rem' }}>
        <Grid rowSpacing={1} columnSpacing={'20px'} container>
          <Grid sx={{ marginBottom: '22px' }} item xs={12}>
            <Typography sx={style}>Remark</Typography>
            <TextArea placeholder="Type Here" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

AddRemarks.propTypes = {
  setOpen: PropTypes.func,
  projetclist: PropTypes.array
};

export default AddRemarks;
