import {
  Grid,
  IconButton,
  Typography,
  Box,
  Avatar,
  TextField,
  FormControlLabel,
  Switch
} from '@mui/material';
import {
  AttacmentIcon1,
  AttacmentIcon2,
  ChatIcon,
  DownloadIcon,
  InfoIcon,
  PencilIcon,
  PinIcon,
  RedCrossIcon,
  Textareaicon1,
  Textareaicon2,
  Plusicon,
  DeleteAttach,
  MenuDropDownIcon,
  DownArrow
} from '../../../theme/SvgIcons';
import PropTypes from 'prop-types';

// import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import colors from '../../../theme/colors';
import { deepOrange } from '@mui/material/colors';
import { labelStyle } from '../style';
import {
  ActivityButton,
  AvatarGroupStye,
  AvatarStyle,
  BoxLinks,
  BoxRighContainer,
  BoxStartDate,
  BoxWrapData,
  BoxWrapRightData,
  ButtonContainer,
  ChatContainer,
  ChatInput,
  CommentButton,
  CustomArea,
  FileName,
  // FormFieldStyle,
  IconWrapper,
  ImageContainer,
  ImageFunction,
  ImageSize,
  MainIcons,
  MainScroll,
  MainStatus,
  TextBox,
  SelectContiner,
  StyledBadge,
  ToggleContainer,
  MsgBox
} from './style';
// import CustomSwitch from '../../form/CustomSwitch';
import { CustomFlexBox } from '../../../utils/common_functions';
import { CustomFlex } from '../../../utils/common_functions';
import StatusChange from './StatusChange';
import FileUpload from '../../form/FileUpload';
import { useDispatch, useSelector } from 'react-redux';
import {
  editMilestonePriorityAction,
  editMilestoneStatusAction,
  viewMilestoneAction
} from '../../../redux/project/action';
import moment from 'moment';
import { useLocation } from 'react-router-dom';

// const fields = [
//   { name: 'startDate', inputlabel: 'Start Date', type: 'date' },
//   { name: 'endDate', inputlabel: 'End Date', type: 'date' }
// ];
// const Link = [
//   {
//     LinkNmae: 'Invision',
//     Link: 'https://app.asana.com/0/1165939257451906'
//   },
//   {
//     LinkNmae: 'Prototype',
//     Link: 'https://app.asana.com/0/1165939257451906'
//   },
//   {
//     LinkNmae: 'Invision',
//     Link: 'https://app.asana.com/0/1165939257451906'
//   },
//   {
//     LinkNmae: 'Prototype',
//     Link: 'https://app.asana.com/0/1165939257451906'
//   }
// ];

const filesData = [
  {
    Image: '',
    ShortName: 'A',
    Filename: 'Lorem Ipsum file',
    Date: '25 May, 2022',
    ImageType: 'PNG',
    ImageSize: '239PX'
  },
  {
    Image: '',
    ShortName: 'B',
    Filename: 'Lorem Ipsum file',
    Date: '25 May, 2022',
    ImageType: 'JPEG',
    ImageSize: '400MB'
  },
  {
    Image: '',
    ShortName: 'C',
    Filename: 'Lorem Ipsum file',
    Date: '25 May, 2022',
    ImageType: 'SVG',
    ImageSize: '300MB'
  },
  {
    Image:
      'https://media.istockphoto.com/id/497741600/photo/erasmus-bridge-in-rotterdam-netherlands.jpg?s=1024x1024&amp;w=is&amp;k=20&amp;c=U8xL6SAk36HBkdBVMHPR3wrblo8jqOTFwVApUCdZuvc=',
    ShortName: 'D',
    Filename: 'Lorem Ipsum file',
    Date: '25 May, 2022',
    ImageType: 'IOS',
    ImageSize: '180MB'
  },
  {
    Image:
      'https://media.istockphoto.com/id/497741600/photo/erasmus-bridge-in-rotterdam-netherlands.jpg?s=1024x1024&amp;w=is&amp;k=20&amp;c=U8xL6SAk36HBkdBVMHPR3wrblo8jqOTFwVApUCdZuvc=',
    ShortName: 'E',
    Filename: 'Lorem Ipsum file',
    Date: '25 May, 2022 ',
    ImageType: 'IO',
    ImageSize: '10MB'
  }
];

const avatarGrp = [
  { alt: 'Travis Howard' },
  { alt: 'Howard' },
  { alt: 'Cindy Baker' },
  { alt: 'Walker' }
];

