import { Box, Typography } from '@mui/material';
import { SpinnerStyle, Wrapper, labelStyle } from '../style';
import SelectProject from '../SelectProject';
import DataNotFound from '../../../utils/NotFound';
import { useEffect, useState } from 'react';
import CustomDrawer from '../../form/CustomDrawer';
import DocumentFields from './DocumentFields';
import DocumentList from './DocumentList';
import { useDispatch, useSelector } from 'react-redux';
import { getDocumentAction } from '../../../redux/project/action';
import { useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

const AddDocument = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const projetct_id = useLocation().state?.project_id;

  // console.log(projetct_id, 'kkkkkkkkks');

  useEffect(() => {
    dispatch(getDocumentAction(projetct_id));
  }, []);

  const { document_list } = useSelector((state) => state?.project);
  const { project_view } = useSelector((state) => state.project);
  const { spineer_value } = useSelector((e) => e.project);

  console.log(document_list, 'document_list');
  return (
    <Box>
      <Wrapper sx={{ marginBottom: '20px' }}>
        <Typography sx={{ ...labelStyle() }}>{project_view?.name} </Typography>
        <SelectProject />
      </Wrapper>

      {spineer_value ? (
        <SpinnerStyle>
          <PropagateLoader color="#36d7b7" size="15" />
        </SpinnerStyle>
      ) : document_list.length > 0 ? (
        <DocumentList
          onClick={() => setOpen(true)}
          document_list={document_list}
          projetct_id={projetct_id}
        />
      ) : (
        <DataNotFound
          text="No Document added yet
          Please add new Documents"
          label="+ Add Documents"
          path={() => setOpen(true)}
        />
      )}
      {open && (
        <CustomDrawer open={open} setOpen={() => setOpen(false)}>
          <DocumentFields onClick={() => setOpen(false)} />
        </CustomDrawer>
      )}
    </Box>
  );
};
export default AddDocument;
