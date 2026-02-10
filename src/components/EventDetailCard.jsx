import React from 'react'
import eventcard from '../assets/images/eventcard.png'

function EventDetailCard({eventName = "Next Niche", eventDescription= "Laboris quis sint consequat occaecat aliqua ipsum tempor culpa in anim dolore voluptate duis amet. Ea non culpa sint esse et laborum. Commodo esse deserunt Lorem est excepteur officia qui dolor esse laboris."}) {
  return (
    <div className='relative w-full max-w-[550px] mx-auto'>
        {/* Bamboo frame background */}
        <img src={eventcard} alt="" className='w-full h-auto' />
        
        {/* Content overlaid on the frame */}
        <div className='absolute inset-0 flex flex-col items-center justify-center px-12 py-10 md:px-16 md:py-12'>
            <h3 className='font-[superMario] text-xl md:text-2xl lg:text-3xl text-black text-center mb-4 md:mb-6'>
                {eventName}
            </h3>
            <p className='text-black text-xs md:text-sm lg:text-base text-center leading-relaxed'>
                {eventDescription}
            </p>
        </div>
    </div>
  )
}

export default EventDetailCard