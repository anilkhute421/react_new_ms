import { Box, Button, Card, List, ListItem, Typography } from '@mui/material';
import { SpinnerStyle, Wrapper, labelStyle } from '../style';
import SelectProject from '../SelectProject';
import DataNotFound from '../../../utils/NotFound';
import { useEffect, useState } from 'react';
import CustomDrawer from '../../form/CustomDrawer';
import MileStoneFields from './MileStoneFields';
import { ListingIcon } from '../../../theme/SvgIcons';
import colors from '../../../theme/colors';
import { textStyle } from './style';
import CustomMenu from '../../form/CustomMenu';
import { CustomFlex, SearchField } from '../../../utils/common_functions';
import ArrowBadge from '../../form/ArrowBadge';
import ViewMileStone from './ViewMilestone';
import { useDispatch, useSelector } from 'react-redux';
import { getMileStoneAction, viewMilestoneAction } from '../../../redux/project/action';
import { useLocation } from 'react-router-dom';
import EditMilestone from './EditMilestone';
import { PropagateLoader } from 'react-spinners';
// import { Controller } from 'react-hook-form';

// const milestoneList = [...Array(20).keys()].map((i) => {
//   return {
//     name: `Milestone #${i + 1}`,
//     priority: 'High',
//     date: 'Due date: 25 Mar, 2020'
//   };
// });

const menuoption = [
  { value: 'edit', label: 'Edit' },
  { value: 'delete', label: 'Delete' }
];

const CreateMilestone = () => {
  const [open, setOpen] = useState(false);
  const [openE, setOpenE] = useState(false);
  const { milesone_view } = useSelector((state) => state?.project);
  const [searchText, setSearchText] = useState('');

  console.log(searchText, 'uhgdfhg');

  const [milestonelistingId, setMilestonelistingId] = useState('');

  const [viewOpen, setViewOpen] = useState(false);
  const dispatch = useDispatch();
  const id = useLocation()?.state?.project_id;
  // console.log(id, 'idddddd');
  useEffect(() => {
    // console.log('api calllll');
    dispatch(getMileStoneAction(id));
  }, []);

  const { milestone_list } = useSelector((state) => state?.project);
  // console.log(milestone_list, 'milestone_list');

  const handlesetvale = (list) => {
    setViewOpen(true);
    setMilestonelistingId(list);
  };

  const onChange = (e, id) => {
    console.log(e, id, 'onChange');
    setMilestonelistingId(id);
    if (e.value === 'edit') {
      console.log('anil');
      dispatch(viewMilestoneAction(id));
      setOpenE(true);
    }
  };

  const { project_view } = useSelector((state) => state.project);
  const { spineer_value } = useSelector((e) => e.project);

  // console.log(milestonelistingId, 'milestonelistingId');

  return (
    <Box>
      <Wrapper sx={{ marginBottom: '20px' }}>
        <Typography sx={{ ...labelStyle() }}>{project_view?.name} </Typography>
        <Box sx={{ display: 'flex' }}>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            sx={{
              width: '162px',
              height: '56px',
              background: colors.darkSkyBlue,
              marginRight: '20px',
              fontSize: '13px'
            }}>
            + New milestone
          </Button>
          <SelectProject id={location} />
        </Box>
      </Wrapper>

      {spineer_value ? (
        <SpinnerStyle>
          <PropagateLoader color="#36d7b7" size="15" />
        </SpinnerStyle>
      ) : milestone_list?.length > 0 ? (
        <Card>
          <Box sx={{ mx: '30px', my: '20px' }}>
            <SearchField
              setSearchText={setSearchText}
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
          <List>
            {milestone_list
              ?.filter((list) => list.name.toLowerCase().includes(searchText.toLowerCase()))
              .map((list, key) => {
                return (
                  <ListItem
                    sx={{
                      borderTop: `1px solid ${colors.gray91}`,
                      padding: '20px',
                      '&:hover': {
                        backgroundColor: colors.skyblueLight
                      }
                    }}
                    key={key}
                    disablePadding>
                    <ListingIcon />
                    <CustomFlex sx={{ width: '100%' }}>
                      <Box sx={{ ml: '3rem', mb: '4px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'self-end' }}>
                          <Typography
                            onClick={() => handlesetvale(list?.id)}
                            sx={{
                              ...textStyle(colors.darkSkyBlue, '16px', 500),
                              mr: '8px',
                              cursor: 'pointer'
                            }}>
                            {list.name}
                          </Typography>
                          <ArrowBadge
                            bg={
                              list.priority === 'Low'
                                ? colors.info
                                : list.priority === 'Medium'
                                ? colors.lightOrange
                                : list.priority === 'High'
                                ? colors.bagdePink
                                : ''
                            }
                            text={list.priority}
                          />
                        </Box>

                        <Typography sx={{ ...textStyle(colors.grayLight, '14px', 400) }}>
                          {`Due date : ${list.due_date}`}
                        </Typography>
                      </Box>
                      {/* <Controller
                      name={'actionType'}
                      control={control}
                      rules={{
                        required: `Priority  Label is required`
                      }}
                      render={({ field: { onChange } }) => (
                        <CustomMenu
                          name="actionType"
                          options={menuoption}
                          onChange={onChange}
                          list={list}
                        />
                      )}
                    /> */}
                      <CustomMenu
                        option={menuoption}
                        onChange={onChange}
                        id={list?.id}
                        getmilestoneid={id}
                        // setOpenE={() => setOpenE(true)}
                      />
                    </CustomFlex>
                  </ListItem>
                );
              })}
            {milestone_list.length > 0 &&
              milestone_list.filter((list) =>
                list.name.toLowerCase().includes(searchText.toLowerCase())
              ).length === 0 && (
                <DataNotFound
                  text="No Data Found"
                  label="+ Create Milestone"
                  path={() => setOpen(true)}
                />
              )}
          </List>
        </Card>
      ) : (
        <DataNotFound
          text="No Milestone created Yet Kindly Create Milestone First"
          label="+ Create Milestone"
          path={() => setOpen(true)}
        />
      )}
      {viewOpen && (
        <CustomDrawer
          open={viewOpen}
          setOpen={() => setViewOpen(false)}
          maxWidth="1000px"
          overflow="hidden">
          <ViewMileStone setOpen={() => setViewOpen(false)} id={milestonelistingId} />
        </CustomDrawer>
      )}
      {open && (
        <CustomDrawer open={open} setOpen={() => setOpen(false)}>
          <MileStoneFields setOpen={setOpen} />
        </CustomDrawer>
      )}
      {openE && (
        <CustomDrawer open={openE} setOpen={() => setOpenE(false)}>
          {milesone_view && Object.keys(milesone_view).length > 0 && (
            <EditMilestone
              setOpen={setOpenE}
              milestonelistingId={milestonelistingId}
              milesone_view={milesone_view}
            />
          )}
        </CustomDrawer>
      )}
    </Box>
  );
};
export default CreateMilestone;
