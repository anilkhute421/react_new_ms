import { Box, Button, Card, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { labelStyle } from '../employee/style';
// import UserInfo from '../employee/UserInfo';
import user from '../../assets/user.png';
import LikePlay from '../employee/likePlayprofile';
// import Dummy from '../employee/dummy';
import styled from '@emotion/styled';
import bio from '../../assets/bio.png';
import user_1 from '../../assets/user_1.png';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/profile/action';

// import AddRemarks from './AddRemarks';

// const ButtonValue = [
//   {
//     name: 'Profile',
//     value: 0
//   },
//   {
//     name: 'Preference',
//     value: 1
//   },
//   {
//     name: 'Verification',
//     value: 2
//   }
// ];

const Notification = () => {
  const [preference, setPreference] = useState('Profile');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(381));
  }, []);

  const profile_data = useSelector((e) => e?.profile?.profile_data);
  console.log(profile_data, 'new');

  // console.log(
  //   profile_data?.PartnerPhysicalQuestions &&
  //     profile_data?.PartnerPhysicalQuestions[0]?.partner_size,
  //   'profile_data'
  // );
  const partenrData =
    profile_data?.PartnerPhysicalQuestions && profile_data?.PartnerPhysicalQuestions[0];

  const verificationData = profile_data?.FaceBookVerification;

  const govverificationData = profile_data?.GovernmentVerifications;

  console.log(verificationData, 'verificationData');

  const handleClick = (buttonIndex) => {
    switch (buttonIndex) {
      case 1:
        setPreference('Preferences');
        break;
      case 2:
        setPreference('Verification');
        break;
      default:
        setPreference('Profile');
        break;
    }
  };

  return (
    <PermissionWrapper>
      <LikePlay data={profile_data} />
      <div
        style={{
          width: '100%',
          backgroundColor: '#D9D9D9',
          height: '49px',
          padding: '8px 50px'
        }}>
        <ButtonWarpper
          sx={{ borderRadius: '0px' }}
          onClick={() => handleClick(0)}
          style={{ borderBottom: preference == 'Profile' ? '2px solid #FF483C' : '' }}>
          <Typography
            sx={{ ...labelStyle(preference == 'Profile' ? 'black' : '#7B7F91', '12px', 500) }}>
            Profile
          </Typography>
        </ButtonWarpper>
        <ButtonWarpper
          sx={{ borderRadius: '0px' }}
          onClick={() => handleClick(1)}
          style={{ borderBottom: preference == 'Preferences' ? '2px solid #FF483C' : '' }}>
          <Typography
            sx={{ ...labelStyle(preference == 'Preferences' ? 'black' : '#7B7F91', '12px', 500) }}>
            Preferences
          </Typography>
        </ButtonWarpper>
        <ButtonWarpper
          sx={{ borderRadius: '0px' }}
          onClick={() => handleClick(2)}
          style={{ borderBottom: preference == 'Verification' ? '2px solid #FF483C' : '' }}>
          <Typography
            sx={{ ...labelStyle(preference == 'Verification' ? 'black' : '#7B7F91', '12px', 500) }}>
            Verification
          </Typography>
        </ButtonWarpper>
      </div>
      <Card>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)'
          }}>
          {preference === 'Profile' && (
            <>
              <div style={{ padding: '40px 20px 25px 20px' }}>
                <UserDeatils>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Full Name
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.name}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Age
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.age}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Gender
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.gender}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Interested In
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.interested_in === '1' ? 'Female' : 'Male'}
                    </Typography>
                  </div>
                </UserDeatils>
              </div>
              <div style={{ padding: '40px 20px 25px 10px' }}>
                <UserDeatils>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Status
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data.status}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Body Type
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data.body_type}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Height
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data.height}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Education
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data.education}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Employment
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data.employment}
                    </Typography>
                  </div>
                </UserDeatils>
              </div>
              <div style={{ padding: '0px 20px 25px 20px' }}>
                <UserDeatils>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Country of Residence
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.residence_country}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      State
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.state}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      City
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.city}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Nationality
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.nationality}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Religion
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.religion}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Your Tribe
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.your_tribe}
                    </Typography>
                  </div>
                </UserDeatils>
              </div>
              <div style={{ padding: '0px 20px 25px 10px' }}>
                <UserDeatils>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Age Range preferred to date
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.age_range_for_date}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Tribe to date
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.tribe_to_date}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      Looking for
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.looking_for}
                    </Typography>
                  </div>
                </UserDeatils>
              </div>
              <div style={{ padding: '0px 20px 25px 20px' }}>
                <AbouWarpper>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500)
                      }}>
                      About me
                    </Typography>
                    <Typography
                      sx={{
                        ...labelStyle('#7B7F91', '12px', 500)
                      }}>
                      {profile_data?.about_me}
                    </Typography>
                  </div>
                </AbouWarpper>
              </div>
              <div style={{ padding: '0px 20px 25px 10px' }}>
                <AbouWarpper>
                  <div>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500),
                        paddingBottom: '5px'
                      }}>
                      Images
                    </Typography>
                    <Facbookimgwrapper>
                      <Box
                        gridColumn="span 2"
                        style={{
                          borderRadius: '8px',
                          overflow: 'hidden',
                          backgroundColor: 'gray',
                          height: '75px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}>
                        <ImageStyle src={user_1} />
                      </Box>
                      <Box
                        gridColumn="span 2"
                        style={{
                          borderRadius: '8px',
                          overflow: 'hidden',
                          backgroundColor: 'gray',
                          height: '75px'
                        }}>
                        <ImageStyle src={user_1} />
                      </Box>
                      <Box
                        gridColumn="span 2"
                        style={{
                          borderRadius: '8px',
                          overflow: 'hidden',
                          backgroundColor: 'gray',
                          height: '75px'
                        }}>
                        <ImageStyle src={user_1} />
                      </Box>
                      <Box
                        gridColumn="span 2"
                        style={{
                          borderRadius: '8px',
                          overflow: 'hidden',
                          backgroundColor: 'gray',
                          height: '75px'
                        }}>
                        <ImageStyle src={user_1} />
                      </Box>
                      <Box
                        gridColumn="span 2"
                        style={{
                          borderRadius: '8px',
                          overflow: 'hidden',
                          backgroundColor: 'gray',
                          height: '75px'
                        }}>
                        <ImageStyle src={user_1} />
                      </Box>
                    </Facbookimgwrapper>
                  </div>
                </AbouWarpper>
              </div>
            </>
          )}

          {/* preference */}
          {preference === 'Preferences' && (
            <>
              <div style={{ padding: '40px 20px 0px 20px' }}>
                <div
                  style={{
                    border: '1px solid #E2E2E2',
                    paddingTop: '10px',
                    borderRadius: '10px',
                    backgroundColor: '#F3F3F3'
                  }}>
                  <Typography
                    sx={{
                      ...labelStyle('#242424', '12px', 500),
                      paddingBottom: '10px',
                      paddingLeft: '15px'
                    }}>
                    Your Physical Attributes
                  </Typography>
                  <UserDeatils>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        Size
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {profile_data.user_physical_size}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        Back End
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {profile_data.user_physical_backend}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        Facial
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {profile_data.user_physical_facial}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        Height
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {profile_data.user_physical_height}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        Front
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {profile_data.user_physical_front}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        Glasses
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {profile_data.user_physical_glasses}
                      </Typography>
                    </div>
                  </UserDeatils>
                </div>
              </div>
              <div style={{ padding: '40px 20px 15px 10px' }}>
                <div
                  style={{
                    border: '1px solid #E2E2E2',
                    paddingTop: '10px',
                    borderRadius: '10px',
                    backgroundColor: '#F3F3F3'
                  }}>
                  <Typography
                    sx={{
                      ...labelStyle('#242424', '12px', 500),
                      paddingBottom: '10px',
                      paddingLeft: '15px'
                    }}>
                    Partners Physical Attributes
                  </Typography>
                  <UserDeatils>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        Size
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {profile_data.user_physical_size}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        Back End
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {partenrData?.partner_back_end}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        Facial
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {partenrData?.partner_facial}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        Height
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {partenrData?.partner_height}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        Front
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {partenrData?.partner_front}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        Glasses
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {partenrData?.partner_glasses}
                      </Typography>
                    </div>
                  </UserDeatils>
                </div>
              </div>
              <div style={{ padding: '10px 20px 25px 20px' }}>
                <div
                  style={{
                    border: '1px solid #E2E2E2',
                    paddingTop: '10px',
                    borderRadius: '10px',
                    backgroundColor: '#F3F3F3'
                  }}>
                  <Typography
                    sx={{
                      ...labelStyle('#242424', '12px', 500),
                      paddingBottom: '10px',
                      paddingLeft: '15px'
                    }}>
                    Character Questions
                  </Typography>
                  <CharacterWrapper>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        People say I am dependable and reliable
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {profile_data?.character_am_dependable_and_reliable}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        I am very outgoing and can make anywhere exciting
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {profile_data?.character_am_outgoing_and_make_anywhere_exciting}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        I am my best under pressure
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {profile_data?.character_am_best_under_pressure}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        I am very forgiving in a relationship, even if my partner cheats
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {profile_data?.character_attraction_in_relationship}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                        }}>
                        My family and friends heavily influence my decisions
                      </Typography>
                      <Typography
                        sx={{
                          ...labelStyle('#7B7F91', '12px', 500)
                        }}>
                        {profile_data?.character_am_decisional}
                      </Typography>
                    </div>
                  </CharacterWrapper>
                </div>
              </div>
            </>
          )}

          {preference === 'Verification' && (
            <>
              <div style={{ padding: '40px 20px 0px 20px' }}>
                <div
                  style={{
                    border: '1px solid #E2E2E2',
                    paddingTop: '10px',
                    borderRadius: '10px',
                    backgroundColor: '#F3F3F3'
                  }}>
                  <div style={{ display: 'inline-block', float: 'left', padding: '0px 15px' }}>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500),
                        paddingBottom: '10px'
                        // paddingLeft: '15px'
                      }}>
                      Verify With Facebook
                    </Typography>
                  </div>
                  <ButtonStyle>
                    <Typography sx={{ ...labelStyle('white', '10px', 400), whiteSpace: 'nowrap' }}>
                      Click to verify
                    </Typography>
                  </ButtonStyle>
                  <VerifyWrapper>
                    {verificationData ? (
                      <>
                        <Box gridColumn="span 6">
                          <Typography
                            sx={{
                              ...labelStyle('#242424', '12px', 500)
                            }}>
                            Username
                          </Typography>
                          <Typography
                            sx={{
                              ...labelStyle('#7B7F91', '12px', 500)
                            }}>
                            {verificationData}
                          </Typography>
                        </Box>
                        <Box gridColumn="span 6">
                          <Typography
                            sx={{
                              ...labelStyle('#242424', '12px', 500)
                            }}>
                            Email
                          </Typography>
                          <Typography
                            sx={{
                              ...labelStyle('#7B7F91', '12px', 500)
                            }}>
                            {verificationData}
                          </Typography>
                        </Box>

                        <Box gridColumn="span 12">
                          <Typography
                            sx={{
                              ...labelStyle('#242424', '12px', 500)
                            }}>
                            Bio
                          </Typography>
                          <Typography
                            sx={{
                              ...labelStyle('#7B7F91', '12px', 500)
                            }}>
                            {verificationData}
                          </Typography>
                        </Box>
                        <Box gridColumn="span 12">
                          <Typography
                            sx={{
                              ...labelStyle('#242424', '12px', 500),
                              paddingBottom: '5px'
                            }}>
                            Image
                          </Typography>
                          <Facbookimgwrapper>
                            <Box
                              gridColumn="span 1"
                              style={{
                                // minWidth: '30px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                backgroundColor: 'gray',
                                height: '43px'
                              }}>
                              <ImageStyle src={bio} />
                            </Box>
                            <Box
                              // gridColumn="span 2"
                              style={{
                                minWidth: '43px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                backgroundColor: 'gray',
                                height: '43px'
                              }}>
                              <ImageStyle src={bio} />
                            </Box>
                            <Box
                              // gridColumn="span 2"
                              style={{
                                minWidth: '43px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                backgroundColor: 'gray',
                                height: '43px'
                              }}>
                              <ImageStyle src={bio} />
                            </Box>
                            <Box
                              // gridColumn="span 2"
                              style={{
                                minWidth: '43px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                backgroundColor: 'gray',
                                height: '43px'
                              }}>
                              <ImageStyle src={bio} />
                            </Box>
                            <Box
                              // gridColumn="span 2"
                              style={{
                                minWidth: '43px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                backgroundColor: 'gray',
                                height: '43px'
                              }}>
                              <ImageStyle src={bio} />
                            </Box>
                            <Box
                              // gridColumn="span 2"
                              style={{
                                minWidth: '43px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                backgroundColor: 'gray',
                                height: '43px'
                              }}>
                              <ImageStyle src={bio} />
                            </Box>
                            <Box
                              // gridColumn="span 2"
                              style={{
                                minWidth: '43px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                backgroundColor: 'gray',
                                height: '43px'
                              }}>
                              <ImageStyle src={bio} />
                            </Box>
                            <Box
                              // gridColumn="span 2"
                              style={{
                                minWidth: '43px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                backgroundColor: 'gray',
                                height: '43px'
                              }}>
                              <ImageStyle src={bio} />
                            </Box>
                            <Box
                              // gridColumn="span 2"
                              style={{
                                minWidth: '43px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                backgroundColor: 'gray',
                                height: '43px'
                              }}>
                              <ImageStyle src={bio} />
                            </Box>
                            <Box
                              // gridColumn="span 2"
                              style={{
                                minWidth: '43px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                backgroundColor: 'gray',
                                height: '43px'
                              }}>
                              <ImageStyle src={bio} />
                            </Box>
                            <Box
                              // gridColumn="span 2"
                              style={{
                                minWidth: '43px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                backgroundColor: 'gray',
                                height: '43px'
                              }}>
                              <ImageStyle src={bio} />
                            </Box>
                          </Facbookimgwrapper>
                        </Box>
                      </>
                    ) : (
                      <Box
                        gridColumn="span 12"
                        style={{
                          height: '130px',
                          background: '#F1F1F1',
                          borderRadius: '21px',
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                        <Typography
                          sx={{
                            ...labelStyle('#242424', '12px', 500),
                            // margin: '0 auto'
                            padding: '20% 35%'
                          }}>
                          No Data Found
                        </Typography>
                      </Box>
                    )}
                  </VerifyWrapper>
                </div>
              </div>
              <div style={{ padding: '40px 20px 15px 10px' }}>
                <div
                  style={{
                    border: '1px solid #E2E2E2',
                    paddingTop: '10px',
                    borderRadius: '10px',
                    backgroundColor: '#F3F3F3'
                  }}>
                  <div style={{ display: 'inline-block', float: 'left', padding: '0px 15px' }}>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500),
                        paddingBottom: '10px'
                        // paddingLeft: '15px'
                      }}>
                      Verify With Government ID
                    </Typography>
                  </div>
                  <ButtonStyle>
                    <Typography sx={{ ...labelStyle('white', '10px', 400), whiteSpace: 'nowrap' }}>
                      Click to verify
                    </Typography>
                  </ButtonStyle>
                  <VerifyWrapper>
                    <Box
                      gridColumn="span 6"
                      style={{
                        height: '130px',
                        background: '#F1F1F1',
                        borderRadius: '21px',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500),
                          // margin: '0 auto'
                          padding: '20% 35%'
                        }}>
                        {govverificationData ? govverificationData : 'No Front Side Image'}
                      </Typography>
                    </Box>
                    <Box
                      gridColumn="span 6"
                      style={{
                        height: '130px',
                        background: '#F1F1F1',
                        borderRadius: '21px',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                      <Typography
                        sx={{
                          ...labelStyle('#242424', '12px', 500)
                          // margin: '0 auto'
                        }}>
                        {govverificationData ? govverificationData : 'No Back Side Image'}
                      </Typography>
                    </Box>
                  </VerifyWrapper>
                </div>
              </div>
              <div style={{ padding: '40px 20px 15px 10px' }}>
                <div
                  style={{
                    border: '1px solid #E2E2E2',
                    paddingTop: '10px',
                    borderRadius: '10px',
                    backgroundColor: '#F3F3F3'
                  }}>
                  <div style={{ display: 'inline-block', float: 'left', padding: '0px 15px' }}>
                    <Typography
                      sx={{
                        ...labelStyle('#242424', '12px', 500),
                        paddingBottom: '10px'
                        // paddingLeft: '15px'
                      }}>
                      Verify With Camera
                    </Typography>
                  </div>
                  <ButtonStyle>
                    <Typography sx={{ ...labelStyle('white', '10px', 400), whiteSpace: 'nowrap' }}>
                      Click to verify
                    </Typography>
                  </ButtonStyle>
                  <VerifyWrapper>
                    <Box
                      gridColumn="span 4"
                      style={{
                        borderRadius: '10px',
                        overflow: 'hidden',
                        backgroundColor: 'gray',
                        height: '140px'
                      }}>
                      <ImageStyle src={user} />
                    </Box>
                    <Box
                      gridColumn="span 4"
                      style={{
                        borderRadius: '10px',
                        overflow: 'hidden',
                        backgroundColor: 'gray',
                        height: '140px'
                      }}>
                      <ImageStyle src={user} />
                    </Box>
                    <Box
                      gridColumn="span 4"
                      style={{
                        borderRadius: '10px',
                        overflow: 'hidden',
                        backgroundColor: 'gray',
                        height: '140px'
                      }}>
                      <ImageStyle src={user} />
                    </Box>
                  </VerifyWrapper>
                </div>
              </div>
            </>
          )}
        </Box>
      </Card>
    </PermissionWrapper>
  );
};

