import React from 'react';
import './Header.css';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='logo'> <PeopleAltIcon className="icon" />  translato.

                </div>
                <div className='services'>
                    <a href='#why'>Why us</a>
                    <a href='#translators'>Translators</a>
                    <a href='#pricing'>Pricing</a>
                    <a href='#contact'>Contact</a>
                </div>
            </div>



        </>
    )
}

export default Header;
