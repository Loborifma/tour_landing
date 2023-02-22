import { Button, Container } from '@mui/material';
import React from 'react';
import cl from './HomePage.module.scss'
 
const HomePage = () => {
    return (
        <Container className={cl.home_page} maxWidth='md'>
            <h1>Активный отдых</h1>
            <h2>в горах Казахстана</h2>
            <h4>
                Организовываем походы по живописным и<br/> 
                заповедным местам Тянь-Шаньских гор,<br />
                катание на горных лыжах и сноубордах,<br />
                экстремальные сплавы по рекам,<br />
                туристический альпинизм
            </h4>
            <Container maxWidth='md' className={cl.buttons}>
                <Button className={cl.choose} variant='outlined' href='/tour'>
                    <span>Выбрать тур</span>
                </Button>
                <Button className={cl.show_more} variant='outlined' href='/contacts'>
                    <span>Узнать больше</span>
                </Button>
            </Container>
        </Container>
    );
};
 
export default HomePage;