export default Notification;

const ButtonWarpper = styled(Button)({
  float: 'left',
  margin: '0px 20px',
  paddingBottom: '11px',
  // borderRadius: 'none',
  '& .MuiButton-root ': {
    borderRadius: '0px !improtant'
  }
});

const PermissionWrapper = styled(Box)({
  marginTop: '20px'
});

const UserDeatils = styled.div`
  width: 100%;
  min-height: 132px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px 15px;
  background-color: white;
  gap: 10px;
`;

const CharacterWrapper = styled.div`
  width: 100%;
  min-height: 132px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 10px 15px;
  background-color: white;
`;

const AbouWarpper = styled.div`
  width: 100%;
  min-height: 100px;
  border: 1px solid red;
  border-radius: 10px;
  padding: 10px 15px;
  border: 1px solid #e2e2e2;
`;

const ButtonStyle = styled(Button)({
  width: '95px',
  height: '24px',
  boxShadow: '0px 16px 32px rgba(20, 30, 73, 0.15)',
  borderRadius: '5px',
  // padding: '10px 22px',
  background: 'linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%)',
  float: 'right',
  marginRight: '15px'
});

const VerifyWrapper = styled.div`
  width: 100%;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 10px 15px;
  background-color: white;
  gap: 20px;
`;

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:'8px
`;

const Facbookimgwrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  background-color: white;
  gap: 10px;
`;
