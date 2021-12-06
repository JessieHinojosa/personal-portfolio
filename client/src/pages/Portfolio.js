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
                          outer-card border-2 border-white
                          px-2
                        ' key={index} >
                            <div className='inner-card'>
                            </div>
                            <div className='
                              inner-card-details
                              font-secondary my-2
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
                                            <li>{detail}</li>
                                        )
                                    })}
                                </ul>
                                <ul className='
                                  w-1/3 list-disc text-left list-inside
                                  text-mobile-exploring-text 
                                '>
                                {card.tech.map((tech, index) => {
                                        return(
                                            <li>{tech}</li>
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
