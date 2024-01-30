import React from 'react'
import computer from './assets/images/image-retro-pcs.jpg'
import keyboard from './assets/images/image-top-laptops.jpg'
import pad from './assets/images/image-gaming-growth.jpg'

function Bodycont() {
  return (
    <div className=' container p-[20px] mx-auto max-w-[1050px] flex flex-col md:flex-row gap-7 lg:gap-3 md:grid md:grid-cols-3 text-[15px]'>
        <div className='grid grid-cols-3 gap-2'>
            <div className='col-span-1'>
                <img className='w-full h-full object-cover' src={computer} alt=" computer" />
            </div>
            <div className='col-span-2 pl-[10px]'> 
                <h3 className='text-[30px] text-[#8f8f8f] font-bold'>01</h3>
                <h4 className='font-bold cursor-pointer hover:text-[#f34242]'>Reviving Retro PCs</h4>
                <p className='text-[#8f8f8f]'>What happens when old PCs are given modern upgrades?</p> 
            </div>
        </div>
        <div className='grid grid-cols-3 gap-2'>
            <div className='col-span-1' >
                <img className='w-full h-full object-cover' src={keyboard} alt='keyboard image' />
            </div>
            <div className='col-span-2 pl-[10px]'>
                <h3 className='text-[30px] text-[#8f8f8f] font-bold'>02</h3>
                <h4 className='font-bold cursor-pointer hover:text-[#f34242]'>Top 10 Laptops of 2022</h4>
                <p className='text-[#8f8f8f]'>Our best picks for various needs and budgets.</p>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-2'>
            <div className='col-span-1'>
                <img className='w-full h-full object-cover' src={pad} alt="game pad" />
            </div>
            <div className='col-span-2 pl-[10px]'>
                <h3 className='text-[30px] text-[#8f8f8f] font-bold'>03</h3>
                <h4 className='font-bold cursor-pointer hover:text-[#f34242]'>The Growth of Gaming</h4>
                <p className='text-[#8f8f8f]'>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
    </div>
  )
}

export default Bodycont