import React from 'react';
import { motion } from 'framer-motion';
import HeroBgAvif from '../assets/images/herobg.avif';
import HeroBgWebp from '../assets/images/herobg.webp';
import HeroPandaWebp from '../assets/images/heropanda.webp';
import HeroPandaAvif from '../assets/images/heropanda.avif';
import HeroHeading from '../assets/images/ssv.png';

function Hero() {
    // Floating leaf animation variants
    const leafVariants = {
        animate: (i) => ({
            y: [0, 800],
            x: [0, Math.sin(i) * 100],
            rotate: [0, 360],
            transition: {
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.5,
            },
        }),
    };

    return (
        <div className="relative w-full h-[70vh] md:min-h-screen overflow-hidden" id='home'>
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <picture className="w-full h-full">
                    <source srcSet={HeroBgAvif} type="image/avif" />
                    <source srcSet={HeroBgWebp} type="image/webp" />

                    <img
                        src={HeroBgWebp}
                        alt="Hero Background"
                        className="w-full h-full object-cover object-center"
                    />
                </picture>
            </div>

            {/* Floating Leaves */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    variants={leafVariants}
                    animate="animate"
                    className="absolute pointer-events-none"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: '-50px',
                    }}
                >
                    <svg
                        width="30"
                        height="40"
                        viewBox="0 0 30 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-md"
                    >
                        <path
                            d="M15 0C15 0 30 15 25 30C20 45 10 45 5 30C0 15 15 0 15 0Z"
                            fill={i % 2 === 0 ? '#FFD700' : '#90EE90'}
                        />
                    </svg>
                </motion.div>
            ))}

            {/* Content Container with Heading and Panda */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-8 md:py-12">
                {/* Hero Heading Logo */}
                <div className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%] max-w-3xl px-4 mt-16 sm:mt-12 md:mt-16">
                    <img
                        src={HeroHeading}
                        alt="Startup Saga Edition 5"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Panda Character */}
                <div className="w-[50%] md:w-[32%] lg:w-[28%] max-w-xl px-4 mb-0">
                    <picture>
                        <source srcSet={HeroPandaAvif} type="image/avif"/>
                        <source srcSet={HeroPandaWebp} type="image/webp"/>
                        
                        <img
                            src={HeroPandaAvif}
                            alt="Hero Panda"
                            className="w-full h-auto object-contain"
                        />
                    </picture>
                </div>
            </div>
        </div>
    );
}

export default Hero;
