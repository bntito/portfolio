import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext';
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import '../styles.css';

function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10 transition duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-2 rounded cursor-pointer"
            style={{ fontSize: '1rem' }}
          >
            {darkMode ? <MdOutlineDarkMode /> : <CiLight />}
          </div>
          <div className="text-white text-lg font-bold hover:text-black transition duration-300 nav-text ml-2">Bruno Tito <small><i>Developer</i></small></div>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-black focus:outline-none transition duration-300 nav-text"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        
        <div className={`absolute top-full left-0 w-full md:relative md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row md:space-x-4 bg-gray-800 md:bg-transparent p-4 md:p-0">
            <Link
              to="/"
              className="text-gray-300 hover:text-black px-3 py-2 rounded transition duration-300 block md:inline-block nav-text"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-black px-3 py-2 rounded transition duration-300 block md:inline-block nav-text"
              onClick={() => setIsOpen(false)}
            >
              Sobre Mí
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-black px-3 py-2 rounded transition duration-300 block md:inline-block nav-text"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-black px-3 py-2 rounded transition duration-300 block md:inline-block nav-text"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
