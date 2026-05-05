import React from 'react';
import { NavLink } from 'react-router-dom';
import resumePdf from '../assets/resume.pdf';

const Navbar = () => {
  return (
    <nav className="w-full py-6 md:py-8 px-6 md:px-12 flex justify-between items-center absolute top-0 z-50 transition-all duration-300">
      <div className="font-display font-bold text-lg md:text-xl uppercase tracking-tighter">
        <NavLink to="/" className="text-white hover:opacity-70 transition-opacity">
          Saxon Palle
        </NavLink>
      </div>
      
      <div className="flex gap-8 md:gap-12 text-xs md:text-sm font-mono uppercase tracking-[0.3em]">
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-link ${isActive ? 'active text-white' : 'text-gray-200'}`}
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => `nav-link ${isActive ? 'active text-white' : 'text-gray-200'}`}
        >
          About
        </NavLink>
        <a 
          href={resumePdf} 
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link text-gray-200 hover:text-white"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
