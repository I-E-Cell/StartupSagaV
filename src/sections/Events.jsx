import React from 'react'
import EventDetailCard from '../components/EventDetailCard'
import EventImgCard from '../components/EventImgCard'
import EventImage1 from '../assets/images/Event1.webp'
import EventImage2 from '../assets/images/Event2.webp'
import EventImage3 from '../assets/images/Event3.webp'
import EventImage4 from '../assets/images/Event4.webp'
import WoodBg from '../assets/images/woodbg.webp'
import woodstrip from '../assets/images/woodenstrip.webp'
function Events() {
  const eventsData = [
    {
      name: "Next Niche",
      description: "Discover the next big opportunity in the startup ecosystem. Present your innovative ideas and compete for exciting prizes while networking with industry leaders and investors.",
      image: EventImage1
    },
    {
      name: "Pitch Perfect",
      description: "Master the art of pitching your startup. Showcase your business model, traction, and vision to a panel of experienced judges and potential investors in this high-stakes competition.",
      image: EventImage2
    },
    {
      name: "Innovation Sprint",
      description: "A 24-hour hackathon where teams collaborate to build cutting-edge solutions. Transform your ideas into working prototypes and win mentorship opportunities with top tech companies.",
      image: EventImage3
    },
    {
      name: "Startup Showcase",
      description: "The grand finale where the best startups present their journey. Get featured, win funding, and connect with venture capitalists looking for the next unicorn in the making.",
      image: EventImage4
    }
  ]

  return (
    <div 
      className='flex flex-col items-center py-16 md:py-24 px-4 md:px-8 relative' id='events'
      style={{
        backgroundImage: `url(${WoodBg})`,
        backgroundSize: '100% auto',
        backgroundPosition: 'top center',
        backgroundRepeat: 'repeat-y'
      }}
    >
      {/* Dark overlay for better text readability */}
      <img src={woodstrip} alt="" className='absolute top-0 left-0 -translate-y-1/2'/>
      <div className='absolute inset-0 bg-black/20'></div>
      
      <div className='relative z-10 text-center mb-12 md:mb-16'>
        <h2 className='font-[superMario] text-4xl md:text-6xl lg:text-7xl text-white mb-4' style={{ filter: "drop-shadow(0px 8px 0px rgba(0,0,0,0.5))" }}>
          Events
        </h2>
        <p className='text-white text-base md:text-lg max-w-2xl mx-auto drop-shadow-lg'>
          Join us for these exciting competitions and showcase your entrepreneurial spirit
        </p>
      </div>
      
      <div className='relative z-10 flex flex-col gap-12 md:gap-16 lg:gap-20 max-w-7xl w-full'>
        {eventsData.map((event, index) => (
          <div key={index} className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
            <EventDetailCard 
              eventName={event.name}
              eventDescription={event.description}
            />
            {/* <EventImgCard 
              imgSrc={event.image}
            /> */}
            <img src={event.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events