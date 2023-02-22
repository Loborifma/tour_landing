import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

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