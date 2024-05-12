import styled from '@emotion/styled';
import colors from '../../theme/colors';
import { UploadFileIcon } from '../../theme/SvgIcons';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { emp_browser, emp_drop_file } from '../employee/empText';

const BoxStyle = styled(Box)`
  position: relative;
  cursor: pointer;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${colors.nero};
  font-family: sans-serif;
  font-size: 12px;
  input[type='file'] {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 37%;
    opacity: 0;
    cursor: pointer;
    margin-left: 15px;
    max-width: 200px;
  }
`;

let style = {
  fontFamily: 'Poppins',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '18px',
  marginLeft: '15px'
};
const FileUpload = (props) => {
  const { onChange } = props || {};
  const [file, setFile] = useState([]);
  // const [showImage, setShowImage] = useState(null);

  useEffect(() => {
    if (file) {
      onChange && onChange(file);
    }
  }, [file]);

  // const handleImageUpload = (e) => {
  //   const tempArr = [];

  //   [...e.target.files].forEach((file) => {
  //     console.log('file >>> ', file);

  //     tempArr.push({
  //       data: file,
  //       url: URL.createObjectURL(file)
  //     });

  //     console.log('pictures >> ', tempArr);
  //   });
  // };
  return (
    <BoxStyle>
      <UploadFileIcon />
      {file?.target?.files.length ? (
        <Typography sx={style}> {file?.target?.files[0]?.name}</Typography>
      ) : (
        <Typography sx={style}>
          {emp_drop_file}
          <Link to="https://unsplash.com/" target="_blank" sx={{ color: '' }}>
            {emp_browser}
          </Link>
        </Typography>
      )}
      <input
        multiple
        onChange={(e) => {
          setFile(e);
          // setShowImage(URL.createObjectURL(e.target.files[0]));
          // handleImageUpload(e);
        }}
        type="file"
      />
    </BoxStyle>
  );
};

export default FileUpload;
