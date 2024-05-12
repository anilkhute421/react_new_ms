import { Box, Button, Card, Typography } from '@mui/material';
import { SpinnerStyle, Wrapper, labelStyle } from '../style';
import SelectProject from '../SelectProject';
import DataNotFound from '../../../utils/NotFound';
import { useEffect, useState } from 'react';
import { SearchField } from '../../../utils/common_functions';
import colors from '../../../theme/colors';
// import CustomTable from '../../form/CustomTable';
import TeamList from './TeamList';
import CustomDrawer from '../../form/CustomDrawer';
import AddTeamForm from './AddTeamForm';
import { useLocation } from 'react-router-dom';
import { getTeamAction } from '../../../redux/project/action';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import CustomModal from '../../form/CustomModal';

const AddTeam = () => {
  const id = useLocation()?.state?.project_id;
  // console.log(id, 'ghjghj');
  const [open, setOpen] = useState(false);
  const [openD, setOpenD] = useState({ status: false, id: '', type: '', milestone_id: '' });
  console.log(openD, 'dgfdgfgfgfgdfgdf');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeamAction(id));
  }, []);

  const team_list = useSelector((e) => e.project?.team_list);

  console.log(team_list, 'team_listddddd');
  const { project_view } = useSelector((state) => state.project);
  const { spineer_value } = useSelector((e) => e.project);

  // console.log(team_list, 'team_list');
  return (
    <Box>
      <Wrapper sx={{ marginBottom: '20px' }}>
        <Typography sx={{ ...labelStyle() }}>{project_view?.name}</Typography>
        {/* <SelectProject /> */}
        <Box sx={{ display: 'flex' }}>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            sx={{
              width: '162px',
              height: '56px',
              background: colors.darkSkyBlue,
              marginRight: '20px'
              // fontSize: '13px'
            }}>
            + New Team
          </Button>
          <SelectProject id={location} />
        </Box>
      </Wrapper>

      {open && (
        <CustomDrawer open={open} setOpen={() => setOpen(false)}>
          <AddTeamForm setOpen={() => setOpen(false)} id={location} />
        </CustomDrawer>
      )}

      {spineer_value ? (
        <SpinnerStyle>
          <PropagateLoader color="#36d7b7" size="15" />
        </SpinnerStyle>
      ) : team_list && team_list?.length > 0 ? (
        <>
          <Card style={{ marginBottom: '30px' }}>
            <Box sx={{ mx: '30px', my: '20px' }}>
              <SearchField
                sx={{
                  background: `${colors.white} !important`,
                  border: `1px solid ${colors.Gray90}`,
                  borderRadius: '2px !important',
                  '& .MuiOutlinedInput-input': {
                    background: `${colors.white} !important`
                  }
                }}
              />
            </Box>
          </Card>
          <TeamList team_list={team_list} setOpenD={setOpenD} />
        </>
      ) : (
        <DataNotFound
          text="No Team member assigned yet.
        Click below to add team member"
          label="+ Add Team"
          path={() => setOpen(true)}
        />
      )}

      {openD?.status && openD?.type === 'delete' && (
        <CustomModal
          open={openD?.status}
          setOpen={() => setOpenD({ status: false, id: '', type: '' })}
          id={openD?.id}
          // geid={getmilestoneid}
          type={'team_del'}
          projetct_id={id}
          getmilestoneid={openD?.milestone_id}></CustomModal>
      )}
    </Box>
  );
};

export default AddTeam;