const optionAttach = [{ value: 'All', label: 'All', icon: '', path: '' }];
const ViewMileStone = (props) => {
  useEffect(() => {
    dispatch(viewMilestoneAction(id));
  }, []);
  const { milesone_view } = useSelector((state) => state?.project);

  const { id } = props;
  const dispatch = useDispatch();

  const [button1Style, setButton1Style] = useState({
    backgroundColor: colors.darkblackblue,
    color: colors.white
  });
  const [button2Style, setButton2Style] = useState({
    backgroundColor: colors.white,
    color: '#D0D6F1'
  });

  const { project_view } = useSelector((state) => state?.project);
  const [selectProject, setSelectProject] = useState('');
  const [selectProject2, setSelectProject2] = useState('');

  useEffect(() => {
    setSelectProject(milesone_view?.status);
    setSelectProject2(
      milesone_view?.priority === 'Low'
        ? '1'
        : milesone_view?.priority === 'Medium'
        ? '2'
        : milesone_view?.priority === 'High'
        ? '3'
        : ''
    );
  }, [milesone_view?.status]);
  // console.log(milesone_view, 'milesone_view');

  const handleButton1Click = () => {
    setButton1Style({ backgroundColor: colors.darkblackblue, color: 'white' });
    setButton2Style({ backgroundColor: 'white', color: '#D0D6F1' });
  };

  const handleButton2Click = () => {
    setButton1Style({ backgroundColor: 'white', color: '#D0D6F1' });
    setButton2Style({ backgroundColor: colors.darkblackblue, color: 'white' });
  };

  const sinputDate = milesone_view?.start_date;
  const einputDate = milesone_view?.due_date;

  const start_date = moment(sinputDate).format('D MMMM, YYYY');
  const end_date = moment(einputDate).format('D MMMM, YYYY');

  // console.log(start_date, milesone_view?.start_date, 'start_date');
  // console.log(end_date, 'end_date');
  const { drop_down } = useSelector((e) => e.signIn);

  const { milestone_status } = drop_down;

  console.log(drop_down, 'drop_down');

  const boxStyle = (bg) => (
    <Box sx={{ width: '12px', height: '12px', background: bg, borderRadius: '50%' }} />
  );
  const projecttype = [
    {
      value: milestone_status[0]?.value,
      label: milestone_status[0]?.value,
      icon: boxStyle(colors.lightOrange),
      key: milestone_status[0]?.key
    },
    {
      value: milestone_status[1]?.value,
      label: milestone_status[1]?.value,
      icon: boxStyle(colors.blue92),
      key: milestone_status[1]?.key
    },
    {
      value: milestone_status[2]?.value,
      label: milestone_status[2]?.value,
      icon: boxStyle(colors.nightBlue),
      key: milestone_status[2]?.key
    },
    {
      value: milestone_status[3]?.value,
      label: milestone_status[3]?.value,
      icon: boxStyle(colors.green93),
      key: milestone_status[3]?.key
    }
  ];

  const projetct_id = useLocation().state?.project_id;

  const onSelectVlaue = (data, type) => {
    console.log(data, type, id, 'fiudsfgh');
    if (type === 'priority') {
      const payload = {
        priority: data
      };
      console.log(payload, 'ddfsdfdsf');
      dispatch(editMilestonePriorityAction(payload, id, projetct_id));
    }
    if (type === 'status') {
      const payload = {
        status: data
      };
      dispatch(editMilestoneStatusAction(payload, id, projetct_id));
    }
  };

  const handleToggleChange = (event) => {
    console.log(event.target.checked, 'ffdsfdf');
    if (event.target.checked) {
      const payload = {
        status: '2'
      };
      dispatch(editMilestoneStatusAction(payload, id, projetct_id));
    } else {
      const payload = {
        status: '1'
      };
      dispatch(editMilestoneStatusAction(payload, id, projetct_id));
    }
    // setIsSameAddress(event.target.checked);
  };

  return (
    <>
      <Box>
        <BoxWrapData>
          <Typography sx={{ ...labelStyle(colors.nero, '22px', 700), p: '0px 30px' }}>
            {project_view?.name}
          </Typography>
          <BoxWrapRightData>
            <AvatarGroupStye max={4} style={{ paddingRight: '20PX' }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                variant="dot">
                {avatarGrp.map((avtr) => {
                  return (
                    <>
                      <AvatarStyle
                        alt={avtr.alt}
                        sx={{ bgcolor: deepOrange[500] }}
                        src="/static/images/avatar/1.jpg"
                      />
                    </>
                  );
                })}
                <AvatarStyle alt="Icon" src={''} sx={{ background: colors.ghostWhite }}>
                  <Plusicon />
                </AvatarStyle>
              </StyledBadge>
            </AvatarGroupStye>
            <BoxStartDate>
              <Box style={{ display: 'flex', float: 'right' }}>
                <Box>
                  <Box style={{ display: 'flex' }}>
                    <Typography
                      sx={{ ...labelStyle(colors.nero, '12px', 500), marginRight: '15px' }}>
                      {start_date}
                    </Typography>
                    <Box style={{ marginRight: '15px' }}>
                      <DownArrow />
                    </Box>
                  </Box>
                  <Typography
                    sx={{ ...labelStyle(colors.grayLight, '10px', 400), marginRight: '23px' }}>
                    Start Date
                  </Typography>
                </Box>
                <Box>
                  <Box style={{ display: 'flex' }}>
                    <Typography
                      sx={{ ...labelStyle(colors.nero, '12px', 500), marginRight: '15px' }}>
                      {end_date}
                    </Typography>
                    <Box style={{ marginRight: '15px' }}>
                      <DownArrow />
                    </Box>
                  </Box>
                  <Typography
                    sx={{ ...labelStyle(colors.grayLight, '10px', 500), marginRight: '23px' }}>
                    Last Date
                  </Typography>
                </Box>
                {/* <CustomMenu
                  option={menuoption}
                  onChange={onChange}
                  type={'project_del'}
                  id={location}
                  // setOpenE={() => setOpenE(true)}
                /> */}
              </Box>
            </BoxStartDate>
            <IconButton sx={{ height: '32px', width: '32px' }} onClick={() => props.setOpen()}>
              <RedCrossIcon />
            </IconButton>
          </BoxWrapRightData>
        </BoxWrapData>
        <Grid container spacing={2}>
          <MainScroll item xs={12} md={8}>
            <Box sx={{ padding: '20px 8px 20px 20px' }}>
              <CustomFlex>
                <Typography sx={labelStyle(colors.nero, '22px', 700)}>
                  {milesone_view?.name}
                </Typography>
                <ToggleContainer>
                  <Typography sx={labelStyle(colors.nero, '14px', 500)}>
                    Mark as Complete
                  </Typography>
                  {/* <CustomSwitch /> */}
                  <FormControlLabel
                    style={{ marginLeft: '0px' }}
                    control={
                      <Switch
                        checked={selectProject === '2' ? true : ''}
                        onChange={handleToggleChange}
                      />
                    }
                    // label="Permanent Address same as Current Address"
                  />
                </ToggleContainer>
              </CustomFlex>
              <CustomFlexBox>
                <MainStatus>
                  <Typography sx={{ ...labelStyle(colors.grayLight, '10px', 400), mr: '12px' }}>
                    Status
                  </Typography>
                  <StatusChange
                    options={projecttype}
                    setSelectProject={setSelectProject}
                    selectProject={selectProject}
                    onSelectVlaue={onSelectVlaue}
                    width={'145px'}
                    type={'status'}
                  />
                </MainStatus>
                <MainStatus>
                  <Typography sx={{ ...labelStyle(colors.grayLight, '10px', 400), mr: '12px' }}>
                    Priority
                  </Typography>
                  <StatusChange
                    options={drop_down?.milestone_priority}
                    setSelectProject={setSelectProject2}
                    selectProject={selectProject2}
                    onSelectVlaue={onSelectVlaue}
                    width={'95px'}
                    type={'priority'}
                  />
                </MainStatus>
                <CustomFlexBox>
                  <Typography sx={{ ...labelStyle(colors.grayLight, '12px', 500), mr: '6px' }}>
                    View project info
                  </Typography>
                  <InfoIcon />
                </CustomFlexBox>
              </CustomFlexBox>
              <Box sx={{ mt: '16px', position: 'relative' }}>
                <Typography
                  sx={{
                    ...labelStyle(colors.grayLight, '10px', 400),
                    position: 'absolute',
                    m: '10px'
                  }}>
                  Description
                </Typography>
                <CustomArea value={milesone_view?.milestone_detail} disabled />
              </Box>
              <Box sx={{ float: 'right', display: 'flex', mr: '5px' }}>
                <Textareaicon2 />
                <Box sx={{ ml: '20px' }}>
                  <Textareaicon1 />
                </Box>
              </Box>
              <BoxLinks>
                <Typography sx={{ ...labelStyle(colors.nero, '20px', 400) }}>Links</Typography>
                {milesone_view?.milestone_links?.map((value, index) => {
                  return (
                    <Box sx={{ display: 'flex', margin: '10px 0px' }} key={index}>
                      <Typography
                        sx={{ ...labelStyle(colors.nero, '14px', 400), minWidth: '120px' }}>
                        {value.link_title === '1'
                          ? 'SRS'
                          : value.link_title === '2'
                          ? 'Milestone Sheet'
                          : value.link_title === '3'
                          ? 'Website'
                          : value.link_title === '4'
                          ? 'Privacy Policy'
                          : value.link_title === '5'
                          ? 'IOS app'
                          : value.link_title === '6'
                          ? 'Android app'
                          : value.link_title === '7'
                          ? 'Database'
                          : value.link_title === '8'
                          ? 'Mobile app designs'
                          : value.link_title === '9'
                          ? 'Web app designs'
                          : value.link_title === '10'
                          ? 'Prototype'
                          : value.link_title === '11'
                          ? 'Terms & Conditions'
                          : ''}
                      </Typography>
                      <Typography
                        sx={{ ...labelStyle(colors.rudyBlue, '14px', 400), marginLeft: '20px' }}>
                        {value.link_url}
                      </Typography>
                    </Box>
                  );
                })}
              </BoxLinks>
              <CustomFlex>
                <Typography sx={{ ...labelStyle(colors.nero, '20px', 500) }}>
                  Attachments
                </Typography>
                <SelectContiner>
                  <Typography sx={{ ...labelStyle(colors.grayLight, '10px', 400), mr: '12px' }}>
                    Upload by
                  </Typography>
                  <StatusChange options={optionAttach} />
                  <Typography
                    sx={{ ...labelStyle(colors.grayLight, '10px', 400), mr: '10px', ml: '24px' }}>
                    File type
                  </Typography>
                  <StatusChange options={optionAttach} />
                  <IconWrapper>
                    <AttacmentIcon1 />
                    <Box sx={{ ml: '14px' }}>
                      <AttacmentIcon2 />
                    </Box>
                  </IconWrapper>
                </SelectContiner>
              </CustomFlex>
              <Grid container spacing={2} sx={{ marginTop: '1px' }}>
                {filesData.map((value, index) => {
                  return (
                    <Grid key={index} item xs={4}>
                      <ImageFunction>
                        <img
                          src={'/Rectangle.png'}
                          style={{ width: '190px', borderRadius: '6px' }}
                        />
                        <ImageContainer>
                          <TextBox>
                            <Typography sx={labelStyle(colors.white, '12px', 500)}>
                              {value.ShortName}
                            </Typography>
                          </TextBox>
                          <FileName>
                            <Typography sx={labelStyle(colors.nero, '12px', 500)}>
                              {value.Filename}
                            </Typography>
                            <Typography sx={labelStyle(colors.grayLight, '10px', 400)}>
                              {value.Date}
                            </Typography>
                          </FileName>
                          <PinIcon />
                        </ImageContainer>
                        <ImageSize>
                          <Typography sx={labelStyle(colors.grayLight, '10px', 400)}>
                            {value.ImageSize}
                          </Typography>
                          <MainIcons>
                            <PencilIcon />
                            <Box sx={{ mx: '20px' }}>
                              <DownloadIcon />
                            </Box>
                            <DeleteAttach />
                          </MainIcons>
                        </ImageSize>
                      </ImageFunction>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            <Box sx={{ padding: '20px', background: colors.white, mt: '30px', mb: '40px' }}>
              <FileUpload />
            </Box>
          </MainScroll>
          <Grid sx={{ paddingLeft: '0px' }} item xs={12} md={4}>
            <BoxRighContainer>
              <ButtonContainer>
                <CommentButton onClick={handleButton1Click} style={button1Style}>
                  Comment
                </CommentButton>
                <ActivityButton onClick={handleButton2Click} style={button2Style}>
                  Activity
                </ActivityButton>
              </ButtonContainer>
              <ChatContainer>
                {[1, 2].map((i, key) => {
                  return (
                    <Box key={key} sx={{ marginBottom: '20px' }}>
                      <CustomFlex>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar sx={{ bgcolor: deepOrange[500], width: '28px', height: '28px' }}>
                            N
                          </Avatar>
                          <Typography sx={{ ...labelStyle(colors.nero, '12px', 500), ml: '10px' }}>
                            Tony Moris
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography
                            sx={{ ...labelStyle(colors.grayLight, '10px', 400), mr: '10px' }}>
                            15 March, 2022 at 04:20 pm
                          </Typography>
                          <MenuDropDownIcon />
                        </Box>
                      </CustomFlex>
                      <MsgBox>
                        <Typography sx={labelStyle(colors.grayLight, '10px', 400)}>
                          There are many variations of passages of Lorem Ipsum available, but the
                          majority have suffered
                        </Typography>
                      </MsgBox>
                    </Box>
                  );
                })}
              </ChatContainer>

              <ChatInput>
                <TextField
                  sx={{ '& fieldset': { border: 'none' } }}
                  type="text"
                  placeholder="Comment or type ‘/’ for commands"
                />
                <div>
                  <ChatIcon />
                </div>
              </ChatInput>
            </BoxRighContainer>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ViewMileStone;

ViewMileStone.propTypes = {
  setOpen: PropTypes.func,
  id: PropTypes.string
};
