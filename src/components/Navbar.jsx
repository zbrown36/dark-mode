import React from 'react';
import  useDarkMode  from './Hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, toggleMode] = useDarkMode("darkMode", false);

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <sect>
        <h1>Dark Mode</h1>
        <div className="dark-mode__toggle">
          
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </sect>
    </nav>
  );
};

export default Navbar;
