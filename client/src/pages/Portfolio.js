import React from 'react'
import SmButton from '../components/buttons/SmButton'
import { ProjectData } from '../components/project-data/ProjectData'



const Portfolio = () => {
    return (
        <section className='w-mobile-paragraph-w mx-auto pt-12' id='portfolio'>
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
                    Showcasing the most current projects cronologically to highlight
                    my growth as a full-stack developer
                </p>
            </div>
            <div className=' -mx-4 mobile:-mx-9'>
                {ProjectData.map((card, index) => {
                    return (
                     <div className='mb-6' key={index}>
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
            
        </section>
    )
}

export default Portfolio
