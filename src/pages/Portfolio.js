import React from 'react'
import MdButton from '../components/buttons/MdButton';
import SmButton from '../components/buttons/SmButton'
import { ProjectData } from '../components/project-data/ProjectData'



const Portfolio = () => {
    let evenProjects;
    let oddProjects
    const desktopView = (() => {
        if(window.screen.availWidth >= 1366) {
    
             evenProjects = ProjectData.filter(function isEven(project, index) {
                return index % 2 === 0
            })
             oddProjects = ProjectData.filter(function isOdd(project, index) {
                return index % 2 === 1
            })
            
            return true
        } else {
            return false
        }
    })()
    
    return (
        <section 
          className='
            w-mobile-paragraph-w mx-auto pt-12
            desktop:w-full
            ' 
          id='portfolio'>
              {/* mobile view */}
          {desktopView ? '' : 
            <div className='
              text-center font-primary text-pg-heading
              mobile:text-nav-menu-heading
              
            '>
                <h2>Featured Projects</h2>
                <p className='
                  font-secondary text-mobile-paragraph
                  my-mobile-margin-from-pg-heading
                  mobile:text-mobile-exploring-text
                '>
                    Showcasing the most current projects chronologically to highlight
                    my growth as a full-stack developer. Currently, all projects are for practice only, not for commercial use.

                </p>
            </div>
         }
        {/* desktop view */}
           {desktopView ? 
           <div className=''>
               <div className='
               heading bg-grey
               text-left pl-32 pt-2 pb-52
               '>
                <h2 className='
                  font-primary desktop:text-desktop-heading fade fadeOut
                '>Featured Projects</h2>
                    <p className='
                    font-secondary text-mobile-paragraph
                    my-mobile-margin-from-pg-heading
                    mobile:text-mobile-exploring-text
                    desktop:text-pg-heading desktop:w-4/12 fade fadeOut
                    '>
                        Showcasing the most current projects cronologically to highlight
                        my growth as a full-stack developer. Currently, all projects are for practice only, not for commercial use.

                    </p>
                </div>
                <div className='flex w-10/12 mx-auto justify-around '>
                <div className='w-1/3 -mt-32'>
                    {oddProjects.map((card, index) => {
                            return(
                                <div className='my-12 fade fadeOut' key={index}>
                                <div className='
                                  outer-card rounded-cards shadow-md 
                                ' key={index} >
                                    <div className='inner-card relative z-0 border-2 rounded-t-cards border-black'>
                                        <img src={card.desktopImage} className='rounded-t-cards w-full' key={index} alt='application page'/>
                                    </div>
                                    <div className='
                                      font-secondary -mt-2 pt-4  pb-3 bg-grey text-white
                                      rounded-cards relative z-10 border-t-2 border-black 
                                      
                                    '>
                                        <h3 className='
                                          w-full font-primary text-nav-menu-heading text-center
                                          
                                        '>
                                            {card.name}
                                        </h3>
                                        <p className='w-full text-nav-heading my-2 px-2'>
                                            {card.description}
                                        </p>
                                        <div className='flex flex-wrap justify-between px-8 mb-3'>
                                        <ul className='
                                          w-2/4 list-disc text-left list-inside
                                          text-project-detail pb-3
                                        '>
                                            {card.detail.map((detail, index) => {
                                                return(
                                                    <li key={index}>{detail}</li>
                                                )
                                            })}
                                        </ul>
                                        <ul className='
                                          w-1/3 list-disc text-left list-inside
                                          text-project-detail
                                        '>
                                        {card.tech.map((tech, index) => {
                                                return(
                                                    <li key={index} >{tech}</li>
                                                )
                                            })}
        
                                        </ul>
                                    </div>
                                    <div className='flex justify-end pr-5'>
                                        <MdButton
                                            buttonClass='
                                            bg-baby-blue w-mobile-lg-button-w text-nav-menu-subheading 
                                            text-center rounded-cards font-tertiary text-dark-black py-0.5
                                            mx-2
                                            ' 
                                            buttonText='View Github'
                                            url={card.repoUrl}
                                            />
                                        <MdButton
                                            buttonClass='
                                            bg-baby-blue w-mobile-lg-button-w text-nav-menu-subheading 
                                            text-center rounded-cards font-tertiary text-dark-black py-0.5
                                            ' 
                                            buttonText='View Site'
                                            url={card.deployedUrl}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                    })}
                </div>
                <div className='w-1/3 -mt-60'>
                    {evenProjects.map((card, index) => {
                            return(
                                <div className='my-12 fade fadeOut' key={index}>
                                <div className='
                                  outer-card rounded-cards shadow-md 
                                ' key={index} >
                                    <div className='inner-card relative z-0 border-2 rounded-t-cards border-black'>
                                        <img src={card.desktopImage} className='rounded-t-cards w-full' key={index} alt='application page'/>
                                    </div>
                                    <div className='
                                      font-secondary -mt-2 pb-3 pt-4 bg-grey text-white
                                      rounded-button relative z-10 border-t-2 border-black 
                                      
                                    '>
                                        <h3 className='w-full font-primary text-nav-menu-heading text-center'>
                                            {card.name}
                                        </h3>
                                        <p className='w-full text-nav-heading my-2 mx-2 px-2'>
                                            {card.description}
                                        </p>
                                        <div className='flex flex-wrap justify-between px-8 mb-3'>
                                        <ul className='
                                          w-2/4 list-disc text-left list-inside
                                          text-project-detail pb-3
                                        '>
                                            {card.detail.map((detail, index) => {
                                                return(
                                                    <li key={index} >{detail}</li>
                                                )
                                            })}
                                        </ul>
                                        <ul className='
                                          w-1/3 list-disc text-left list-inside
                                          text-project-detail 
                                        '>
                                        {card.tech.map((tech, index) => {
                                                return(
                                                    <li key={index} >{tech}</li>
                                                )
                                            })}
        
                                        </ul>
                                        </div>
                                <div className='flex justify-end pr-5'>
                                <MdButton
                                    buttonClass='
                                    bg-baby-blue w-mobile-lg-button-w text-nav-menu-subheading 
                                    text-center rounded-cards  font-tertiary text-dark-black py-0.5
                                    mx-2
                                    ' 
                                    buttonText='View Github'
                                    url={card.repoUrl}
                                    />
                               <MdButton
                                    buttonClass='
                                    bg-baby-blue w-mobile-lg-button-w text-nav-menu-subheading 
                                    text-center  rounded-cards font-tertiary text-dark-black py-0.5
                                    ' 
                                    buttonText='View Site'
                                    url={card.deployedUrl}
                                    />
                                </div>
                                    </div>
                                </div>
                            </div>
                            )
                    })}
                </div>
               </div>

           </div>
           : 
            <div className=' -mx-4 mobile:-mx-9'>
                {ProjectData.map((card, index) => {
                    return (
                     <div className='mb-6 fade fadeOut' key={index}>
                        <div className='
                          outer-card rounded-button shadow-md
                        ' key={index} >
                            <div className='inner-card relative z-0 border-2 rounded-t-button border-dark-black'>
                                <img src={card.image} className='rounded-t-button w-full' key={index} alt='application page'/>
                            </div>
                            <div className='
                              font-secondary -mt-2 p-2  bg-grey text-white
                              rounded-button relative z-10 border-t-2 border-dark-black 
                              mobile:p-4
                            '>
                                <h3 className='w-full font-primary text-mobile-lg-button text-center'>
                                    {card.name}
                                </h3>
                                <p className='w-full text-nav-menu-subheading my-2'>
                                    {card.description}
                                </p>
                                <div className='flex flex-wrap justify-between'>
                                <ul className='
                                  w-2/4 list-disc text-left list-inside
                                  text-mobile-exploring-text
                                '>
                                    {card.detail.map((detail, index) => {
                                        return(
                                            <li key={index} >{detail}</li>
                                        )
                                    })}
                                </ul>
                                <ul className='
                                  w-1/3 list-disc text-left list-inside
                                  text-mobile-exploring-text 
                                '>
                                {card.tech.map((tech, index) => {
                                        return(
                                            <li key={index} >{tech}</li>
                                        )
                                    })}

                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className='
                          flex justify-between px-10
                        '>
                            <SmButton 
                                buttonClass='
                                bg-baby-blue w-mobile-sm-button-w text-mobile-sm-button 
                                text-center py-0.25 rounded-button mx-auto mt-4 font-tertiary 
                                text-dark-black 
                                '
                                buttonText='Visit Github'
                                url={card.repoUrl}
                            />
                            <SmButton 
                                buttonClass='
                                bg-baby-blue w-mobile-sm-button-w text-mobile-sm-button 
                                text-center py-0.25 rounded-button mx-auto mt-4 font-tertiary text-dark-black
                                '
                                buttonText='Visit Site'
                                url={card.deployedUrl}

                            />
                       </div>
                    </div>
                    )
                })}
                
            </div>
          }     

        </section>
    )
}

export default Portfolio
