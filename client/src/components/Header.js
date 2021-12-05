import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <header className='
           flex justify-between fixed top-0 left-0 pt-2 pb-1
           w-full z-50 px-mobile-x-pg-padding bg-black
        '>
            <h1 className='
              text-nav-heading font-primary
            '>Jessie Hinojosa</h1>
            <Nav />  
        </header>
    )
}

export default Header
