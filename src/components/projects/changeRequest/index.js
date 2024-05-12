import { Box, Button, Typography } from '@mui/material';
import DataNotFound from '../../../utils/NotFound';
import CustomTable from '../../form/CustomTable';
import { ContainerStyle, labelStyle } from '../../employee/style';
import { getprojetcsRows, headCells } from '../changeRequest/reqListing';
import CustomDrawer from '../../form/CustomDrawer';
import { useEffect, useState } from 'react';
import { change_req, employee_not_found, req_index_heading } from './reqText';
import { CustomFlexBox, SearchField } from '../../../utils/common_functions';
import colors from '../../../theme/colors';
import SelectProject from '../SelectProject';
import { DividerStyle, SpinnerStyle } from '../style';
import ChangeReq from './createChangeReq';
import { useDispatch, useSelector } from 'react-redux';
import { getChangeReqAction, viewChangeReqAction } from '../../../redux/project/action';
import CustomModal from '../../form/CustomModal';
import { useLocation } from 'react-router-dom';
import EditChangeReq from './editChangeReq';
import { PropagateLoader } from 'react-spinners';
// import CustomMenu from '../../form/CustomMenu';

function ChaReq() {
  const [open, setOpen] = useState(false);
  const [openD, setOpenD] = useState({ status: false, id: '', type: '' });
  const [searchText, setSearchText] = useState('');

  const projetct_id = useLocation().state?.project_id;
  console.log(projetct_id, 'projetct_id');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChangeReqAction(projetct_id));
  }, []);

  useEffect(() => {
    if (openD?.type === 'edit') {
      dispatch(viewChangeReqAction(openD?.id));
    }
  }, [openD?.type === 'edit']);

  // const handleData = (data) => {
  //   Process the data or trigger actions
  //   console.log(data, 'dhfjdhfhkdjsfhjkdshfdjkshf');
  //   console.log('anil');
  //   dispatch(viewChangeReqAction(openD?.id));
  // };

  const { changeReq_list } = useSelector((state) => state?.project);
  // console.log(openD, 'changeReq_list');
  const { changeReq_view } = useSelector((state) => state?.project);
  const { spineer_value } = useSelector((e) => e.project);

  return (
    <ContainerStyle>
      <Typography sx={{ ...labelStyle('#242424', '22px', 700), margin: '10px 0px 20px 0px' }}>
        {req_index_heading}
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
              <Typography sx={{ ...labelStyle('white', '12px', 500) }}>{change_req}</Typography>
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
        ) : changeReq_list && changeReq_list.length > 0 ? (
          <CustomTable
            rows={getprojetcsRows(changeReq_list, setOpenD, projetct_id, searchText)}
            headCells={headCells}
          />
        ) : (
          <DataNotFound label={change_req} path={() => setOpen(true)} text={employee_not_found} />
        )}
      </Box>
      {open && (
        <CustomDrawer open={open} setOpen={() => setOpen(false)}>
          <ChangeReq setOpen={() => setOpen(false)} />
        </CustomDrawer>
      )}
      {openD?.status && openD?.type === 'edit' && (
        <CustomDrawer
          open={openD.status}
          setOpen={() => setOpenD({ status: false, id: '', type: '' })}>
          {changeReq_view && Object.keys(changeReq_view).length > 0 && (
            <EditChangeReq
              setOpen={() => setOpenD({ status: false, id: '', type: '' })}
              listing_id={openD.id}
              changeReq_view={changeReq_view}
            />
          )}
        </CustomDrawer>
      )}
      {openD?.status && openD?.type === 'delete' && (
        <CustomModal
          open={openD?.status}
          setOpen={() => setOpenD({ status: false, id: '', type: '' })}
          id={openD?.id}
          projetct_id={projetct_id}
          type={'changeReq_del'}></CustomModal>
      )}
    </ContainerStyle>
  );
}
export default ChaReq;
