import './App.css';
import Header from './components/Header'; // Import the Header component
import Bio from './components/Bio'; // Import the Bio component
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import React, { useEffect } from 'react';

function App() {

  return (
    <div className="App">

      <Header /> {/* Add the Header component */}

      <Bio /> {/* Add the Bio component */}

      <Technologies />

      <Experience />
    </div>
  );
}

export default App;
