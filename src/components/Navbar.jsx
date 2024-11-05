import React from 'react';
import navList from '../constant/nav';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center gap-[1.5vw]'>
            {navList.map((nav) => (
                <NavLink key={nav.id} to={nav.path} className={({ isActive }) => `font-medium duration-200 flex flex-col text-[1.2vw] active:scale-95 ${isActive ? 'text-primaryOrange hover:text-primaryOrangeHover' : 'hover:text-primaryGray'}`}>
                    <span className='max-md:text-[2.5vw]'>{nav.title}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default Navbar;
