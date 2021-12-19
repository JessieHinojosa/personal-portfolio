import React from 'react'
import MdButton from '../components/buttons/MdButton'
import ExploringDivider from '../components/ExploringDivider'

const About = () => {
  const desktopView = (() => {
    if(window.screen.availWidth >= 1366) {
      return true
    } else {
      return false
    }
  })()
  
    return (
        <section className='pt-12 desktop:w-10/12 desktop:mx-auto desktop:pt-28' id='about'>
            <h2 className='
              text-center font-primary text-pg-heading leading-5
              mobile:text-nav-menu-heading desktop:text-left
              desktop:text-desktop-heading desktop:leading-7
            '>
                Meet the developer<br/>
                <span className='
                   font-secondary text-mobile-lg-button desktop:text-nav-menu-heading
                   
                  '>
                    Full-Stack Enthusiest
                </span>
            </h2>
            <div className='
              paragraph-canvas
              desktop:flex desktop:justify-between
            '>
             <div className='
              about-paragraphs relative w-mobile-paragraph-w mx-auto 
              mt-mobile-margin-from-pg-heading z-10
              mobile:w-mobile-lg-paragraph-w desktop:ml-0 desktop:w-2/4 
              desktop:pr-4 desktop:mt-14 
              '>
                <p className='
                  font-secondary text-mobile-paragraph mb-2
                  mobile:text-mobile-exploring-text
                   desktop:mb-4 desktop:text-nav-heading desktop:w-11/12
                   desktop:first-line:uppercase
                '>
                    <span
                     className='
                       text-purp font-primary text-base
                       desktop:text-desktop-heading pr-0.5

                      '
                     >U</span>tilizing full-stack technologies to build a solid foundation, in order 
                    to develop systems that give users a more intuitive and engaging experience
                    with web applications. My background in tutoring and as a Water Plant 
                    Operator has equipped me with valuable adaptability and  troubleshooting 
                    with attention to details. 
                </p>                
                <p className='
                  font-secondary text-mobile-paragraph mb-2
                  mobile:text-mobile-exploring-text
                  desktop:text-nav-heading desktop:mb-4 desktop:w-11/12
                  desktop:first-line:uppercase
                '>
                <span
                  className='
                    text-purp font-primary 
                    text-base desktop:text-desktop-heading pr-0.5
                  '
                >G</span>radutaed from the University of Central Florida’s Coding Bootcamp, where 
                I developed skills in JavaScript, CSS, React, GraphQL and other full-stack 
                technologies, along with practical experience in the roles of a team member and a 
                project manager. 
                </p>
                <p className='
                  font-secondary text-mobile-paragraph
                  mobile:text-mobile-exploring-text
                  desktop:text-nav-heading desktop:w-11/12
                  desktop:first-line:uppercase
                '>
                <span className='
                   text-purp font-primary 
                   text-base desktop:text-desktop-heading pr-0.5
                '>S</span>triving 
                to become an intuitive problem solver<br /> with the passion to take on any 
                challenge. Mobile-first design along with agile and test driven development ensures 
                a cohesive development environment. I am eager to hone my skills in order to 
                continually learn and engage in a fast-paced environment where I am constantly 
                challenged. 
                </p>
             </div>
            {desktopView ?
              <div className='
              z-10 w-2/4 text-desktop-lg-paragraph font-secondary 
              pl-4 my-auto 

              '>
                <p className='w-11/12'>
                  <span className='text-purp font-primary text-desktop-heading pr-0.5'>P</span>ursuing either a front-end or back-end position with a team that 
                  is community driven, in which also thrives to build with a vision to enhance 
                  societies ecosystem.
                </p>
                <p className='pt-8 w-11/12'>
                  <span className='text-purp font-primary text-desktop-heading pr-0.5'>A</span>lthough todays path is pointed toward a company enviroment, I have a deep desire 
                  to learn by experience. So, If there is either a project that you want help with 
                  or just need a short-term contract developer, Please feel free to connect with me
                </p>

              </div> : ''
            }
            </div>
            <div className='
              h-mobile-bg-square-h w-mobile-bg-square-w bg-grey
              absolute right-0 top-mobile-bg-square-top-position 
              rounded-l-button z-0
              mobile:h-mobile-lg-bg-square-h mobile:w-mobile-lg-bg-square-w
              mobile:top-mobile-lg-bg-square-top-position
              desktop:top-desktop-bg-square-top
              desktop:w-5/12 desktop:h-desktop-bg-square-h desktop:rounded-button
              
            '>
            </div>
            {desktopView ? 
               <div className='flex justify-between mt-20'>
                 <div className=' w-2/4 pr-36'>
                  <MdButton 
                   buttonClass='
                   bg-baby-blue text-desktop-paragraph 
                   text-center rounded-button w-mobile-bg-square-w 
                   font-tertiary text-dark-black 
                   py-1 z-10 relative mx-auto
                 ' 
                 buttonText='View Resume'
                 url='#resume'/>
                 </div>
                 <div className='w-2/4 pr-8'>
                  <MdButton 
                   buttonClass='
                   bg-baby-blue text-desktop-paragraph 
                   text-center rounded-button w-mobile-bg-square-w 
                   font-tertiary text-dark-black  
                   py-1 z-10 relative mx-auto
                 ' 
                 buttonText='Connect'
                 url='#connect'/>
                 </div>

               </div> : 
            
            <MdButton 
              buttonClass='
                bg-baby-blue w-mobile-md-button-w text-mobile-button 
                text-center pb-0.5 pt-1 rounded-button mx-auto mt-4 font-tertiary text-dark-black
              ' 
              buttonText='View Resume'
              url='#resume' />}
            
            <ExploringDivider />
        </section>
    )
}

export default About
