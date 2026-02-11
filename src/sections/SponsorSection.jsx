import React from 'react'
import BambooBgWebp from '../assets/images/sponsbg.webp';
import HeroPanda from '../assets/images/heropanda.webp';

import ScrollForm from '../components/ScrollForm';
import grass from '../assets/images/grassfffff.webp'

function SponsorSection() {
  return (
    <div className="relative w-full  " id='sponsors'>
            {/* Decorative Bamboo Leaves - Peeking over Hero2 */}
            <img src={grass} alt="" className='absolute -translate-y-2/3 left-0 w-full z-20' />

            {/* Bamboo Background Container */}
            <div
                className="relative w-screen overflow-hidden min-h-[700px] sm:min-h-[800px] md:min-h-[900px]"
                style={{ marginLeft: 'calc(-50vw + 50%)' }}
            >
                {/* Bamboo Image - Force fill entire viewport */}
                <picture className="absolute inset-0 w-full h-full">    
                    <source srcSet={BambooBgWebp} type="image/webp" />

                    <img
                        src={BambooBgWebp}
                        alt="Bamboo Background"
                        className="w-full h-full object-cover scale-x-[1.5] scale-y-[1.8] md:scale-x-[1.15] md:scale-y-100 origin-center"
                    />
                </picture>


                {/* Content area for timer - positioned over the bamboo */}
                <div className="absolute inset-0 flex items-center mt-28 justify-center ">
                    <div className="relative">
                        <img src={HeroPanda} alt="Panda" className='absolute -top-16 sm:-top-20 md:-top-36 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 z-0' />
                        {/* Countdown card */}
                        <div className='relative z-10'>
                            <ScrollForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SponsorSection