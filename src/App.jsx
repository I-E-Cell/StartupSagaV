import React from 'react';
import Hero from './sections/Hero';
import Timer from './sections/Timer';

function App() {
    return (
        <div className="h-screen w-screen font-[space] overflow-x-hidden relative">
            <Hero/>
            <Timer/>
        </div>
    );
}

export default App;
