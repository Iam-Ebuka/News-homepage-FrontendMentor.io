import React from 'react';
import logo from "./assets/images/logo.svg"

const Header: React.FC = () => {
  return (
    <div className='flex'>
        <div>
            <img src={logo} alt='logo' />
        </div>
        <div>
            <a href='#home'>Home</a>
            <a href='#home'>New</a>
            <a href='#home'>Popular</a>
            <a href='#home'>Trending</a>
            <a href='#home'>Categories</a>
        </div>
    </div>
  )
}

export default Header