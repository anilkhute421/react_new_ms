import { Box, Button, Typography } from '@mui/material';
import DataNotFound from '../../../utils/NotFound';
import CustomTable from '../../form/CustomTable';
import { ContainerStyle, labelStyle } from '../../employee/style';
import { getprojetcsRows, headCells } from './taskList';
import CustomDrawer from '../../form/CustomDrawer';
import { useEffect, useState } from 'react';
// import { change_req, employee_not_found, req_index_heading } from './reqText';
import { CustomFlexBox, SearchField } from '../../../utils/common_functions';
import colors from '../../../theme/colors';
import SelectProject from '../SelectProject';
import { DividerStyle, SpinnerStyle } from '../style';
import CreateTask from './createTask';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskAction, viewTaskAction } from '../../../redux/project/action';
import CustomModal from '../../form/CustomModal';
import { useLocation } from 'react-router-dom';
// import EditChangeReq from './editChangeReq';
import EditTask from './editTask';
import { PropagateLoader } from 'react-spinners';
// import CustomMenu from '../../form/CustomMenu';

function Task() {
  const [open, setOpen] = useState(false);
  const [openD, setOpenD] = useState({ status: false, id: '', type: '' });
  const [searchText, setSearchText] = useState('');

  // const [openE, setOpenE] = useState({ status: false, id: '' });

  const projetct_id = useLocation().state?.project_id;
  // console.log(projetct_id, 'projetct_id');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaskAction(projetct_id));
  }, []);

  useEffect(() => {
    if (openD?.type === 'edit') {
      dispatch(viewTaskAction(openD?.id));
    }
  }, [openD?.type === 'edit']);

  const { task_list, task_view } = useSelector((state) => state?.project);
  // const { changeReq_view } = useSelector((state) => state?.project);
  const { spineer_value } = useSelector((state) => state?.project);
  // console.log(changeReq_view, 'sfdsfdsf');

  return (
    <ContainerStyle>
      <Typography sx={{ ...labelStyle('#242424', '22px', 700), margin: '10px 0px 20px 0px' }}>
        {'Task'}
      </Typography>
      <Box>
        <CustomFlexBox sx={{ marginBottom: '30px' }}>
          <div style={{ width: '100%' }}>
            <SearchField
              setSearchText={setSearchText}
              sx={{
                marginLeft: '0px !important',
                // background: `${colors.Gray90} !important`,
                border: `1px solid ${colors.grayLight}`,
                borderRadius: '4px !important',
                '& .MuiOutlinedInput-input': {
                  //   background: `${colors.Gray90} !important`
                }
              }}
            />
          </div>

          <div style={{ marginLeft: '20px' }}>
            <Button
              onClick={() => setOpen(true)}
              sx={{
                width: '150px',
                background: colors.darkSkyBlue,
                marginTop: '3px',
                color: 'white',
                '&:hover': {
                  backgroundColor: colors.darkSkyBlue
                },
                fontSize: '16px',
                fontWeight: 500
              }}>
              <Typography sx={{ ...labelStyle('white', '12px', 500) }}>{'+ Add Task'}</Typography>
            </Button>
          </div>
          <div>
            <DividerStyle orientation="horizontal" />
          </div>
          <div style={{ marginLeft: '0px' }}>
            <SelectProject height="47px" />
          </div>
        </CustomFlexBox>
        {spineer_value ? (
          <SpinnerStyle>
            <PropagateLoader color="#36d7b7" size="15" />
          </SpinnerStyle>
        ) : task_list && task_list.length > 0 ? (
          <CustomTable
            rows={getprojetcsRows(task_list, setOpenD, projetct_id, searchText)}
            headCells={headCells}
          />
        ) : (
          <DataNotFound
            label={'+ ADD TASK'}
            path={() => setOpen(true)}
            text={'No Task created Yet Kindly create Task'}
          />
        )}
      </Box>
      {open && (
        <CustomDrawer open={open} setOpen={() => setOpen(false)}>
          <CreateTask setOpen={() => setOpen(false)} />
        </CustomDrawer>
      )}
      {openD?.status && openD?.type === 'edit' && (
        <CustomDrawer
          open={openD.status}
          setOpen={() => setOpenD({ status: false, id: '', type: '' })}>
          {task_view && Object.keys(task_view).length > 0 && (
            <EditTask
              setOpen={() => setOpenD({ status: false, id: '', type: '' })}
              listing_id={openD.id}
              task_view={task_view}
            />
          )}
        </CustomDrawer>
      )}
      {openD?.status && openD?.type === 'delete' && (
        <CustomModal
          open={openD?.status}
          setOpen={() => setOpenD({ status: false, id: '', type: '' })}
          id={openD?.id}
          // geid={getmilestoneid}
          type={'task_del'}
          projetct_id={projetct_id}></CustomModal>
      )}
    </ContainerStyle>
  );
}
export default Task;
