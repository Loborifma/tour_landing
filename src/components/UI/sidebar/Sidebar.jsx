import React from 'react';
import cl from './Sidebar.module.scss';
import vk from '../../../assets/vkontakte-svgrepo-com.svg';
import whatup from '../../../assets/whatsapp-svgrepo-com.svg';
import share from '../../../assets/share-1-svgrepo-com.svg';
 
const Sidebar = () => {

    return (
        <div className={cl.sidebar}>
            <img src={vk} className={cl.vk}/>
            <img src={whatup} className={cl.whatup}/>
            <img src={share} className={cl.share}/>
        </div>
    );
};
 
export default Sidebar;