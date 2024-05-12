import { Box, IconButton } from '@mui/material';
import CustomText from '../form/CustomText';
import { DeleteIcon, EditIcon } from '../../theme/SvgIcons';
import colors from '../../theme/colors';

export const rowsData = [
  {
    service: 'Skype',
    serviceURL: 'https/Sfs.aman9@gmail.com',
    userName: 'Sfs.aman9@gmail.com',
    password: 'password',
    contactNumber: '9780232209',
    code: '01001',
    remark: ' N/A'
  },
  {
    service: 'Gmail',
    serviceURL: 'https/Sfs.navjeet19@gmail.com',
    userName: 'Sfs.navjeet19@gmail.com',
    password: 'password',
    contactNumber: '9862712812',
    code: '09233',
    remark: ' N/A'
  }
];

const tableText = (text) => {
  return <CustomText variant="body1_medium">{text}</CustomText>;
};

const worktext = (text) => {
  return <CustomText variant="title_1">{text}</CustomText>;
};

export const idsColumn = [
  {
    id: 'service',
    isBorder: false,
    label: tableText('Service')
  },
  {
    id: 'serviceURL',
    isBorder: false,
    label: tableText('Service URL')
  },
  {
    id: 'userName',
    isBorder: false,
    label: tableText('Email or User name')
  },
  {
    id: 'password',
    isBorder: false,
    label: tableText('Password')
  },
  {
    id: 'contactNumber',
    isBorder: false,
    label: tableText('Contact Number')
  },
  {
    id: 'code',
    isBorder: false,
    label: tableText('Code')
  },
  {
    id: 'remark',
    isBorder: false,
    label: tableText('Remark')
  },
  {
    id: 'action',
    isBorder: false,
    label: ''
  }
];

export const expColumn = [
  {
    id: 'previousCompany',
    isBorder: false,
    label: tableText('Previous Company')
  },
  {
    id: 'jobTitle',
    isBorder: false,
    label: tableText('Job Title')
  },
  {
    id: 'from',
    isBorder: false,
    label: tableText('From')
  },
  {
    id: 'to',
    isBorder: false,
    label: tableText('To')
  },
  {
    id: 'workingExperience',
    isBorder: false,
    label: tableText('Total Working Experience')
  },
  {
    id: 'action',
    isBorder: false,
    label: tableText('')
  }
];

const expRowsData = [
  {
    previousCompany: 'Softech',
    jobTitle: 'Software Engineer',
    from: '17 March, 2022',
    to: '15 March, 2023',
    workingExperience: '5  Years'
  },
  {
    previousCompany: 'Besttech',
    jobTitle: 'Software Engineer',
    from: '17 March, 2022',
    to: '15 March, 2023',
    workingExperience: '5  Years'
  },
  {
    previousCompany: 'Mec Sin pvt.ltd',
    jobTitle: 'Software Engineer',
    from: '17 March, 2022',
    to: '15 March, 2023',
    workingExperience: '5  Years'
  }
];
export const expRows = (setOpenModal) => {
  if (Array.isArray(expRowsData)) {
    if (expRowsData.length > 0) {
      return expRowsData.map((el) => {
        return {
          previousCompany: worktext(el.previousCompany),
          jobTitle: worktext(el.jobTitle),
          from: worktext(el.from),
          to: worktext(el.to),
          workingExperience: worktext(el.workingExperience),
          action: (
            <Box>
              <IconButton
                sx={{ width: '29px', height: '29px', background: colors.darkSkyBlue }}
                onClick={() => setOpenModal({ openD: true, type: 'experience' })}>
                <EditIcon />
              </IconButton>
              <IconButton
                sx={{ width: '29px', height: '29px', ml: '10px', background: colors.bgDelete }}>
                <DeleteIcon />
              </IconButton>
            </Box>
          )
        };
      });
    } else {
      return [];
    }
  }
};

export const eduColumn = [
  {
    id: 'highestQualification',
    isBorder: false,
    label: tableText('Highest Qualification')
  },
  {
    id: 'fieldStudy',
    isBorder: false,
    label: tableText('Field of Study')
  },
  {
    id: 'completionYearrom',
    isBorder: false,
    label: tableText('Completion Year')
  },
  {
    id: 'type',
    isBorder: false,
    label: tableText('Type')
  },
  {
    id: 'result',
    isBorder: false,
    label: tableText('Result')
  },
  {
    id: 'action',
    isBorder: false,
    label: tableText('')
  }
];

const eduRowData = [
  {
    highestQualification: 'Bachelors Degree',
    fieldStudy: 'Information Technology',
    completionYearrom: '2016',
    type: ' Ragular',
    result: 'Pass'
  }
];
export const eduRow = (setOpenModal) => {
  if (Array.isArray(eduRowData)) {
    if (eduRowData.length > 0) {
      return eduRowData.map((el) => {
        return {
          highestQualification: worktext(el.highestQualification),
          fieldStudy: worktext(el.fieldStudy),
          completionYearrom: worktext(el.completionYearrom),
          type: worktext(el.type),
          result: worktext(el.result),
          action: (
            <Box>
              <IconButton
                sx={{ width: '29px', height: '29px', background: colors.darkSkyBlue }}
                onClick={() => setOpenModal({ openD: true, type: 'education' })}>
                <EditIcon />
              </IconButton>
              <IconButton
                sx={{ width: '29px', height: '29px', ml: '10px', background: colors.bgDelete }}>
                <DeleteIcon />
              </IconButton>
            </Box>
          )
        };
      });
    } else {
      return [];
    }
  }
};
