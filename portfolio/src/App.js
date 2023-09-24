import './App.css';
import Header from './components/Header'; // Import the Header component
import Bio from './components/Bio'; // Import the Bio component
import Technologies from './components/Technologies';
import React, { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   document.getElementById('fadeDiv').style.opacity = '1';
  // }, []);

  return (
    <div className="App">
      {/* <div id="fadeDiv" style={{ opacity: 0, transition: 'opacity 2s ease-in-out' }}>
        Hello, World!
      </div> */}
      <Header /> {/* Add the Header component */}

      <Bio /> {/* Add the Bio component */}

      <Technologies />
    </div>
  );
}

export default App;
