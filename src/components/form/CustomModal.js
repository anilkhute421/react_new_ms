import * as React from 'react';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { ConfimDeleteIcon } from '../../theme/SvgIcons';
import { Box, Typography } from '@mui/material';
import { labelStyle } from '../employee/style';
import colors from '../../theme/colors';
import CustomButton from './CustomButton';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import {
  deleteChangeReqAction,
  deleteChangeReqLinkAction,
  deleteDocumentAction,
  deleteMilestoneAction,
  deleteProjectAction,
  deleteTaskAction,
  deleteTeamAction
} from '../../redux/project/action';
import { useNavigate } from 'react-router-dom';

export default function CustomModal(props) {
  const { open, setOpen, id, getmilestoneid, type, projetct_id } = props;
  console.log(getmilestoneid, 'fdsfuhdsfidfhfdjks');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [button1Style, setButton1Style] = React.useState({
    backgroundColor: colors.darkblackblue,
    color: colors.white
  });
  const [button2Style, setButton2Style] = React.useState({
    backgroundColor: colors.ghostWhite,
    color: colors.darkblackblue
  });

  const handleButton1Click = () => {
    setButton1Style({ backgroundColor: colors.darkblackblue, color: 'white' });
    setButton2Style({ backgroundColor: colors.ghostWhite, color: colors.darkblackblue });
    setOpen(false);
  };

  const handleButton2Click = () => {
    setButton1Style({ backgroundColor: colors.ghostWhite, color: colors.darkblackblue });
    setButton2Style({ backgroundColor: colors.darkblackblue, color: 'white' });
    console.log(id, 'deleteid');
    if (type === 'project_del') {
      // deleteProjectAction;
      dispatch(deleteProjectAction(id));
      navigate('/project');
    } else if (type === 'document_del') {
      dispatch(deleteDocumentAction(id, projetct_id));
      // navigate('/project');
    } else if (type === 'changeReq_del') {
      dispatch(deleteChangeReqAction(id, projetct_id));
      // navigate('/project');
    } else if (type === 'changeReqLink_del') {
      dispatch(deleteChangeReqLinkAction(id, getmilestoneid));
      // navigate('/project');
    } else if (type === 'task_del') {
      dispatch(deleteTaskAction(id, projetct_id));
      // navigate('/project');
    } else if (type === 'team_del') {
      dispatch(deleteTeamAction(id, projetct_id, getmilestoneid));
      // navigate('/project');
    } else {
      dispatch(deleteMilestoneAction(id, getmilestoneid));
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen()}>
      <ConfirmBox>
        <MainContainerModal style={{ margin: '40px auto' }}>
          <DeleteWrapper>
            <div style={{ position: 'absolute', top: '18px', left: '20px' }}>
              <ConfimDeleteIcon />
            </div>
          </DeleteWrapper>
          <DelText style={{ marginTop: '10px', padding: '0px 60px' }}>
            <Typography
              sx={{
                ...labelStyle(colors.darkSkyBlue, '20px', 600),
                textAlign: 'center',
                paddingBottom: '10px'
              }}>
              Are You Sure?
            </Typography>
            <Typography sx={{ ...labelStyle(colors.grayLight, '14px', 500) }}>
              Do you really want to delete these Records? This Process cannot be undone.
            </Typography>
          </DelText>
          <ButtonWrapper
            style={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'space-between',
              padding: '15px 40px'
            }}>
            <div>
              <CustomButton
                iconAlign={'left'}
                variant="editBtn"
                label="Cancel"
                width="177px"
                onClick={handleButton1Click}
                bg={button1Style.backgroundColor}
                color={button1Style.color}
              />
            </div>
            <div>
              <CustomButton
                //   onClick={() => onClick()}
                iconAlign={'left'}
                variant="editBtn"
                label="Delete"
                width="177px"
                onClick={handleButton2Click}
                bg={button2Style.backgroundColor}
                color={button2Style.color}
              />
            </div>
          </ButtonWrapper>
        </MainContainerModal>
      </ConfirmBox>
    </Dialog>
  );
}

CustomModal.propTypes = {
  open: PropTypes.func,
  setOpen: PropTypes.func,
  id: PropTypes.string,
  getmilestoneid: PropTypes.string,
  type: PropTypes.string,
  projetct_id: PropTypes.string
};

const ConfirmBox = styled(Box)`
  width: 446px;
  height: 306.64px;
  display: flex;
  background: colors.ghostWhite;
`;

const MainContainerModal = styled(Box)`
  margin: 40px auto;
`;

const DeleteWrapper = styled(Box)`
  width: 80px;
  height: 80px;
  background: colors.white;
  boxshadow: 0px 14px 28px rgba(0, 0, 0, 0.18);
  borderradius: 50px;
  position: relative;
  margin: 0px auto;
`;

const DelText = styled(Box)`
  margin-top: 10px;
  padding: 0px 60px;
`;

const ButtonWrapper = styled(Box)`
  display: flex;
  textalign: 'center;
justifyContent: ' space-between;
  padding: 15px 40px;
`;
