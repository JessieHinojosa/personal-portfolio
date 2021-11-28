import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    let menu = 
        <ul className='absolute top-0 right-0 bg-black text-center'>
            <li>
                <FontAwesomeIcon 
                icon={faBars} 
                onClick={() => setToggleMenu(!toggleMenu)}
                />
            </li>
            <li>Background</li>
            <li>Projects</li>
            <li>Connect</li>
            <li>Qualifications</li>
        </ul>
    return (
        <nav className='
          
        '>
            {!toggleMenu && <FontAwesomeIcon 
              icon={faBars} 
              onClick={() => setToggleMenu(!toggleMenu)}
            />}
            {toggleMenu && menu }
            
        </nav>
    )
}

export default Nav
