import { Container, TextField } from '@mui/material';
import React from 'react';
import cl from './Form.module.scss';
import { styled, ThemeProvider } from '@mui/material/styles';
import {theme} from '../../../utils/palette.js'
import {CssTextField} from '../../../utils/custom_tf.js'
 
const Form = () => {
    return (
        <Container className={cl.form} maxWidth='sm'>
            <ThemeProvider theme={theme}>
                <CssTextField 
                    className={cl.field} 
                    label="Ваше имя" 
                    variant="outlined" 
                    color='primary'
                />
                <CssTextField 
                    className={cl.field} 
                    label="Ваш email" 
                    variant="outlined" 
                    color='primary'
                />
                <CssTextField 
                    className={cl.field} 
                    id={cl.multiline}
                    multiline 
                    label="Текст сообщения" 
                    variant="outlined" 
                    color='primary'
                    maxRows={5}
                />
            </ThemeProvider>
        </Container>
    );
};
 
export default Form;