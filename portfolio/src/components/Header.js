import React from 'react';
import '../css/Header.css';
const Header = () => {
  return (
    <header className="flex">
      <div className="links font-bold">Bio</div>
      <div className="links font-bold">Projects</div>
      <div className="links font-bold">Connect</div>
    </header>
  );
};

export default Header;
