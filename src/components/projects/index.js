import { Box, Button, FormControl, InputAdornment, MenuItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { SearchIcon } from '../../theme/SvgIcons';
import colors from '../../theme/colors';
import CommonCard from '../../utils/CommonCard';
import DataNotFound from '../../utils/NotFound';
import CustomDrawer from '../form/CustomDrawer';

import {
  BoxWrapper,
  ContainerStyle,
  DividerStyle,
  FieldStyle,
  SelectStyle,
  labelStyle,
  SpinnerStyle
} from './style';
import NewProject from './NewProject';
import ProjectList from './ProjectsList';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectStatusCountAction, getProjects } from '../../redux/project/action';
import { PropagateLoader } from 'react-spinners';

const options = [
  { key: '1', value: 'A to Z ' },
  { key: '2', value: 'Z to A ' },
  { key: '3', value: 'Newest One ' },
  { key: '4', value: 'Oldest One ' }
];

function Projects() {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
    dispatch(getProjectStatusCountAction());
  }, []);

  const { project_list, spineer_value } = useSelector((e) => e.project);
  // const { spineer_value } = useSelector((e) => e.project);
  const { drop_down } = useSelector((e) => e.signIn);

  return (
    <ContainerStyle>
      <Typography sx={{ ...labelStyle(), marginBottom: '20px' }}>Projects</Typography>
      <Box>
        <CommonCard />
        <BoxWrapper>
          <FieldStyle
            onChange={(e) => setSearchText(e.target.value)}
            style={{ maxWidth: '440px' }}
            placeholder="Search task..."
            sx={{ input: { '&::placeholder': { color: colors.grayLight } } }}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
          <FormControl sx={{ ml: '20px', mb: '10px' }}>
            <Typography sx={labelStyle(colors.grayLight, '12px', 400)}>Sort</Typography>
            <SelectStyle>
              {options.map((opt, key) => {
                return (
                  <MenuItem key={key} value={opt?.key}>
                    {opt?.value}
                  </MenuItem>
                );
              })}
            </SelectStyle>
          </FormControl>
          <FormControl sx={{ ml: '34px', mb: '10px' }}>
            <Typography sx={labelStyle(colors.grayLight, '12px', 400)}>Project Platform</Typography>
            {/* <SelectStyle>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </SelectStyle> */}
            <SelectStyle>
              {drop_down?.platform?.map((opt, key) => {
                return (
                  <MenuItem key={key} value={opt?.key}>
                    {opt?.value}
                  </MenuItem>
                );
              })}
            </SelectStyle>
          </FormControl>
          <DividerStyle orientation="vertical" />
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            sx={{ width: '162px', background: colors.darkSkyBlue }}>
            + New project
          </Button>
        </BoxWrapper>
        {spineer_value ? (
          <SpinnerStyle>
            <PropagateLoader color="#36d7b7" size="15" />
          </SpinnerStyle>
        ) : project_list?.length > 0 ? (
          <ProjectList project_list={project_list} searchText={searchText} />
        ) : (
          <>
            <DataNotFound label="+ New project" path={() => setOpen(true)} />
          </>
        )}
      </Box>
      {open && (
        <CustomDrawer open={open} setOpen={() => setOpen(false)}>
          <NewProject setOpen={() => setOpen(false)} />
        </CustomDrawer>
      )}
    </ContainerStyle>
  );
}
export default Projects;
