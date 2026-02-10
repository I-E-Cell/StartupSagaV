import React from 'react';
import BambooBorder from '../assets/images/bambooborder.webp';

function EventDetailCard({ title, description, className = '' }) {
  return (
    <div
      className={`w-full max-w-[920px] mx-auto ${className}`}
      style={{
        backgroundImage: `url(${BambooBorder})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="m-4 sm:m-6 md:m-8 bg-[#7A4A1D] text-black text-center rounded-md px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10">
        <h3 className="font-[superMario] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
          {title}
        </h3>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default EventDetailCard;