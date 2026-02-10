import React from 'react'
import EventBorder from '../assets/images/eventimgcard.webp'


function EventImgCard({imgSrc}) {
  return (
    <div className='relative w-full max-w-[450px] mx-auto'>
        {/* Border frame - main element that sets the size */}
        <img src={EventBorder} alt="" className='w-full h-auto relative z-10 pointer-events-none' />
        
        {/* Content image - positioned behind, inset to fit within border */}
        <div className='absolute inset-[8%] overflow-hidden rounded-lg'>
          <img src={imgSrc} alt="" className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default EventImgCard