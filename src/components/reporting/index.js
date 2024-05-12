import { Box, Card, Divider, FormControl, Typography } from '@mui/material';
import { BoxWrapper, DividerStyle, reportingText } from './style';
import { CustomFlex, CustomFlexBox, SearchField } from '../../utils/common_functions';
import colors from '../../theme/colors';
import CustomButton from '../form/CustomButton';
import { CalenderIcon, DownLoadIcon } from '../../theme/SvgIcons';
import CustomSelect from '../form/CustomSelect';
import CustomTextField from '../form/CustomTextField';
import CustomPagination from '../form/CustomPagination';

const reportData = [
  {
    date: 'Sat | 14 Mar, 2020',
    Pname: 'Awali',
    billing: '40 Billed hours',
    by: ['Guriqbaal singh ', ' Reviewed by  Rajvinder Singh'],
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it overlinto'
  },
  {
    date: 'Fri | 13 Mar, 2020',
    Pname: 'Awali',
    billing: '40 Billed hours',
    by: ['Guriqbaal singh ', ' Reviewed by  Rajvinder Singh'],
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it overlinto'
  },
  {
    date: 'Sun | 14 Feb, 2020',
    Pname: 'Awali',
    billing: '40 Billed hours',
    by: ['Guriqbaal singh ', ' Reviewed by  Rajvinder Singh'],
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it overlinto'
  },
  {
    date: 'Sat | 14 Mar, 2020',
    Pname: 'Awali',
    billing: '40 Billed hours',
    by: ['Guriqbaal singh ', ' Reviewed by  Rajvinder Singh'],
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it overlinto'
  },
  {
    date: 'Fri | 13 Mar, 2020',
    Pname: 'Awali',
    billing: '40 Billed hours',
    by: ['Guriqbaal singh ', ' Reviewed by  Rajvinder Singh'],
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it overlinto'
  },
  {
    date: 'Sun | 14 Feb, 2020',
    Pname: 'Awali',
    billing: '40 Billed hours',
    by: ['Guriqbaal singh ', ' Reviewed by  Rajvinder Singh'],
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it overlinto'
  },
  {
    date: 'Sat | 14 Mar, 2020',
    Pname: 'Awali',
    billing: '40 Billed hours',
    by: ['Guriqbaal singh ', ' Reviewed by  Rajvinder Singh'],
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it overlinto'
  },
  {
    date: 'Fri | 13 Mar, 2020',
    Pname: 'Awali',
    billing: '40 Billed hours',
    by: ['Guriqbaal singh ', ' Reviewed by  Rajvinder Singh'],
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it overlinto'
  },
  {
    date: 'Sun | 14 Feb, 2020',
    Pname: 'Awali',
    billing: '40 Billed hours',
    by: ['Guriqbaal singh ', ' Reviewed by  Rajvinder Singh'],
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it overlinto'
  }
];

const options = [
  { value: 'a-z', label: 'A to Z ' },
  { value: 'a-z', label: 'Z to A ' },
  { value: 'a-z', label: 'Newest One ' },
  { value: 'a-z', label: 'Oldest One ' }
];
const Reporting = () => {
  return (
    <Box>
      <CustomFlex>
        <Typography sx={reportingText(colors.nero, '22px', 600)}>Reporting</Typography>
        <CustomButton width="168px" iconAlign="right" bg={colors.darkSkyBlue} label="Export PDF">
          <DownLoadIcon />
        </CustomButton>
      </CustomFlex>
      <Card sx={{ padding: '30px', marginTop: '10px' }}>
        {/* <CustomFlexBox>
          <SearchField
            sx={{
              // height: '43px',
              marginLeft: '0px !important',
              background: `${colors.white} !important`,
              border: `1px solid ${colors.Gray90}`,
              borderRadius: '4px !important',
              '& .MuiOutlinedInput-input': {
                background: `${colors.white} !important`
              }
            }}
          />
          <CustomSelect
            width="300px"
            sx={{
              ml: '12px',
              mr: '12px',
              '& fieldset': {
                borderColor: colors.Gray90
              }
            }}
            option={[{ label: 'All', value: 'All' }]}
            name="projectPlatform"
            label=" "
            placholder=" Select Project"
          />
          <CustomSelect
            width="300px"
            placholder="Select Employee"
            sx={{
              '& fieldset': {
                borderColor: colors.Gray90
              }
            }}
            option={[{ label: 'All', value: 'All' }]}
            name="projectPlatform"
          />
          <DividerStyle orientation="horizontal" />
          <CustomTextField sx={{ maxWidth: '150px' }} type="date" />
          <CustomTextField sx={{ marginLeft: '10px', maxWidth: '150px' }} type="date" />
        </CustomFlexBox> */}

        <CustomFlexBox sx={{ marginBottom: '20px', justifiContent: 'spaceBetween', width: '100%' }}>
          <div style={{ width: '100%' }}>
            <SearchField
              sx={{
                marginLeft: '0px !important',
                background: `${colors.white} !important`,
                border: `1px solid ${colors.Gray90}`,
                borderRadius: '4px !important',
                '& .MuiOutlinedInput-input': {
                  background: `${colors.white} !important`
                }
              }}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <div>
              <FormControl sx={{ ml: '10px' }}>
                <CustomSelect width="130px" height="47px" option={options} />
              </FormControl>
            </div>

            <div style={{ marginLeft: '10px', width: '100%' }}>
              <FormControl>
                <CustomSelect width="130px" height="47px" option={options} />
              </FormControl>
            </div>
            <div>
              <DividerStyle orientation="horizontal" />
            </div>
            <div style={{ display: 'flex' }}>
              <CustomTextField sx={{ maxWidth: '150px' }} type="date" />
              <CustomTextField sx={{ marginLeft: '10px', maxWidth: '150px' }} type="date" />
            </div>
          </div>
        </CustomFlexBox>
        {reportData.map((report, key) => {
          return (
            <Box sx={{ marginTop: '20px' }} key={key}>
              <CustomFlexBox alignItems="start">
                <Typography
                  sx={{
                    ...reportingText(colors.nero, '14px', 500),
                    minWidth: '130px',
                    marginRight: '10px'
                  }}>
                  {report.date}
                </Typography>
                <BoxWrapper>
                  <Typography sx={reportingText(colors.darkSkyBlue, '14px', 500)}>
                    {report.Pname}
                  </Typography>
                  <Typography sx={reportingText('', '12px', 400)}>{report.desc}</Typography>
                  <Typography
                    sx={{
                      ...reportingText(colors.parrotGreenLight, '12px', 400),
                      mt: '10px',
                      mb: '10px'
                    }}>
                    <CalenderIcon /> {report.billing}
                  </Typography>
                  <Typography sx={{ ...reportingText(colors.redLight80, '14px', 400), mb: '10px' }}>
                    by {report.by.join('|').toString()}
                  </Typography>
                </BoxWrapper>
              </CustomFlexBox>
              <Divider
                sx={{
                  border: `1px solid ${colors.Gray90}`,
                  marginTop: '20px'
                }}
                orientation="horizontal"
              />
            </Box>
          );
        })}
        <CustomPagination />
      </Card>
    </Box>
  );
};

export default Reporting;
