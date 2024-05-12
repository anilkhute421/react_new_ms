import { Box, Card, List, Typography } from '@mui/material';
import { Wrapper, labelStyle } from '../style';
import SelectProject from '../SelectProject';
import styled from '@emotion/styled';
import colors from '../../../theme/colors';

const Activity = () => {
  const ActivityData = [
    {
      date: 'Sat | 14 Mar, 2020',
      milestone: 'Milestone #1 Completed ',
      milestoneEdit: 'MIlestone #2 Due date was changed ',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClinto',
      milestoneCreate: 'Milestone#1 created'
    },
    {
      date: 'Sat | 14 Mar, 2020',
      milestone: 'Milestone #1 Completed ',
      milestoneEdit: 'MIlestone #2 Due date was changed ',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClinto',
      milestoneCreate: 'Milestone#1 created'
    }
  ];
  return (
    <Box>
      <Wrapper sx={{ marginBottom: '20px' }}>
        {' '}
        <Typography sx={{ ...labelStyle() }}>Awali assest sharing app </Typography>
        <SelectProject />
      </Wrapper>

      <Card>
        <List>
          {ActivityData.map((value, index) => {
            return (
              <BoxWrapper key={index}>
                <MainContent>
                  <div style={{ width: '216px' }}>
                    <Typography sx={{ ...labelStyle(colors.nero, '14px', 500) }}>
                      {value.date}
                    </Typography>
                  </div>
                  <MileStoneDetails>
                    <Typography
                      sx={{
                        ...labelStyle(colors.darkSkyBlue, '14px', 500),
                        borderBottom: '1px solid #E8ECEE',
                        padding: '0px 0px 10px 0px',
                        margin: '0px 0px 10px 0px'
                      }}>
                      {value.milestone}
                    </Typography>
                    <Typography
                      sx={{ ...labelStyle(colors.black, '16px', 400), margin: '0px 0px 30px 0px' }}>
                      {value.milestoneEdit}
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle(colors.pink80, '14px', 400),
                        padding: '0px 0px 10px 0px'
                      }}>
                      Notes
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle(colors.nero, '12px', 400),
                        borderBottom: '1px solid colors.gray91',
                        paddingBottom: '10px',
                        margin: '0px 0px 10px 0px'
                      }}>
                      {value.text}
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle(colors.nero, '14px', 500),
                        borderBottom: '1px solid  colors.gray91',
                        paddingBottom: '10px',
                        margin: '0px 0px 45px 0px'
                      }}>
                      {value.milestoneCreate}
                    </Typography>
                  </MileStoneDetails>
                </MainContent>
              </BoxWrapper>
            );
          })}
        </List>
      </Card>
    </Box>
  );
};
export default Activity;

const MainContent = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between'
});

const MileStoneDetails = styled(Box)({
  width: '1030px',
  margin: '0 auto'
});

const BoxWrapper = styled(Box)({
  borderBottom: '1px solid #E5E5E5',
  margin: '45px auto',
  padding: '0px 20px'
});
