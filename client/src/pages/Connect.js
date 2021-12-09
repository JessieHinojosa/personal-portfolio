import React from 'react'
import {NetworkData} from '../components/NetworkData/NetworkData';
import SmButton from '../components/buttons/SmButton';
import ConnectionWeb from '../assets/images/sm-mobile/connection-diagram.png';


const Connect = () => {
    return (
        <section className='w-mobile-paragraph-w mx-auto mt-8 pt-12' id='connect'>
            <div className='text-center font-primary text-pg-heading relative z-10'>
                <h2>Connect with Me</h2>
                <p className='
                  font-secondary text-mobile-paragraph
                  my-mobile-margin-from-pg-heading
                '>
                    Wheather you are looking for a potintial employee, contract developer or 
                    someone to share thoughts with, you can connect with me through any of 
                    the following channels.
                </p>
            </div>
            <img src={ConnectionWeb} 
                 alt='connection web' 
                 className='
                   absolute top-mobile-bg-topConnectWeb-top-position right-0
                   z-0
            '/>
            <img src={ConnectionWeb} 
                 alt='connection web' 
                 className='
                   absolute top-mobile-bg-bottomConnectWeb-top-position left-0
                   z-0 rotate-180
            '/>
            <div className='card-canvas'>
            {NetworkData.map((item, index) => {
              return (
                    <section className='my-7 relative z-10' key={index}>
                      <img src={item.iconUrl} 
                           alt='network logo' 
                           className='rounded-full bg-white p-1 mx-auto -mb-6 relative z-20'
                           />
                      <div className='
                        flex flex-wrap justify-center pb-2 pt-7 
                        shadow-md rounded-button bg-black
                      '>
                        <p className='url w-full text-center text-tertiary'>
                          {item.username}
                        </p>
                        <SmButton
                        buttonClass='
                        bg-baby-blue w-mobile-sm-button-w text-mobile-sm-button 
                        text-center py-0.25 rounded-button mx-auto mt-2 font-tertiary 
                        text-dark-black 
                        '
                        buttonText={`Visit ${item.name}`}
                        url={item.src} />
                      </div>
                </section>
        
                )
            })}
            
        </div>
        </section>
    )
}

export default Connect
