import { Box } from '@mui/material';
import { Wrapper } from '../style';
import SelectProject from '../SelectProject';
// import { useState } from 'react';
// import CustomDrawer from '../../form/CustomDrawer';
// import DocumentFields from './DocumentFields';
import ChangeReqList from './changeReqList';
import CustomText from '../../form/CustomText';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { viewChangeReqAction } from '../../../redux/project/action';
// import DocumentList from './DocumentList';

const ChangReqDetails = () => {
  //   const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const listing_id = useLocation()?.state?.listingid;
  // console.log(listing_id, 'listing_id');
  useEffect(() => {
    dispatch(viewChangeReqAction(listing_id));
  }, []);

  const { project_view } = useSelector((state) => state?.project);

  return (
    <Box>
      <Wrapper sx={{ marginBottom: '20px' }}>
        <CustomText variant="body_2" sx={{ textAlign: 'start' }}>
          {project_view?.name}
        </CustomText>
        <SelectProject />
      </Wrapper>

      <ChangeReqList onClick={() => setOpen(true)} />
    </Box>
  );
};
export default ChangReqDetails;
