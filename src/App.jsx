import React from 'react';
import Hero from './sections/Hero';
import Timer from './sections/Timer';
import PrizePool from './sections/PrizePool';

function App() {
    return (
        <div className="h-screen w-screen font-[space] overflow-x-hidden relative">
            <Hero/>
            <Timer/>
            <PrizePool/>
        </div>
    );
}

export default App;
