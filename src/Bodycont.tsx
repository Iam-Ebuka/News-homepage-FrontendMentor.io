import React from 'react'
import computer from './assets/images/image-retro-pcs.jpg'
import keyboard from './assets/images/image-top-laptops.jpg'
import pad from './assets/images/image-gaming-growth.jpg'

function Bodycont() {
  return (
    <div className=' container p-[20px] mx-auto max-w-[1050px] flex flex-col md:flex-row gap-3 md:justify-between'>
        <div className='flex gap-5'>
            <div>
                <img src={computer} alt=" computer" />
            </div>
            <div className='space-y-1 flex flex-col justify-center'> 
                <h3 className='text-[30px] text-[#8f8f8f] font-bold'>01</h3>
                <h4 className='font-bold'>Reviving Retro PCs</h4>
                <p className='text-[#8f8f8f]'>What happens when old PCs are given modern upgrades?</p> 
            </div>
        </div>
        <div className='flex gap-5'>
            <div>
                <img src={keyboard} alt='keyboard image' />
            </div>
            <div>
                <h3 className='text-[30px] text-[#8f8f8f] font-bold'>02</h3>
                <h4 className='font-bold'>Top 10 Laptops of 2022</h4>
                <p className='text-[#8f8f8f]'>Our best picks for various needs and budgets.</p>
            </div>
        </div>
        <div className='flex gap-5'>
            <div>
                <img src={pad} alt="game pad" />
            </div>
            <div>
                <h3 className='text-[30px] text-[#8f8f8f] font-bold'>03</h3>
                <h4 className='font-bold'>The Growth of Gaming</h4>
                <p className='text-[#8f8f8f]'>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
    </div>
  )
}

export default Bodycont