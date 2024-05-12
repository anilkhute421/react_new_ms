import { Box, Grid, IconButton, Typography } from '@mui/material';
import { BoxWrap, ButtonStyle, labelStyle } from '../style';
import { RedCrossIcon } from '../../../theme/SvgIcons';
import colors from '../../../theme/colors';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import CustomSelect from '../../form/CustomSelect';
import { ButtonBox } from './style';
import PropTypes from 'prop-types';
import CustomButton from '../../form/CustomButton';
// import MultiSelect from '../../form/MultiSelect';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createTeamAction, getEmployeeDropDownAction } from '../../../redux/project/action';
import { useLocation } from 'react-router-dom';
import { ImportantMark } from '../../../utils/common_functions';
// import { useLocation } from 'react-router-dom';
// import SelectSearch from '../../form/SelectWithSearch';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ];

// const linkOptions = [
//   { value: 'Requirements', label: 'Project Requirements' },
//   { value: 'Milestone', label: 'Milestone' },
//   { value: 'Website', label: 'Website link' },
//   { value: 'Policy', label: 'Privacy Policy' },
//   { value: 'Conditions', label: 'Terms & Conditions' },
//   { value: 'app', label: 'iOS app' },
//   { value: 'Android', label: 'Android app' },
//   { value: 'Database', label: 'Database' },
//   { value: 'designs', label: 'Mobile app designs' },
//   { value: 'Web', label: 'Web app designs' }
// ];

// const avatar = () => {
//   return (
//     <Avatar
//       sx={{ width: '24px ', height: '24px' }}
//       alt="Remy Sharp"
//       src="https://material-ui.com/static/images/avatar/1.jpg"
//     />
//   );
// };
// const top100Films = [
//   {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     comp: avatar()
//   },
//   {
//     title: 'The Godfather',
//     year: 1972,
//     comp: avatar()
//   },
//   {
//     title: 'The Godfather: Part II',
//     year: 1974,
//     comp: avatar()
//   },
//   {
//     title: 'The Dark Knight',
//     year: 2008,
//     comp: avatar()
//   },
//   {
//     title: '12 Angry Men',
//     year: 1957,
//     comp: avatar()
//   },
//   {
//     title: "Schindler's List",
//     year: 1993,
//     comp: avatar()
//   },
//   {
//     title: 'Pulp Fiction',
//     year: 1994,
//     comp: avatar()
//   },
//   {
//     title: 'The Lord of the Rings: The Return of the King',
//     year: 2003,
//     comp: avatar()
//   },
//   {
//     title: 'The Good, the Bad and the Ugly',
//     year: 1966,
//     comp: avatar()
//   },
//   {
//     title: 'Fight Club',
//     year: 1999,
//     comp: avatar()
//   },
//   {
//     title: 'The Lord of the Rings: The Fellowship of the Ring',
//     year: 2001,
//     comp: avatar()
//   },
//   {
//     title: 'Star Wars: Episode V - The Empire Strikes Back',
//     year: 1980,
//     comp: avatar()
//   },
//   {
//     title: 'Forrest Gump',
//     year: 1994,
//     comp: avatar()
//   },
//   {
//     title: 'Inception',
//     year: 2010,
//     comp: avatar()
//   }
// ];

