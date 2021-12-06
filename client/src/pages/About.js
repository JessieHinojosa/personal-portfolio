import React from 'react'
import MdButton from '../components/buttons/MdButton'
import ExploringDivider from '../components/ExploringDivider'

const About = () => {
    return (
        <section>
            <h2 className='text-center font-primary text-pg-heading leading-5'>
                Meet the developer<br/>
                <span className='font-secondary text-mobile-lg-button'>Full-Stack Enthusiest</span>
            </h2>
            <div className='about-paragraphs relative w-mobile-paragraph-w mx-auto mt-mobile-margin-from-pg-heading z-10'>
                <p className='font-secondary text-mobile-paragraph mb-2'>
                    Utilizing full-stack technologies to build a solid foundation, in order 
                    to develop systems that give users a more intuitive and engaging experience
                    with web applications. My background in tutoring and as a Water Plant 
                    Operator has equipped me with valuable adaptability and  troubleshooting 
                    with attention to details. 
                </p>                
                <p className='font-secondary text-mobile-paragraph mb-2'>
                I have gradutaed from the University of Central Florida’s Coding Bootcamp, where 
                I developed skills in JavaScript, CSS, React, GraphQL and other full-stack 
                technologies, along with practical experience in the roles of a team member and a 
                project manager. 
                </p>
                <p className='font-secondary text-mobile-paragraph'>
                I strive to become an intuitive problem solver with the passion to take on any 
                challenge. Mobile-first design along with agile and test driven development ensures 
                a cohesive development environment. I am eager to hone my skills in order to 
                continually learn and engage in a fast-paced environment where I am constantly 
                challenged. 
                </p>
            </div>
            <div className='
              h-mobile-bg-square-h w-mobile-bg-square-w bg-grey
              absolute right-0 top-mobile-bg-square-top-position 
              rounded-l-button z-0
            '>
            </div>
            <MdButton 
              buttonClass='
                bg-baby-blue w-mobile-md-button-w text-mobile-button 
                text-center py-0.5 rounded-button mx-auto mt-4 font-tertiary text-dark-black
              ' 
              buttonText='View Resume' />
            <ExploringDivider />
        </section>
    )
}

export default About
