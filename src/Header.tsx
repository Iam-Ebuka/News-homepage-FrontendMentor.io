import React, {useState, useEffect} from 'react';
import logo from "./assets/images/logo.svg";
import menuClose from "./assets/images/icon-menu-close.svg";
import menuOpen from "./assets/images/icon-menu.svg";

const Header: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    useEffect(() => {
        // Update body overflow based on modal state
        document.body.style.overflow = open ? 'hidden' : 'auto';
    
        // Cleanup effect when component unmounts
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [open]);

  return (
    <div className='max-w-[1050px] container mx-auto'>
        <div className='flex justify-between items-center h-[100px] p-[20px]  text-[15px]'>
            <div>
                <img src={logo} alt='logo' />
            </div>
            <div>
                <div className='lg:hidden' onClick={()=> setOpen(true)}>
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
        {open && <div 
        id='check' 
        onClick={(e)=>{
            if((e.target as HTMLElement).id === "check") {
                setOpen(false);
            } }} 
        className={`h-screen w-full absolute top-0 left-0 bg-[#0000004a]`}>
            <div className='w-[70%] bg-white h-full absolute right-0 top-0'>
                <div onClick={()=>setOpen(false)} className='flex justify-end items-center px-5 pt-[30px]'>
                    <img src={menuClose} alt='close the menu' />
                </div>
                <div className="flex flex-col pt-[100px] pl-[30px] space-y-3 font-[500]">
                    <a href='#home'>Home</a>
                    <a href='#home'>New</a>
                    <a href='#home'>Popular</a>
                    <a href='#home'>Trending</a>
                    <a href='#home'>Categories</a>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default Header