import React from 'react'

const Resume = () => {
    return (
        <section className='pt-12 w-mobile-paragraph-w mx-auto' id='resume'>
            <div>
                <h2 className='text-center font-primary text-pg-heading'>Qualifications</h2>
                <p className='
                text-secondary text-mobile-paragraph text-center 
                my-mobile-margin-from-pg-heading
                '>
                    I believe all experience is relavent and valuable. 
                    As I build my resume, I hope that I continually add 
                    value to society in all forms.  
                </p>
            </div>
            <div className='text-center'>
                <h3 className='font-primary mobile-lg-button my-2'>
                    Summary
                </h3>
                <p className='font-secondary text-mobile-button'>
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
                <h3 className='font-primary mobile-lg-button my-3'>
                  Technical Skills
                </h3>

                <h4 className='font-primary text-nav-menu-subheading'>Languages</h4>
                <p className='text-mobile-button font-secondary mb-2'>HTML, CSS, JavaScript, GraphQL, MySQL</p>

                <h4 className='font-primary text-nav-menu-subheading'>Frameworks</h4>
                <p className='text-mobile-button font-secondary mb-2'>Express, Handlebars.js, jQuery</p>

                <h4 className='font-primary text-nav-menu-subheading'>Libraries</h4>
                <p className='text-mobile-button font-secondary mb-2'>React, Redux, Apollo Client</p>

                <h4 className='font-primary text-nav-menu-subheading'>Other</h4>
                <p className='text-mobile-button font-secondary'>Node.js, MongoDB, Sequelize</p>
            </div>
            <div className=''>
                <h3 className='font-primary mobile-lg-button my-3 text-center'>
                  Experience
                </h3>
                <div className='flex justify-between'>
                  <h4 className='text-mobile-button font-primary'>US Water Services Corporation</h4>
                  <h4 className='text-mobile-button font-primary'>2021-Present</h4>
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
                  <h4 className='text-mobile-button font-primary'>Triangle House LLC</h4>
                  <h4 className='text-mobile-button font-primary'>2021-2021</h4>
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
                  <h4 className='text-mobile-button font-primary'>State of Florida</h4>
                  <h4 className='text-mobile-button font-primary'>2018-2021</h4>
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
                <div>
                <h3 className='font-primary mobile-lg-button my-2 text-center'>
                    Education
                </h3>
                <p className='text-mobile-paragraph font-secondary text-center'>UCF Coding Bootcamp</p>
                <p className='text-mobile-paragraph font-secondary text-center'>University of Central Florida, Orlando, FL</p>
                </div>
            </div>
        </section>
    )
}

export default Resume
