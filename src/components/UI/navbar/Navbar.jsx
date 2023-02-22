import { Container } from '@mui/material';
import React from 'react';
import cl from './Navbar.module.scss'
import logo from '../../../assets/LogoMakr-7SrWfm.png'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { NavLink, Outlet } from 'react-router-dom';
import Image from 'mui-image';
import Sidebar from '../sidebar/Sidebar';
 
const Navbar = () => {
    return (
        <>
            <header>
                <Container className={cl.container} maxWidth='xl'>
                    <img className={cl.logo} src={logo} alt=''/>
                    <div className={cl.wrap_links}>
                        <div className={cl.links}>
                            <NavLink to='/'>Главная</NavLink>
                            <NavLink to='/tour'>Туры</NavLink>
                            <NavLink to='/contacts'>Контакты</NavLink>
                        </div>
                    </div>
                    <div className={cl.telephone}>
                        <LocalPhoneOutlinedIcon className={cl.icon}/>
                        <p className={cl.tel_number}>8(912)201-51-96</p>
                    </div>
                </Container>
            </header>
            <Sidebar/>
            <Outlet/>
        </>
        
    );
};
 
export default Navbar;