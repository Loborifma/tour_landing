import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CssTextField = styled(TextField)({
    '& label':{
        color: '#8A8A8A',
    },
    '& label.Mui-focused': {
      color: '#ffffff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
      background: 'rgba(138, 138, 138, 0.3)',

      '& fieldset': {
        borderColor: '#8A8A8A',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fffff',
      },
      '& input': {
        color: 'white',
      },
      '& textarea': {
        color: 'white',
      },
    },
  });