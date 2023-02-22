import { Container, FormLabel } from '@mui/material';
import React from 'react';
import cl from './ContactPage.module.scss'
import Form from '../../components/UI/form/Form';
 
const ContactPage = () => {
    return (
        <Container className={cl.contact_page} maxWidth='md'>
            <h1 className={cl.label}>Чтобы связаться с нами,<br /> вы можете заполнить форму ниже!</h1>
            <Form/>
        </Container>
    );
};
 
export default ContactPage;