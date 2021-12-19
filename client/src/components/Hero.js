import React from 'react'
import Header from './Header'
import ProfilePic from '../assets/images/sm-mobile/profile-pic.png';
import TriangleBg from '../assets/images/sm-mobile/triangle-bg.svg';
import DesktopProfilePic from '../assets/images/desktop/profile-pic.png';
import DesktopTriangleBg from '../assets/images/desktop/triangle.png';
import HeroButton from './buttons/HeroButton';
import MdButton from './buttons/MdButton';

const hero = (props) => {
   return (
        <section className=''>
            <Header />
            <div className='
               px-mobile-x-pg-padding desktop:w-10/12 desktop:flex desktop:mx-auto desktop:mt-40
               desktop:justify-end desktop:pr-24 
              '>
            <h1 className='
              relative z-10 mt-12
              text-center text-purp font-secondary text-hero-heading 
              mobile:text-hero-lg-heading
              desktop:text-left desktop:w-desktop-heading-w desktop:text-desktop-hero-heading
              desktop:flex desktop:flex-wrap desktop:absolute desktop:left-48 desktop:z-20
              '>Building Intuitive Web<br />Applications</h1>
            <img src={DesktopProfilePic} 
                 alt='full stack developer' 
                 className='
                   relative w-40 mx-auto z-10  my-12 
                   desktop:my-0 desktop:mx-0
                   desktop:w-desktop-w 
                  '></img>
            <div className='w-full absolute left-0 top-mobile-triangle-position'>
            <img src={DesktopTriangleBg} 
                 alt='background triangle' 
                 className='
                   w-72 mx-auto 
                   mobile:left-10 mobile:w-80 desktop:w-triangle-desktop-w
                   desktop:absolute desktop:-top-10 desktop:left-1/4
                '></img>
                </div>
            {/* desktop images */}
            </div>
            <MdButton  buttonClass='
                invisible absolute -top-10
                bg-baby-blue text-pg-heading 
                text-center rounded-button w-mobile-triangle-position 
                font-tertiary text-dark-black desktop:visible left-48
                py-1 desktop:top-mobile-lg-bg-square-top-position
              ' 
              buttonText='View My Work'
              url='#portfolio' />
            <HeroButton />
        </section>
    )
}

export default hero
