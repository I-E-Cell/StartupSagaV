import React from 'react';
import Hero from './sections/Hero';
import Timer from './sections/Timer';
import PrizePool from './sections/PrizePool';
import Faq from './sections/Faq';
import Events from './sections/Events';
import SponsorshipForm from './components/SponsorshipForm';
import SponsorSection from './sections/SponsorSection';
import Footer from './sections/Footer';
import PastSponsors from './sections/PastSponsors';

function App() {
    return (
        <div className="h-screen w-screen font-[space] overflow-x-hidden relative">
            <Hero/>
            <Timer/>
            <PrizePool/>
            {/* <Events/> */}
            <SponsorSection/>
            {/* <Events/> */}
            <Faq/>
            <PastSponsors/>
            <Footer/>
        </div>
    );
}

export default App;
