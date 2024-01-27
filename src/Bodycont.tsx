import React from 'react'
import computer from './assets/images/image-retro-pcs.jpg'
import keyboard from './assets/images/image-top-laptops.jpg'
import pad from './assets/images/image-gaming-growth.jpg'

function Bodycont() {
  return (
    <div className=' container p-[20px] mx-auto max-w-[1100px]'>
        <div>
            <div>
                <img src={computer} alt=" computer" />
            </div>
            <div> 
                <h3>01</h3>
                <h4>Reviving Retro PCs</h4>
                <p>What happens when old PCs are given modern upgrades?</p> 
            </div>
        </div>
        <div>
            <div>
                <img src={keyboard} alt="keyboard" />
            </div>
            <div>
                <h3>02</h3>
                <h4>Top 10 Laptops of 2022</h4>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </div>
        <div>
            <div>
                <img src={pad} alt="game pad" />
            </div>
            <div>
                <h3>03</h3>
                <h4>The Growth of Gaming</h4>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
    </div>
  )
}

export default Bodycont