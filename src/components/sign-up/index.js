import React, { memo } from 'react';
import { Box, FormControl, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { CardStyle, BoxWrapper, ButtonStyle, LinkStyle } from './styled';
import { SunfocusLogo } from '../../theme/SvgIcons';
import CustomTextField from '../form/CustomTextField';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../redux/sign-in/action';
import CustomText from '../form/CustomText';
import { useNavigate } from 'react-router-dom';

function SignUp(props) {
  const { signIn } = props || {};
  // const res = useSelector((e) => e);
  // console.log(res, 'sdasdasdasdasd');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    await dispatch(signInAction({ data, navigate }));
  };

  return (
    <BoxWrapper>
      <SunfocusLogo />
      <CardStyle>
        <CustomText variant={'body_2'} sx={{ textAlign: 'start', width: '100%' }}>
          {/* {signIn ? 'Login' : 'Create account'} */}
          {'Login'}
        </CustomText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth>
            <CustomText variant="title_2" sx={{ mt: '15px', mb: '5px' }}>
              Email
            </CustomText>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required'
              }}
              render={({ fieldState: { error }, field: { onChange } }) => (
                <CustomTextField
                  register={{ ...register('email') }}
                  error={!!error}
                  type="email"
                  placeholder={'Email'}
                  helperText={error ? error.message : null}
                  onChange={onChange}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth>
            <CustomText variant="title_2" sx={{ mt: '15px', mb: '5px' }}>
              Password
            </CustomText>
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Password is required'
              }}
              render={({ fieldState: { error }, field: { onChange } }) => (
                <CustomTextField
                  register={{ ...register('password') }}
                  label=""
                  error={!!error}
                  type="password"
                  onChange={onChange}
                  placeholder={'Password'}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </FormControl>
          {!signIn ? (
            ''
          ) : (
            <Typography sx={{ mt: '20px', textAlign: 'end' }} variant={'title_blue'}>
              Forgot Password
            </Typography>
          )}
          <ButtonStyle color="primary" variant="contained" type="submit">
            {/* {signIn ? 'Login' : 'Create Account'} */}
            {'Login'}
          </ButtonStyle>
        </form>
        {signIn && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomText
              variant="title_1"
              sx={{
                marginTop: '20px',
                display: 'flex'
              }}>
              Don’t have an account
              <LinkStyle underline="none">Create an account</LinkStyle>
            </CustomText>
          </Box>
        )}
      </CardStyle>
    </BoxWrapper>
  );
}

export default memo(SignUp);
