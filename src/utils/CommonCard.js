import React from 'react';
import { Box, Typography } from '@mui/material';
import { CompletedIcon, OnHoldIcon, ProjectsIcon, WindowIcon } from '../theme/SvgIcons';
import colors from '../theme/colors';
import { BoxWrap, CardStyle, statusstyle } from './style';
import { useSelector } from 'react-redux';
import { SpinnerStyle } from '../components/projects/style';
import { PropagateLoader } from 'react-spinners';

function CommonCard() {
  const { project_status_count, spineer_value } = useSelector((e) => e.project);

  console.log(project_status_count, 'project_status_count');

  const cards = [
    {
      id: 1,
      name: 'Active',
      count: project_status_count?.active,
      icon: <ProjectsIcon h="25px" w="24px" fill={colors.white} />,
      bg: colors.lightRed
    },
    {
      id: 2,
      name: 'All',
      count: project_status_count?.all,
      icon: <WindowIcon />,
      bg: colors.info
    },
    {
      id: 3,
      name: 'Delivered',
      count: project_status_count?.delivered,
      icon: <CompletedIcon />,
      bg: colors.rudyBlue
    },
    {
      id: 4,
      name: 'Hired',
      count: project_status_count?.hired,
      icon: <OnHoldIcon />,
      bg: colors.lightPink
    },
    {
      id: 5,
      name: 'Disputed',
      count: project_status_count?.disputed,
      icon: <OnHoldIcon />,
      bg: colors.marginBlue
    },
    {
      id: 6,
      name: 'Cancelled',
      count: project_status_count?.canceled,
      icon: <OnHoldIcon />,
      bg: colors.cancelRed
    },
    {
      id: 6,
      name: 'Suspended',
      count: project_status_count?.suspended,
      icon: <OnHoldIcon />,
      bg: colors.cancelRed
    }
  ];
  return (
    <BoxWrap>
      {spineer_value ? (
        <SpinnerStyle
          style={{
            margin: '10px 0px 50px 550px'
          }}>
          <PropagateLoader color="#36d7b7" size="15" />
        </SpinnerStyle>
      ) : (
        cards.map((card) => (
          <CardStyle key={card.id} bg={card.bg}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {card.icon}
              <Typography sx={statusstyle}>{card.name}</Typography>
            </Box>
            {card.count}
          </CardStyle>
        ))
      )}
    </BoxWrap>
  );
}
export default CommonCard;
