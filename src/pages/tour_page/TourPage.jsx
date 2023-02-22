import { Container } from '@mui/material';
import React from 'react';
import Corusel from '../../components/UI/corusel/Corusel';
import CoruselFBP from '../../components/UI/corusel_for_big_picture/CoruselFBP';
import cl from './TourPage.module.scss'
 
const TourPage = () => {
    return (
        <Container className={cl.tour_page} maxWidth='md'>
            <h1 className={cl.label}>Список наших туров</h1>
            <Corusel/>
        </Container>
    );
};
 
export default TourPage;