// const top100Filmsss = [
//   { label: 'The Shawshank Redemption', year: 1994 },
//   { label: 'The Godfather', year: 1972 },
//   { label: 'The Godfather: Part II', year: 1974 },
//   { label: 'The Dark Knight', year: 2008 },
//   { label: '12 Angry Men', year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: 'Pulp Fiction', year: 1994 },
//   {
//     label: 'The Lord of the Rings: The Return of the King',
//     year: 2003
//   },
//   { label: 'The Good, the Bad and the Ugly', year: 1966 },
//   { label: 'Fight Club', year: 1999 },
//   {
//     label: 'The Lord of the Rings: The Fellowship of the Ring',
//     year: 2001
//   },
//   {
//     label: 'Star Wars: Episode V - The Empire Strikes Back',
//     year: 1980
//   },
//   { label: 'Forrest Gump', year: 1994 },
//   { label: 'Inception', year: 2010 },
//   {
//     label: 'The Lord of the Rings: The Two Towers',
//     year: 2002
//   },
//   { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
//   { label: 'Goodfellas', year: 1990 },
//   { label: 'The Matrix', year: 1999 },
//   { label: 'Seven Samurai', year: 1954 },
//   {
//     label: 'Star Wars: Episode IV - A New Hope',
//     year: 1977
//   },
//   { label: 'City of God', year: 2002 },
//   { label: 'Se7en', year: 1995 },
//   { label: 'The Silence of the Lambs', year: 1991 },
//   { label: "It's a Wonderful Life", year: 1946 },
//   { label: 'Life Is Beautiful', year: 1997 },
//   { label: 'The Usual Suspects', year: 1995 },
//   { label: 'Léon: The Professional', year: 1994 },
//   { label: 'Spirited Away', year: 2001 },
//   { label: 'Saving Private Ryan', year: 1998 },
//   { label: 'Once Upon a Time in the West', year: 1968 },
//   { label: 'American History X', year: 1998 },
//   { label: 'Interstellar', year: 2014 },
//   { label: 'Casablanca', year: 1942 },
//   { label: 'City Lights', year: 1931 },
//   { label: 'Psycho', year: 1960 },
//   { label: 'The Green Mile', year: 1999 },
//   { label: 'The Intouchables', year: 2011 },
//   { label: 'Modern Times', year: 1936 },
//   { label: 'Raiders of the Lost Ark', year: 1981 },
//   { label: 'Rear Window', year: 1954 },
//   { label: 'The Pianist', year: 2002 },
//   { label: 'The Departed', year: 2006 },
//   { label: 'Terminator 2: Judgment Day', year: 1991 },
//   { label: 'Back to the Future', year: 1985 },
//   { label: 'Whiplash', year: 2014 },
//   { label: 'Gladiator', year: 2000 },
//   { label: 'Memento', year: 2000 },
//   { label: 'The Prestige', year: 2006 },
//   { label: 'The Lion King', year: 1994 },
//   { label: 'Apocalypse Now', year: 1979 },
//   { label: 'Alien', year: 1979 },
//   { label: 'Sunset Boulevard', year: 1950 },
//   {
//     label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
//     year: 1964
//   },
//   { label: 'The Great Dictator', year: 1940 },
//   { label: 'Cinema Paradiso', year: 1988 },
//   { label: 'The Lives of Others', year: 2006 },
//   { label: 'Grave of the Fireflies', year: 1988 },
//   { label: 'Paths of Glory', year: 1957 },
//   { label: 'Django Unchained', year: 2012 },
//   { label: 'The Shining', year: 1980 },
//   { label: 'WALL·E', year: 2008 },
//   { label: 'American Beauty', year: 1999 },
//   { label: 'The Dark Knight Rises', year: 2012 },
//   { label: 'Princess Mononoke', year: 1997 },
//   { label: 'Aliens', year: 1986 },
//   { label: 'Oldboy', year: 2003 },
//   { label: 'Once Upon a Time in America', year: 1984 },
//   { label: 'Witness for the Prosecution', year: 1957 },
//   { label: 'Das Boot', year: 1981 },
//   { label: 'Citizen Kane', year: 1941 },
//   { label: 'North by Northwest', year: 1959 },
//   { label: 'Vertigo', year: 1958 },
//   {
//     label: 'Star Wars: Episode VI - Return of the Jedi',
//     year: 1983
//   },
//   { label: 'Reservoir Dogs', year: 1992 },
//   { label: 'Braveheart', year: 1995 },
//   { label: 'M', year: 1931 },
//   { label: 'Requiem for a Dream', year: 2000 },
//   { label: 'Amélie', year: 2001 },
//   { label: 'A Clockwork Orange', year: 1971 },
//   { label: 'Like Stars on Earth', year: 2007 },
//   { label: 'Taxi Driver', year: 1976 },
//   { label: 'Lawrence of Arabia', year: 1962 },
//   { label: 'Double Indemnity', year: 1944 },
//   {
//     label: 'Eternal Sunshine of the Spotless Mind',
//     year: 2004
//   },
//   { label: 'Amadeus', year: 1984 },
//   { label: 'To Kill a Mockingbird', year: 1962 },
//   { label: 'Toy Story 3', year: 2010 },
//   { label: 'Logan', year: 2017 },
//   { label: 'Full Metal Jacket', year: 1987 },
//   { label: 'Dangal', year: 2016 },
//   { label: 'The Sting', year: 1973 },
//   { label: '2001: A Space Odyssey', year: 1968 },
//   { label: "Singin' in the Rain", year: 1952 },
//   { label: 'Toy Story', year: 1995 },
//   { label: 'Bicycle Thieves', year: 1948 },
//   { label: 'The Kid', year: 1921 },
//   { label: 'Inglourious Basterds', year: 2009 },
//   { label: 'Snatch', year: 2000 },
//   { label: '3 Idiots', year: 2009 },
//   { label: 'Monty Python and the Holy Grail', year: 1975 }
// ];

