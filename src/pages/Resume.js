import React from 'react'
import BackgroundPaper from '../assets/images/sm-mobile/background-paper.png'

const Resume = () => {
    return (
        <section className='
          py-12 w-mobile-paragraph-w mx-auto
          mobile:w-mobile-lg-paragraph-w
          desktop:w-full desktop:mt-32
          ' 
          id='resume'>
            <div className='
              desktop:pl-32 fade fadeOut
              '>
                <h2 className='
                  text-center font-primary text-pg-heading
                  mobile:text-nav-menu-heading
                  desktop:text-left desktop:text-desktop-heading
                  
                '>Qualifications</h2>
                <p className='
                text-secondary text-mobile-paragraph text-center 
                my-mobile-margin-from-pg-heading
                mobile:text-mobile-exploring-text
                desktop:text-left desktop:text-pg-heading desktop:w-4/12
                '>
                    I believe all experience is relavent and valuable. 
                    As I build my resume, I hope that I continually add 
                    value to society in all forms.  
                </p>
            </div>
            <div className='
              text-center
              desktop:w-10/12 desktop:mx-auto
              desktop:px-8 desktop:mt-10 fade fadeOut
            '>
                <h3 className='
                  font-primary mobile-lg-button my-2
                  mobile:text-nav-menu-heading
                  desktop:text-pg-subheading
                '>
                    Summary
                </h3>
                <p className='
                  font-secondary text-mobile-button
                  mobile:text-mobile-exploring-text
                  desktop:text-desktop-paragraph
                  
                '>
                   Full-Stack Web Developer utilizing full-stack technology to build a 
                   solid foundation, to develop systems that give users a more intuitive 
                   and engaging experience with web applications. Highlighting the ability 
                   to resolve conflict while collaboratively building team morale. Earning 
                   a certificate from the University of Central Florida Coding Bootcamp 
                   allowed skill development in JavaScript, CSS, React, GraphQL, MySQL, and 
                   other full-stack technologies. Mobile-First design along with Agile and 
                   Test Driven Development ensures a cohesive environment. Eager to hone 
                   and develop skills to continually learn and engage in a fast-paced 
                   environment with constant challenges. 
                </p>
            </div>
            <div className='
              text-center
              desktop:w-10/12 desktop:mx-auto
              desktop:px-8 desktop:mt-10 fade fadeOut
            '>
                <h3 className='
                  font-primary mobile-lg-button my-3
                  mobile:text-nav-menu-heading
                  desktop:text-pg-subheading
                '>
                  Technical Skills
                </h3>

                <h4 className='
                  font-primary text-nav-menu-subheading
                  mobile:text-mobile-lg-button
                  desktop:text-desktop-paragraph
                  

                '>Languages</h4>
                <p className='
                  text-mobile-button font-secondary mb-2
                  mobile:text-mobile-exploring-text
                  desktop:text-desktop-paragraph
                  

                '>HTML, CSS, JavaScript, GraphQL, MySQL</p>

                <h4 className='
                  font-primary text-nav-menu-subheading
                  mobile:text-mobile-lg-button
                  desktop:text-desktop-paragraph
                  

                  '>Frameworks</h4>
                <p className='
                  text-mobile-button font-secondary mb-2
                  mobile:text-mobile-exploring-text
                  desktop:text-desktop-paragraph
                  

                '>Express, Handlebars.js, jQuery</p>

                <h4 className='
                  font-primary text-nav-menu-subheading
                  mobile:text-mobile-lg-button
                  desktop:text-desktop-paragraph
                  

                  '>Libraries</h4>
                <p className='
                  text-mobile-button font-secondary mb-2
                  mobile:text-mobile-exploring-text
                  desktop:text-desktop-paragraph
                  

                '>React, Redux, Apollo Client</p>

                <h4 className='
                  font-primary text-nav-menu-subheading
                  mobile:text-mobile-lg-button
                  desktop:text-desktop-paragraph
                  

                  '>Other</h4>
                <p className='
                  text-mobile-button font-secondary
                  mobile:text-mobile-exploring-text
                  desktop:text-desktop-paragraph
                  

                '>Node.js, MongoDB, Sequelize</p>
            </div>
            <div className='
              relative z-10
              desktop:w-10/12 desktop:mx-auto
              desktop:mt-10 fade fadeOut
            '>
                <h3 className='
                  font-primary mobile-lg-button my-3 text-center
                  mobile:text-nav-menu-heading
                  desktop:text-pg-subheading
                '>
                  Experience
                </h3>
                <div className='
                  flex justify-between
                  desktop:px-8
                '>
                  <h4 className='
                    text-mobile-button font-primary
                    mobile:text-mobile-exploring-text
                    desktop:text-desktop-paragraph
                    
  
                  '>US Water Services Corporation</h4>
                  <h4 className='
                    text-mobile-button font-primary
                    mobile:text-mobile-exploring-text
                    desktop:text-desktop-paragraph
                    
  
                '>2021-Present</h4>
                </div>
                <div className='
                  flex justify-between
                  desktop:px-8
                '>
                  <h4 className='
                    text-mobile-button font-primary
                    desktop:text-desktop-paragraph
                    
  
                    '>Wastewater Plant Operation</h4>
                  <h4 className='
                    text-mobile-button font-primary
                    desktop:text-desktop-paragraph
                    
  
                    '>Crystal River, FL</h4>
                </div>
                <div className='
                  text-mobile-paragraph font-secondary text-center my-1
                  desktop:text-desktop-paragraph
                  desktop:px-20

                  '>
                    <p>
                    Using critical thinking with perseverance to troubleshoot the challenges with managing a 
                    city’s water municipality along with ensuring the biological process is meeting the state 
                    regulations.
                    </p>
                    <p className=''>
                    Key learning experience:  Approach problems from a different angle
                    </p>
                </div>
                <div className='
                  flex justify-between
                  desktop:px-8
                '>
                  <h4 className='
                    text-mobile-button font-primary
                    mobile:text-mobile-exploring-text
                    desktop:text-desktop-paragraph
  
                '>Triangle House LLC</h4>
                  <h4 className='
                    text-mobile-button font-primary
                    mobile:text-mobile-exploring-text
                    desktop:text-desktop-paragraph
                   
  
                '>2021-2021</h4>
                </div>
                <div className='
                  flex justify-between
                  desktop:px-8
                '>
                  <h4 className='
                    text-mobile-button font-primary
                    desktop:text-desktop-paragraph
                  '>Assembly Line Technician </h4>
                  <h4 className='
                    text-mobile-button font-primary
                    desktop:text-desktop-paragraph  
                    '>Brooksville, FL</h4>
                </div>
                <div className='
                  text-mobile-paragraph font-secondary text-center my-1
                  desktop:text-desktop-paragraph
                  desktop:px-20
                  '>
                    <p>
                    Prepare and organize a daily system to ensure that production fulfillment is not hindered.
                    </p>
                    <p className=''>
                    Key learning experience: Change process to meet a deadline
                    </p>
                </div>
                <div className='flex justify-between desktop:px-8'>
                  <h4 className='
                    text-mobile-button font-primary
                    mobile:text-mobile-exploring-text
                    desktop:text-desktop-paragraph
                '>State of Florida</h4>
                  <h4 className='
                    text-mobile-button font-primary
                    mobile:text-mobile-exploring-text
                    desktop:text-desktop-paragraph
                    
  
                '>2018-2021</h4>
                </div>
                <div className='
                  flex justify-between
                  desktop:px-8
                '>
                  <h4 className='
                    text-mobile-button font-primary
                    desktop:text-desktop-paragraph
                    
                  '>GED Tutor </h4>
                  <h4 className='
                    text-mobile-button font-primary
                    desktop:text-desktop-paragraph
                    '>Wakulla, FL</h4>
                </div>
                <div className='
                  text-mobile-paragraph font-secondary text-center my-1
                  desktop:text-desktop-paragraph desktop:px-20
                  '>
                    <p>
                        Develop a weekly lesson plan with the proper curriculum from the state standards 
                        and guide the adult class of 20 toward the success of passing the GED.
                        
                    </p>
                    <p className=''>
                        Key learning experience: Breakdown curriculum for unconventional learner
                    </p>
                </div>
                <div className='
                  desktop:px-8
                '>
                <h3 className='
                  font-primary mobile-lg-button my-2 text-center
                  mobile:text-nav-menu-heading
                  desktop:text-pg-subheading desktop:mt-10
                '>
                    Education
                </h3>
                <p className='
                  text-mobile-paragraph font-secondary text-center
                  mobile:text-mobile-exploring-text
                  desktop:text-desktop-paragraph
                '>UCF Coding Bootcamp</p>
                <p className='
                  text-mobile-paragraph font-secondary text-center
                  mobile:text-mobile-exploring-text
                  desktop:text-desktop-paragraph
                '>University of Central Florida, Orlando, FL</p>
                </div>
            </div>
            <img src={BackgroundPaper} alt='blank paper' className='
               absolute w-40 left-0 top-mobile-bg-paper-top-position z-0
               mobile:top-mobile-lg-bg-paper-top-position
               desktop:w-72 desktop:text-desktop-paragraph
               fade fadeOut desktop:top-desktop-bg-paper-top-position
               '/>
        </section>
    )
}

export default Resume
