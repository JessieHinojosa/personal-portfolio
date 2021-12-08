import React from 'react'
import { ProjectData } from '../components/project-data/ProjectData'



const Portfolio = () => {
    return (
        <section className='w-mobile-paragraph-w mx-auto'>
            <div className='text-center font-primary text-pg-heading'>
                <h2>Featured Projects</h2>
                <p className='
                  font-secondary text-mobile-paragraph
                  my-mobile-margin-from-pg-heading
                '>
                    Showcasing the most current projects cronologically to highlight
                    my growth as a full-stack developer
                </p>
            </div>
            <div className='card-canvas -mx-4'>
                {ProjectData.map((card, index) => {
                    return (
                        <div className='
                          outer-card rounded-button shadow-md mb-6
                        ' key={index} >
                            <div className='inner-card relative z-0 border-2 rounded-t-button border-dark-black'>
                                <img src={card.image} className='rounded-t-button ' key={index} alt='application page'/>
                            </div>
                            <div className='
                              inner-card-details
                              font-secondary -mt-2 px-2 py-2 bg-grey text-white
                              rounded-button relative z-10 border-t-2 border-dark-black 
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
                    )
                })}
                
            </div>
            
        </section>
    )
}

export default Portfolio
