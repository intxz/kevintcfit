import React, { useState, useEffect} from 'react';
import './App.css';
import HelloDesktop from './components/desktop/HelloDesktop'
import HelloMobile from './components/mobile/HelloMobile'

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024);
    };

    useEffect(() =>{
        window.removeEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div>
            {isMobile ? <HelloMobile /> : <HelloDesktop />}
        </div>
    ) 
}

export default App;
