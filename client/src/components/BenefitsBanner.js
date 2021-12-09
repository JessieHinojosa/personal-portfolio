import React from 'react'
import infinity from '../assets/images/icons/infinity.png'
import collab from '../assets/images/icons/collab.png'
import brickWall from '../assets/images/icons/brick-wall.png'

const BenefitsBanner = () => {
    return (
        <section className='
           bg-grey h-mobile-benefit-banner-h w-full mt-mobile-y-general-margin
           flex justify-evenly py-mobile-benefit-y-padding
           '>
             <aside className='w-mobile-infinity-w'>
                 <img src={infinity} alt='infinity' className='mx-auto'></img>
                 <h3 className='font-primary text-mobile-lg-button text-center'>Modern</h3>
                 <p className='font-secondary text-mobile-sm text-center pt-0.5'>Exploring and harnessing up-to-date full-stack technologies</p>
             </aside> 
             <aside className='w-mobile-infinity-w'>
                 <img src={collab} alt='group collaboration' className='mx-auto'></img>
                 <h3 className='font-primary text-mobile-lg-button text-center'>Collaborative</h3>
                 <p className='font-secondary text-mobile-sm text-center pt-0.5'>Utilizing Agile development with verbal and visual communication</p>

             </aside> 
             <aside className='w-mobile-infinity-w'>
                 <img src={brickWall} alt='brick walls' className='mx-auto'></img>
                 <h3 className='font-primary text-mobile-lg-button text-center'>Persistent</h3>
                 <p className='font-secondary text-mobile-sm text-center pt-0.5'>Turning challenges into strengths using shear determination</p>

             </aside> 
            
        </section>
    )
}

export default BenefitsBanner
