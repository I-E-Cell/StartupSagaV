import React from 'react'
import EventDetailCard from '../components/EventDetailCard'
import EventImgCard from '../components/EventImgCard'
import EventImage from '../assets/images/image.png'

function Events() {
  const eventsData = [
    {
      name: "Next Niche",
      description: "Discover the next big opportunity in the startup ecosystem. Present your innovative ideas and compete for exciting prizes while networking with industry leaders and investors.",
      image: EventImage
    },
    {
      name: "Pitch Perfect",
      description: "Master the art of pitching your startup. Showcase your business model, traction, and vision to a panel of experienced judges and potential investors in this high-stakes competition.",
      image: EventImage
    },
    {
      name: "Innovation Sprint",
      description: "A 24-hour hackathon where teams collaborate to build cutting-edge solutions. Transform your ideas into working prototypes and win mentorship opportunities with top tech companies.",
      image: EventImage
    },
    {
      name: "Startup Showcase",
      description: "The grand finale where the best startups present their journey. Get featured, win funding, and connect with venture capitalists looking for the next unicorn in the making.",
      image: EventImage
    }
  ]

  return (
    <div className='flex flex-col items-center py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50'>
      <div className='text-center mb-12 md:mb-16'>
        <h2 className='font-[superMario] text-4xl md:text-6xl lg:text-7xl text-black mb-4' style={{ filter: "drop-shadow(0px 8px 0px rgba(0,0,0,0.2))" }}>
          Events
        </h2>
        <p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto'>
          Join us for these exciting competitions and showcase your entrepreneurial spirit
        </p>
      </div>
      
      <div className='flex flex-col gap-12 md:gap-16 lg:gap-20 max-w-7xl w-full'>
        {eventsData.map((event, index) => (
          <div key={index} className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
            <EventDetailCard 
              eventName={event.name}
              eventDescription={event.description}
            />
            <EventImgCard 
              imgSrc={event.image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events