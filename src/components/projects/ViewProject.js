import { Box, Button, Card, Divider, Link, Typography } from '@mui/material';
import { ChipStyle, CustomArea, Wrapper, labelStyle } from './style';
import colors from '../../theme/colors';
import CustomMenu from '../form/CustomMenu';
import SelectProject from './SelectProject';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { viewProjectAction } from '../../redux/project/action';
import { DownArrow } from '../../theme/SvgIcons';
import CustomDrawer from '../form/CustomDrawer';
import EditProject from './EditProject';
import NewProject from './NewProject';

const menuoption = [
  { value: 'edit', label: 'Edit' },
  { value: 'delete', label: 'Delete' }
];
const ViewProject = () => {
  const [openE, setOpenE] = useState(false);
  const [openA, setOpenA] = useState(false);

  const location = useLocation()?.state?.project_id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewProjectAction(location));
  }, []);

  const { project_view } = useSelector((state) => state.project);

  const sdate = new Date(project_view?.start_date);

  // Increase the date by one day
  sdate.setDate(sdate.getDate() - 1);

  const startDate = new Date(sdate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const edate = new Date(project_view?.end_date);

  // Increase the date by one day
  edate.setDate(edate.getDate() - 1);

  const lastDate = new Date(edate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const onChange = (e, id) => {
    console.log(e, id, 'onChange');
    // setMilestonelistingId(id);
    if (e.value === 'edit') {
      // console.log('anil');
      // dispatch(viewMilestoneAction(id));
      setOpenE(true);
    }
  };

  // const sdate = new Date(project_view?.start_date);
  // const ldate = new Date(project_view?.end_date);

  // const options = { day: 'numeric', month: 'long', year: 'numeric' };
  // const startDate = sdate.toLocaleDateString('en-US', options);
  // const lastDate = ldate.toLocaleDateString('en-US', options);

  const commontext = (color = colors.nero, text) => {
    return (
      <Typography sx={{ ...labelStyle(color, '14px', 500), lineHeight: '18px' }}>{text}</Typography>
    );
  };
  return (
    <Box>
      <Wrapper>
        <Typography sx={{ ...labelStyle() }}>{project_view?.name} </Typography>
        <Box sx={{ display: 'flex' }}>
          <Button
            onClick={() => setOpenA(true)}
            variant="contained"
            sx={{
              width: '162px',
              height: '56px',
              background: colors.darkSkyBlue,
              marginRight: '20px'
            }}>
            + New project
          </Button>
          <SelectProject id={location} />
        </Box>
      </Wrapper>
      <Wrapper sx={{ marginTop: '20px' }}>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ ...labelStyle(colors.nero, '14px', 500), marginRight: '23px' }}>
            Project Name
          </Typography>
          <Typography sx={{ ...labelStyle(colors.darkSkyBlue, '22px', 700) }}>
            {project_view?.name}
          </Typography>
        </Box>

        <Box style={{ display: 'flex', float: 'right' }}>
          <Box>
            <Box style={{ display: 'flex' }}>
              <Typography sx={{ ...labelStyle(colors.nero, '12px', 500), marginRight: '23px' }}>
                {startDate}
              </Typography>
              <Box style={{ marginRight: '15px' }}>
                <DownArrow />
              </Box>
            </Box>
            <Typography sx={{ ...labelStyle(colors.grayLight, '10px', 400), marginRight: '23px' }}>
              Start Date
            </Typography>
          </Box>
          <Box>
            <Box style={{ display: 'flex' }}>
              <Typography sx={{ ...labelStyle(colors.nero, '12px', 500), marginRight: '23px' }}>
                {lastDate}
              </Typography>
              <Box style={{ marginRight: '15px' }}>
                <DownArrow />
              </Box>
            </Box>
            <Typography sx={{ ...labelStyle(colors.grayLight, '10px', 500), marginRight: '23px' }}>
              Last Date
            </Typography>
          </Box>
          <CustomMenu
            option={menuoption}
            onChange={onChange}
            type={'project_del'}
            id={location}
            // setOpenE={() => setOpenE(true)}
          />
        </Box>
      </Wrapper>
      <Card sx={{ p: '20px', marginTop: '15px' }}>
        <Box sx={{ mt: '16px', position: 'relative' }}>
          <Typography
            sx={{
              ...labelStyle(colors.grayLight, '10px', 400),
              position: 'absolute',
              m: '10px'
            }}>
            Description
          </Typography>
          <CustomArea value={project_view?.notes} disabled />
        </Box>
        {/* <CustomArea value={project_view?.notes}></CustomArea> */}
        <Wrapper
          sx={{
            maxWidth: '500px',
            marginTop: '30px',
            marginLeft: '30px',
            '& th': {
              minWidth: '150px'
            }
          }}>
          <table>
            <tr>
              <th style={{ paddingRight: '15px' }}> {commontext('', 'Client Name')}</th>
              <th style={{ paddingRight: '15px' }}> {commontext('', 'Upwork Hired ID')}</th>
              <th>{commontext('', 'Upwork URL')}</th>
            </tr>
            <tr>
              <td style={{ paddingRight: '15px' }}>
                {commontext(colors.grayLight, project_view?.client_name)}
              </td>
              <td style={{ paddingRight: '15px' }}>
                {commontext(colors.grayLight, project_view?.hired_id)}
              </td>
              <td>
                <Link
                  target="_blank"
                  href={project_view?.url}
                  sx={{ ...labelStyle(colors.rudyBlue, '14px', 500), lineHeight: '18px' }}>
                  {project_view?.url}
                </Link>
              </td>
            </tr>
          </table>
        </Wrapper>
        <Divider sx={{ borderColor: colors.Gray90, marginTop: '20px' }} orientation="horizontal" />
        <Wrapper
          sx={{
            maxWidth: '500px',
            paddingTop: '30px',
            marginLeft: '30px',
            '& th': {
              minWidth: '150px'
            }
          }}>
          <table>
            <tr>
              <th style={{ paddingRight: '15px' }}> {commontext('', 'App Name')}</th>
              <th style={{ paddingRight: '15px' }}> {commontext('', 'Project Budget')}</th>
              <th>{commontext('', 'No oF Hours ')}</th>
            </tr>
            <tr>
              <td style={{ paddingRight: '15px' }}>
                {commontext(colors.grayLight, project_view?.app_name)}
              </td>
              <td style={{ paddingRight: '15px' }}>
                {commontext(colors.grayLight, `USD ${project_view?.budget}`)}
              </td>
              <td> {commontext(colors.grayLight, `${project_view?.no_of_hours} hrs`)}</td>
            </tr>
          </table>
        </Wrapper>
        <Divider sx={{ borderColor: colors.Gray90, marginTop: '25px' }} orientation="horizontal" />
        <Box
          sx={{
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'self-start',
            marginTop: '25px',
            marginLeft: '30px',
            paddingBottom: '5rem'
          }}>
          {commontext('', 'Platform')}
          <Box sx={{ marginTop: '18px' }}>
            <ChipStyle bg={colors.lightRed} label={project_view?.platform} />
            {/* <ChipStyle bg={colors.info} label="Design" /> */}
          </Box>
        </Box>
      </Card>
      {openE && (
        <CustomDrawer open={openE} setOpen={() => setOpenE(false)}>
          <EditProject setOpen={() => setOpenE(false)} projetcEditId={location} />
        </CustomDrawer>
      )}
      {openA && (
        <CustomDrawer open={openA} setOpen={() => setOpenA(false)}>
          <NewProject setOpen={() => setOpenA(false)} />
        </CustomDrawer>
      )}
    </Box>
  );
};
export default ViewProject;
