import React from 'react'
import EventBorder from '../assets/images/eventimgcard.webp'


function EventImgCard({imgSrc}) {
  return (
    <div className='relative w-full max-w-[400px] mx-auto overflow-hidden rounded-lg'>
        {/* Content image - positioned behind and clipped */}
        <img src={imgSrc} alt="" className='w-full h-auto object-cover' />
        
        {/* Border frame - positioned on top */}
        <img src={EventBorder} alt="" className='absolute inset-0 w-full h-full z-10 pointer-events-none object-cover'/>
    </div>
  )
}

export default EventImgCard