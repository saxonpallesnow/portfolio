import React from 'react';
import { NavLink } from 'react-router-dom';
import resumePdf from '../assets/resume.pdf';
import { Linkedin, Github, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-24 px-6 md:px-12 lg:px-20 bg-black border-t border-white/5">
      <div className="mx-auto w-full max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-12">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-display font-bold text-lg uppercase tracking-tighter text-white">
            Saxon Palle
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        <nav className="flex gap-8 text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-gray-200">
          <NavLink to="/" end className="hover:text-white transition-colors">Home</NavLink>
          <NavLink to="/about" className="hover:text-white transition-colors">About</NavLink>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume</a>
        </nav>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="https://www.linkedin.com/in/saxon-palle" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-all group" title="LinkedIn">
            <Linkedin size={18} strokeWidth={1.5} />
            <span className="hidden md:inline-block font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">LinkedIn</span>
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-all group" title="GitHub">
            <Github size={18} strokeWidth={1.5} />
            <span className="hidden md:inline-block font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">GitHub</span>
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-all group" title="Instagram">
            <Instagram size={18} strokeWidth={1.5} />
            <span className="hidden md:inline-block font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Instagram</span>
          </a>
          <a href="mailto:saxonpalle15@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-all group" title="Email">
            <Mail size={18} strokeWidth={1.5} />
            <span className="hidden md:inline-block font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Email</span>
          </a>
          <a href="tel:+16035885571" className="flex items-center gap-2 text-gray-300 hover:text-white transition-all group" title="Phone">
            <Phone size={18} strokeWidth={1.5} />
            <span className="hidden md:inline-block font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">+1-603-588-5571</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
