import React from 'react'
import logo from '../assets/images/icons/smDesktop/portfolio-logo.png'

const Footer = () => {
    return (
        <footer className='bg-grey py-3 text-center desktop:text-nav-heading flex font-secondary'>
          <div className='mx-auto flex'>
            <h6>React, Tailwind CSS </h6>
              <img src={logo} alt='brand logo' className='w-8  mx-6 desktop:mx-12'></img>
            <h6 className=''>
               Jessie Hinojosa &#169; 2021</h6>

          </div>
            
        </footer>
    )
}

export default Footer