const AddTeamForm = (props) => {
  const id = useLocation()?.state?.project_id;
  // console.log(location, 'ghjghj');
  const { setOpen } = props;
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      members: [{ employee_name: '', Role: '' }]
    }
  });

  const {
    fields: TeamFields,
    append: TeamAppend,
    remove: TeamRemove
  } = useFieldArray({ control, name: 'members' });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeDropDownAction());
  }, []);

  const { employee_drop_down_list } = useSelector((state) => state.project);
  // console.log(employee_drop_down_list, 'emplist');

  const onSubmit = (data) => {
    dispatch(createTeamAction(data, id));
    setOpen();
  };

  const handleAddField = () => {
    TeamAppend({ employee_name: '', Role: '' });
  };

  const { project_roles } = useSelector((state) => state?.signIn?.drop_down);
  const { project_view } = useSelector((state) => state.project);
  console.log(project_view, 'dsdsfdsf');

  console.log('TeamFields', TeamFields);

  // console.log(project_roles, 'project_role');
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <BoxWrap spaceBetween="space-between">
          <Typography sx={{ ...labelStyle('', '22px', 700) }}>{project_view?.name}</Typography>
          <Box>
            <ButtonStyle type="submit" variant="contained">
              Save
            </ButtonStyle>
            <IconButton onClick={() => setOpen()}>
              <RedCrossIcon />
            </IconButton>
          </Box>
        </BoxWrap>
        <Box sx={{ padding: '30px' }}>
          <Typography
            sx={{
              ...labelStyle(colors.nero, '22px', 700),
              lineHeight: '18px',
              marginBottom: '20px'
            }}>
            Add New Team
          </Typography>

          <Grid rowSpacing={1} columnSpacing={'20px'} container>
            {TeamFields.map((item, index) => (
              <Grid item xs={12} key={item?.id}>
                <Grid item xs={12} key={item?.id}>
                  {/* <Typography sx={{ ...labelStyle(colors.nero, '12px', 500) }}>
                    Employee ID
                  </Typography> */}
                  <ImportantMark name={'Employee ID'} left="90px" />
                  <Controller
                    name={`members.${index}.employee_name`}
                    control={control}
                    rules={{
                      required: `Role is required`
                    }}
                    render={({ fieldState: { error }, field: { onChange, value } }) => (
                      <>
                        <CustomSelect
                          width="100%"
                          value={value}
                          error={!!error}
                          helperText={error ? error.message : null}
                          {...register(`members.${index}.employee_name`)}
                          option={employee_drop_down_list}
                          name="emp_id"
                          errorText="Employee id is required"
                          onChange={onChange}
                        />
                      </>
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <Typography sx={{ ...labelStyle(colors.nero, '12px', 500) }}>Role</Typography> */}
                  <ImportantMark name={'Role'} left="33px" />
                  <Controller
                    name={`members.${index}.Role`}
                    control={control}
                    rules={{
                      required: `Role is required`
                    }}
                    render={({ fieldState: { error }, field: { onChange, value } }) => (
                      <>
                        <CustomSelect
                          width="100%"
                          value={value}
                          error={!!error}
                          helperText={error ? error.message : null}
                          {...register(`members.${index}.Role`)}
                          option={project_roles}
                          name="role"
                          errorText="Role is required"
                          onChange={onChange}
                        />
                      </>
                    )}
                  />
                </Grid>
                {index > 0 && (
                  <ButtonBox>
                    <CustomButton
                      variant="contained"
                      bg={colors.pink80}
                      label="- Remove"
                      onClick={() => TeamRemove(index)}></CustomButton>
                  </ButtonBox>
                )}
              </Grid>
            ))}
            <ButtonBox>
              <CustomButton
                variant="contained"
                bg={colors.pink80}
                label="+ Add More"
                onClick={handleAddField}></CustomButton>
            </ButtonBox>
          </Grid>
        </Box>
      </Box>
    </form>
  );
};
AddTeamForm.propTypes = {
  setOpen: PropTypes.func,
  id: PropTypes.number
};
export default AddTeamForm;
