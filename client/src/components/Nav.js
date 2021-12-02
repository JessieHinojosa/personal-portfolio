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
      nav-menu absolute top-0 left-0 w-3/4 h-full bg-grey text-center 
      px-mobile-x-pg-padding py-mobile-y-pg-padding
      `}
        onClick={()=> {
            closeMenu()
        }}
      >
        <div className='mt-12'>
        <h2 className='font-primary text-nav-menu-heading'>Jessie Hinojosa</h2>
        <h3 className='font-secondary text-nav-menu-subheading'>Full-Stack Developer</h3>
        <ul className='
          mt-8 text-left font-secondary
        '>
            <li>Background</li>
            <li>Projects</li>
            <li>Connect</li>
            <li>Qualifications</li>
        </ul>
        </div>
      </aside>
    let menuMask =
         <div className='
           fixed left-0 top-0 bg-black bg-opacity-40 h-full w-full 
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
              className='h-full w-full'
              size='lg'
              onClick={() => setToggleMenu(!toggleMenu)}
             />
            {toggleMenu && menuMask}
            {toggleMenu && menu }
            
        </nav>
    )
}

export default Nav
