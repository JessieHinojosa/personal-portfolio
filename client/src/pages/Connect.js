import React from 'react'
import {NetworkData} from '../components/NetworkData/NetworkData';
import SmButton from '../components/buttons/SmButton';
import MdButton from '../components/buttons/MdButton';
import ConnectionWeb from '../assets/images/sm-mobile/connection-diagram.png';


const Connect = () => {
  let evenNetworks;
  let oddNetworks
  const desktopView = (() => {
      if(window.screen.availWidth >= 1366) {
  
           evenNetworks = NetworkData.filter(function isEven(project, index) {
              return index % 2 === 0
          })
           oddNetworks = NetworkData.filter(function isOdd(project, index) {
              return index % 2 === 1
          })
          
          return true
      } else {
          return false
      }
  })()

    return (
        <section className='
          w-mobile-paragraph-w mx-auto mt-8 pt-12
          mobile:w-mobile-lg-paragraph-w desktop:w-full
          desktop:my-20
        ' 
        id='connect'>
            <div className='
              text-center font-primary text-pg-heading relative z-10
              desktop:pl-32 desktop:mx-auto desktop:text-left
              '>
                <h2 className='desktop:text-desktop-heading'>Connect with Me</h2>
                <p className='
                  font-secondary text-mobile-paragraph
                  my-mobile-margin-from-pg-heading
                  desktop:text-pg-heading desktop:w-4/12
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
                   z-0 desktop:w-72
                   mobile:top-mobile-lg-bg-topConnectWeb-top-position
                   desktop:top-desktop-bg-topConnectWeb-top
            '/>
            <img src={ConnectionWeb} 
                 alt='connection web' 
                 className='
                   absolute top-mobile-bg-bottomConnectWeb-top-position left-0
                   z-0 rotate-180 desktop:w-72
                   mobile:top-mobile-lg-bg-bottomConnectWeb-top-position
                   desktop:top-desktop-bg-bottomConnectWeb-top

            '/>
            <div className='card-canvas'>
            {desktopView ? 
            <div className='flex justify-around'>
              <div className='w-1/3 mt-32'>
                {oddNetworks.map((network, index) => {
                  return (
                    <aside className='my-7 relative z-10' key={index}>
                    <img src={network.iconUrl} 
                        alt='network logo' 
                        className='rounded-full bg-white p-1 mx-auto -mb-6 relative z-20 w-16'
                        />
                    <div className='
                      flex flex-wrap justify-center pb-2 pt-7 
                      shadow-md rounded-cards bg-black 
                      border border-dark-black
                      
                    '>
                      <p className='
                        w-full text-center font-tertiary
                        text-nav-heading py-2
                      '>
                        {network.username}
                      </p>
                      <MdButton
                      buttonClass='
                      bg-baby-blue text-nav-menu-subheading 
                      text-center py-1 px-3 rounded-cards mx-auto my-2 font-tertiary 
                      text-dark-black 
                      '
                      buttonText={`Visit ${network.name}`}
                      url={network.src} />
                    </div>
              </aside>
                  )
                })}
              </div>
              <div className='w-1/3'>
                {evenNetworks.map((network, index) => {
                  return (
                    <aside className='my-7 relative z-10' key={index}>
                    <img src={network.iconUrl} 
                        alt='network logo' 
                        className='rounded-full bg-white p-1 mx-auto -mb-6 relative z-20 w-16'
                        />
                    <div className='
                      flex flex-wrap justify-center pb-2 pt-7 
                      shadow-md rounded-button bg-black
                      border border-dark-black
                    '>
                      <p className='
                        w-full text-center font-tertiary
                        text-nav-heading py-2
                      '>
                        {network.username}
                      </p>
                      <MdButton
                      buttonClass='
                      bg-baby-blue text-nav-menu-subheading 
                      text-center py-1 px-3 rounded-cards mx-auto my-2 font-tertiary 
                      text-dark-black 
                      '
                      buttonText={`Visit ${network.name}`}
                      url={network.src} />
                    </div>
              </aside>
                  )
                })}
              </div>

            </div>
            :
            <div>
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
                          <p className='
                            w-full text-center font-tertiary
                            mobile:text-nav-heading
                          '>
                            {item.username}
                          </p>
                          <SmButton
                          buttonClass='
                          bg-baby-blue w-mobile-sm-button-w text-mobile-sm-button 
                          text-center py-0.25 rounded-button mx-auto mt-2 font-tertiary 
                          text-dark-black 
                          mobile:py-0.5 mobile:text-mobile-button
                          '
                          buttonText={`Visit ${item.name}`}
                          url={item.src} />
                        </div>
                  </section>
          
                  )
              })}
            </div>
          }
        </div>
        </section>
    )
}

export default Connect
