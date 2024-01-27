import React from 'react'
import desktopImg from "./assets/images/image-web-3-desktop.jpg"
import mobileImg from "./assets/images/image-web-3-mobile.jpg"

function Body() {
  return (
    <div className=' container p-[20px] mx-auto max-w-[1100px] grid md:grid-cols-3 md:grid-row-2'>
        <div className='md:col-span-2'>
            <img className='md:hidden' src={mobileImg} alt="mobile Hero Section" />
            <img className='hidden md:block' src={desktopImg} alt='desktop hero section' />
        </div>
        <div className='col-span2 row-start-2 flex'>
            <h1 className='text-[45px] leading-[44px] font-bold'>The Bright Future of Web 3.0?</h1>
            <p className='mt-[20px]'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

            <button className='bg-red-500 text-white px-8 py-2 tracking-widest my-6'>Read more</button>
        </div>
        <div className='bg-[#0d0b22] text-white p-[18px] md:col-start-3 md:row-span-2 '>
            <h2 className='text-[#d5c04a] text-[30px] font-bold pb-[8px]'>New</h2> 
            <div className='border-b border-[#e8dbdb] py-[20px]'>
                <h4 className='font-bold text-[18px] pb-[10px]'>Hydrogen VS Electric Cars</h4>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>            
            <div className='border-b border-[#e8dbdb] py-[20px]'>
                <h4 className='font-bold text-[18px] pb-[10px]'>The Downsides of AI Artistry</h4>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div className='py-[20px]'>
                <h4 className='font-bold text-[18px] pb-[10px]'>Is VC Funding Drying Up?</h4>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>


  
 {/* <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>. 
  </div> */}
    </div>
  )
}

export default Body