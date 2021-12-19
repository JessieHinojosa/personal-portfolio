import React from 'react'
import infinity from '../assets/images/icons/infinity.png'
import collab from '../assets/images/icons/collab.png'
import brickWall from '../assets/images/icons/brick-wall.png'

const BenefitsBanner = () => {
    return (
        <section className='
           bg-grey  w-full mt-mobile-y-general-margin
           flex justify-evenly py-mobile-benefit-y-padding
           desktop:py-mobile-nav-icon
           '>
             <aside className='
                w-mobile-infinity-w
                mobile:w-mobile-bg-square-w
                desktop:w-mobile-lg-paragraph-w
             '>
                 <img src={infinity} alt='infinity' className='mx-auto w-6 desktop:w-20'></img>
                 <h3 className='
                   font-primary text-mobile-lg-button text-center
                   mobile:text-nav-heading desktop:text-desktop-exploring
                '>Modern</h3>
                 <p className='
                   font-secondary text-mobile-sm text-center pt-0.5
                   mobile:text-mobile-button desktop:text-nav-heading
                   desktop:w-mobile-paragraph-w desktop:mx-auto
                '>Exploring and harnessing <br/>up-to-date full-stack technologies</p>
             </aside> 
             <aside className='
               w-mobile-infinity-w
               mobile:w-mobile-bg-square-w
               desktop:w-mobile-lg-paragraph-w
            '>
                 <img src={collab} alt='group collaboration' className='mx-auto w-6 desktop:w-20'></img>
                 <h3 className='
                   font-primary text-mobile-lg-button text-center
                   mobile:text-nav-heading desktop:text-desktop-exploring
                '>Collaborative</h3>
                 <p className='
                   font-secondary text-mobile-sm text-center pt-0.5
                   mobile:text-mobile-button desktop:text-nav-heading
                   desktop:w-mobile-paragraph-w desktop:mx-auto
                '>Utilizing Agile development with verbal and visual communication</p>

             </aside> 
             <aside className='
               w-mobile-infinity-w
               mobile:w-mobile-bg-square-w
               desktop:w-mobile-lg-paragraph-w
            '>
                 <img src={brickWall} alt='brick walls' className='mx-auto w-6 desktop:w-20'></img>
                 <h3 className='
                   font-primary text-mobile-lg-button text-center
                   mobile:text-nav-heading desktop:text-desktop-exploring
                '>Persistent</h3>
                 <p className='
                   font-secondary text-mobile-sm text-center pt-0.5
                   mobile:text-mobile-button desktop:text-nav-heading
                   desktop:w-mobile-paragraph-w desktop:mx-auto
                '>Turning challenges into strengths using shear determination</p>

             </aside> 
            
        </section>
    )
}

export default BenefitsBanner
