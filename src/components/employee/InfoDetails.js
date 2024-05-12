import { Typography } from '@mui/material';
import React from 'react';
import colors from '../../theme/colors';
import { UserInfoDetails, labelStyle } from './style';
import PropTypes from 'prop-types';
import CustomButton from '../form/CustomButton';
import CustomText from '../form/CustomText';

const InfoDetails = (props) => {
  const { Rightdata, Leftdata, Title, onClick } = props;
  return (
    <UserInfoDetails>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 30px',
          borderBottom: `2px solid ${colors.gray91}`
        }}>
        <CustomText variant={'subtitle'}>{Title}</CustomText>
        <CustomButton onClick={() => onClick()} iconAlign={'left'} variant="editBtn" label="Edit" />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '25px 25px'
        }}>
        <div style={{ width: '47%' }}>
          {Leftdata?.map((value, index) => {
            return (
              <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
                <Typography
                  sx={{
                    ...labelStyle(colors.grayLight, '14px', 500),
                    minWidth: '200px',
                    maxWidth: '200px'
                  }}>
                  {value.column}
                </Typography>
                <Typography
                  sx={{
                    ...labelStyle(colors.grayLight, '14px', 400),
                    marginLeft: '50px'
                  }}>
                  : {value.row}
                </Typography>
              </div>
            );
          })}
        </div>
        <div style={{ width: '55%' }}>
          {Rightdata?.map((value, index) => {
            return (
              <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
                <Typography
                  sx={{
                    ...labelStyle(colors.grayLight, '14px', 500),
                    minWidth: '200px',
                    maxWidth: '200px'
                  }}>
                  {value.column}
                </Typography>
                <Typography
                  sx={{
                    ...labelStyle(colors.grayLight, '14px', 400),
                    marginLeft: '50px'
                  }}>
                  : {value.row}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </UserInfoDetails>
  );
};

InfoDetails.propTypes = {
  Rightdata: PropTypes.array,
  Leftdata: PropTypes.array,
  Title: PropTypes.string,
  onClick: PropTypes.func
};

export default InfoDetails;
