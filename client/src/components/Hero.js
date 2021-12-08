import React from 'react'
import Header from './Header'
import ProfilePic from '../assets/images/sm-mobile/profile-pic.png';
import TriangleBg from '../assets/images/sm-mobile/triangle-bg.svg';
import HeroButton from './buttons/HeroButton';

const hero = () => {
    return (
        <section className='px-mobile-x-pg-padding'>
            <Header />
            <h1 className='
              relative z-10
              text-center text-purp font-secondary text-hero-heading
              mt-mobile-y-margin-from-header 
              '>Building Intuitive Web<br />Applications</h1>
            <img src={ProfilePic} 
                 alt='full stack developer' 
                 className='relative z-10 mx-auto my-mobile-y-general-margin '></img>
            <img src={TriangleBg} 
                 alt='full stack developer' 
                 className='absolute left-0 top-mobile-triangle-position'></img>
            <HeroButton />

        </section>
    )
}

export default hero
