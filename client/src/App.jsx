import React from 'react';
import Routing from './routes';
import Footer from './components/Footer'

const App = () => {
    return (
        <div style={{ position: "relative", paddingBottom: "250px" }}>
            <Routing />
            <Footer />
        </div>
    )
}

export default App