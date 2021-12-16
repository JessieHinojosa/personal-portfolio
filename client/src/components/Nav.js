import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const closeMenu = () => {
        setToggleMenu(false)
    }
    let menu = 
      <aside className={`
      nav-menu fixed top-0 left-0 w-3/4 h-full bg-grey text-center 
      px-mobile-x-pg-padding py-mobile-y-pg-padding z-50
      `}
        onClick={()=> {
            closeMenu()
        }}
      >
        <div className='mt-12'>
        <h2 className='
            font-primary text-nav-menu-heading
            mobile:text-nav-menu-lg-heading
        '><a href='#home'>Jessie Hinojosa</a></h2>
        <h3 className='
           font-secondary text-nav-menu-subheading
           mobile:text-mobile-lg-button
        '>Full-Stack Developer</h3>
        <ul className='
          mt-8 text-left font-secondary 
          mobile:text-nav-heading
        '>
            <li><a href='#about'>Background</a></li>
            <li><a href='#portfolio'>Projects</a></li>
            <li><a href='#connect'>Connect</a></li>
            <li><a href='#resume'>Qualifications</a></li>
        </ul>
        </div>
      </aside>
    let menuMask =
         <div className='
           fixed left-0 top-0 bg-black bg-opacity-70 h-full w-full z-40
        '
            onClick={()=> {
                closeMenu()
            }}
           >
        </div>
    return (
        <nav className='
        flex align-middle
        '>
             <FontAwesomeIcon 
              icon={faBars} 
              className='h-full w-full desktop:invisible'
              size='lg'
              onClick={() => setToggleMenu(!toggleMenu)}
             />
            {toggleMenu && menuMask}
            {toggleMenu && menu }
            {/* desktop navigation */}
        <ul className='invisible font-tertiary absolute -top-20
           desktop:visible desktop:flex desktop:relative desktop:top-0
           desktop:my-auto text-nav-heading
        '>
            <li><a href='#about'>Background</a></li>
            <li className='ml-6'><a href='#portfolio'>Projects</a></li>
            <li className='ml-6'><a href='#connect'>Connect</a></li>
            <li className='ml-6'><a href='#resume'>Qualifications</a></li>
        </ul>
        </nav>
    )
}

export default Nav
