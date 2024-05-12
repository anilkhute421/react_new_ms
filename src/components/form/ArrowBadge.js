import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import colors from '../../theme/colors';

const BadgeTriengle = styled.div`
  overflow: hidden;
  margin: -1px 0px 0px -6px;
  width: 12px;
  height: 13px;
  transform: rotate(-90deg) skewY(49deg);
  &:before {
    display: block;
    width: inherit;
    height: inherit;
    transform: skewY(-30deg) rotate(60deg) translate(50%);
    background: ${(props) => props.bg};
    content: '';
  }
`;

const StackStyle = styled(Stack)({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'end'
});
const ArrowBadge = (props) => {
  const { bg, text } = props;
  const shapeStyles = {
    bgcolor: bg || 'primary.main',
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '10px',
    color: colors.white,
    textAlign: 'center',
    padding: '2px 7px'
  };
  const rectangle = (
    <Box component="span" sx={shapeStyles}>
      {text}
    </Box>
  );
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <StackStyle spacing={3} direction="row">
        {rectangle}
      </StackStyle>
      <BadgeTriengle bg={bg || 'primary.main'}></BadgeTriengle>
    </Box>
  );
};

ArrowBadge.propTypes = {
  bg: PropTypes.string,
  text: PropTypes.string
};

export default ArrowBadge;
