import React from 'react'
import BackgroundPaper from '../assets/images/sm-mobile/background-paper.png'

const Resume = () => {
    return (
        <section className='
          pt-12 w-mobile-paragraph-w mx-auto
          mobile:w-mobile-lg-paragraph-w
          ' 
                 id='resume'>
            <div>
                <h2 className='
                  text-center font-primary text-pg-heading
                  mobile:text-nav-menu-heading
                '>Qualifications</h2>
                <p className='
                text-secondary text-mobile-paragraph text-center 
                my-mobile-margin-from-pg-heading
                mobile:text-mobile-exploring-text
                '>
                    I believe all experience is relavent and valuable. 
                    As I build my resume, I hope that I continually add 
                    value to society in all forms.  
                </p>
            </div>
            <div className='text-center'>
                <h3 className='
                  font-primary mobile-lg-button my-2
                  mobile:text-nav-menu-heading
                '>
                    Summary
                </h3>
                <p className='
                  font-secondary text-mobile-button
                  mobile:text-mobile-exploring-text
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
            <div className='text-center'>
                <h3 className='
                  font-primary mobile-lg-button my-3
                  mobile:text-nav-menu-heading
                '>
                  Technical Skills
                </h3>

                <h4 className='
                  font-primary text-nav-menu-subheading
                  mobile:text-mobile-lg-button
                '>Languages</h4>
                <p className='
                  text-mobile-button font-secondary mb-2
                  mobile:text-mobile-exploring-text
                '>HTML, CSS, JavaScript, GraphQL, MySQL</p>

                <h4 className='
                  font-primary text-nav-menu-subheading
                  mobile:text-mobile-lg-button'>Frameworks</h4>
                <p className='
                  text-mobile-button font-secondary mb-2
                  mobile:text-mobile-exploring-text
                '>Express, Handlebars.js, jQuery</p>

                <h4 className='
                  font-primary text-nav-menu-subheading
                  mobile:text-mobile-lg-button'>Libraries</h4>
                <p className='
                  text-mobile-button font-secondary mb-2
                  mobile:text-mobile-exploring-text
                '>React, Redux, Apollo Client</p>

                <h4 className='
                  font-primary text-nav-menu-subheading
                  mobile:text-mobile-lg-button'>Other</h4>
                <p className='
                  text-mobile-button font-secondary
                  mobile:text-mobile-exploring-text
                '>Node.js, MongoDB, Sequelize</p>
            </div>
            <div className='relative z-10'>
                <h3 className='
                  font-primary mobile-lg-button my-3 text-center
                  mobile:text-nav-menu-heading
                '>
                  Experience
                </h3>
                <div className='flex justify-between'>
                  <h4 className='
                    text-mobile-button font-primary
                    mobile:text-mobile-exploring-text
                  '>US Water Services Corporation</h4>
                  <h4 className='
                    text-mobile-button font-primary
                    mobile:text-mobile-exploring-text
                '>2021-Present</h4>
                </div>
                <div className='flex justify-between'>
                  <h4 className='text-mobile-button font-primary'>Wastewater Plant Operation</h4>
                  <h4 className='text-mobile-button font-primary'>Crystal River, FL</h4>
                </div>
                <div className='text-mobile-paragraph font-secondary text-center my-1'>
                    <p>
                    Using critical thinking with perseverance to troubleshoot the challenges with managing a 
                    city’s water municipality along with ensuring the biological process is meeting the state 
                    regulations.
                    </p>
                    <p className=''>
                    Key learning experience:  Approach problems from a different angle
                    </p>
                </div>
                <div className='flex justify-between'>
                  <h4 className='
                    text-mobile-button font-primary
                    mobile:text-mobile-exploring-text
                '>Triangle House LLC</h4>
                  <h4 className='
                    text-mobile-button font-primary
                    mobile:text-mobile-exploring-text
                '>2021-2021</h4>
                </div>
                <div className='flex justify-between'>
                  <h4 className='text-mobile-button font-primary'>Assembly Line Technician </h4>
                  <h4 className='text-mobile-button font-primary'>Brooksville, FL</h4>
                </div>
                <div className='text-mobile-paragraph font-secondary text-center my-1'>
                    <p>
                    Prepare and organize a daily system to ensure that production fulfillment is not hindered.
                    </p>
                    <p className=''>
                    Key learning experience: Change process to meet a deadline
                    </p>
                </div>
                <div className='flex justify-between'>
                  <h4 className='
                    text-mobile-button font-primary
                    mobile:text-mobile-exploring-text
                '>State of Florida</h4>
                  <h4 className='
                    text-mobile-button font-primary
                    mobile:text-mobile-exploring-text
                '>2018-2021</h4>
                </div>
                <div className='flex justify-between'>
                  <h4 className='text-mobile-button font-primary'>GED Tutor </h4>
                  <h4 className='text-mobile-button font-primary'>Wakulla, FL</h4>
                </div>
                <div className='text-mobile-paragraph font-secondary text-center my-1'>
                    <p>
                        Develop a weekly lesson plan with the proper curriculum from the state standards 
                        and guide the adult class of 20 toward the success of passing the GED.
                        
                    </p>
                    <p className=''>
                        Key learning experience: Breakdown curriculum for unconventional learner
                    </p>
                </div>
                <div className='
                  
                '>
                <h3 className='
                  font-primary mobile-lg-button my-2 text-center
                  mobile:text-nav-menu-heading
                '>
                    Education
                </h3>
                <p className='
                  text-mobile-paragraph font-secondary text-center
                  mobile:text-mobile-exploring-text
                '>UCF Coding Bootcamp</p>
                <p className='
                  text-mobile-paragraph font-secondary text-center
                  mobile:text-mobile-exploring-text
                '>University of Central Florida, Orlando, FL</p>
                </div>
            </div>
            <img src={BackgroundPaper} alt='blank paper' className='
               absolute left-0 top-mobile-bg-paper-top-position z-0
               mobile:top-mobile-lg-bg-paper-top-position
               '/>
        </section>
    )
}

export default Resume
