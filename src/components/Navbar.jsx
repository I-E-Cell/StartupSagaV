import React, { useState } from 'react';
import navban from '../assets/images/navban.png';
import ssv from '../assets/images/ssv.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Prizes', href: '#prize-pool' },    
        { name: 'Sponsor Us', href: '#sponsors' },
        { name: 'Events', href: '#events' },
        { name: 'FAQ', href: '#faqs' },
        { name: 'Past Sponsors', href: '#pastsponsors' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav className="fixed top-[2%] md:top-0 left-0 w-full z-50 overflow-visible flex justify-center">
                {/* Desktop Navbar */}
                <div className="relative w-[90%] md:w-[70%] overflow-visible">
                    {/* Background Image */}
                    <img
                        src={navban}
                        alt=""
                        className="w-full min-h-20 md:min-h-0 h-auto"
                    />

                    {/* Content Container */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center px-4 md:px-8 lg:px-16">
                        {/* All Links - Centered on Desktop, Hidden on mobile */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-yellow-200 hover:text-white font-[superMario] text-xs lg:text-sm tracking-wider transition-colors duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Center Logo - Mobile Only */}
                        <div className="flex md:hidden items-center justify-center">
                            <img
                                src={ssv}
                                alt="Startup Saga Edition 5"
                                className="h-12 w-auto object-contain drop-shadow-lg"
                            />
                        </div>

                        {/* Hamburger Menu Button - Mobile Only */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden absolute right-4 p-2 z-50"
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col gap-1.5">
                                <span
                                    className={`block w-6 h-0.5 bg-yellow-200 transition-all duration-300 ${
                                        isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}
                                />
                                <span
                                    className={`block w-6 h-0.5 bg-yellow-200 transition-all duration-300 ${
                                        isMenuOpen ? 'opacity-0' : ''
                                    }`}
                                />
                                <span
                                    className={`block w-6 h-0.5 bg-yellow-200 transition-all duration-300 ${
                                        isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#8B0000] to-[#5C0000] transform transition-all duration-300 ease-in-out ${
                        isMenuOpen
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
                >
                    <div className="flex flex-col items-center py-4 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-yellow-200 hover:text-white font-[superMario] text-sm tracking-wider transition-colors duration-300 py-2"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Spacer to prevent content from going under fixed navbar */}
            {/* <div className="h-16 md:h-20 lg:h-24" /> */}
        </>
    );
};

export default Navbar;
