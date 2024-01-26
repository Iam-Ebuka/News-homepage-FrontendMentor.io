import React from 'react';
import logo from "./assets/images/logo.svg";
import menuClose from "./assets/images/icon-menu-close.svg";
import menuOpen from "./assets/images/icon-menu.svg";

const Header: React.FC = () => {
  return (
    <div className='flex justify-between items-center container h-[100px] p-[20px] mx-auto max-w-[1100px]'>
        <div>
            <img src={logo} alt='logo' />
        </div>
        <div>
            <div className='lg:hidden'>
                <img src={menuOpen} alt="Open the menu" />
            </div>
            <div className="hidden lg:flex lg:space-x-4">
                <a href='#home'>Home</a>
                <a href='#home'>New</a>
                <a href='#home'>Popular</a>
                <a href='#home'>Trending</a>
                <a href='#home'>Categories</a>
            </div>
        </div>
    </div>
  )
}

export default Header