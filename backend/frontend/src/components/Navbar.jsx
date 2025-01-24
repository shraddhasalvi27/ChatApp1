import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
          <img src="/ChatAppLogo.png" alt="Logo" className="h-10 w-auto" />
          <span className="ml-2 font-bold text-white text-xl">Panchat</span>
      </div>
    </header>
  );
};

export default Navbar;
