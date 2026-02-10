import React from 'react';
import RedBg from '../assets/images/redbg.webp';
import CropCard from '../assets/images/cropcard.webp';

function PrizePool() {
  return (
    <section
      id="prize-pool"
      className="relative w-full min-h-[55vh] md:min-h-[140vh] flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${RedBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="w-full max-w-[1000px] min-h-[260px] md:min-h-[360px] lg:min-h-[480px] mt-12 md:mt-10 flex flex-col items-center justify-center text-center font-[superMario] text-black"
        style={{
          backgroundImage: `url(${CropCard})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl">Prize Pool</p>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl">Worth</p>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl">6 Lakhs +</p>
      </div>
    </section>
  );
}

export default PrizePool;