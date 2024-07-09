import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm text-center md:text-left">&copy; 2024 Bruno Tito. Todos los derechos reservados.</p>
        <div className="flex mt-2 md:mt-0 md:ml-4">
          <a
            href="https://github.com/tu-usuario"
            className="text-gray-300 hover:text-gray-400 transition-colors duration-300 mx-2"
          >
            <i className="devicon-github-plain text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tu-usuario"
            className="text-gray-300 hover:text-gray-400 transition-colors duration-300 mx-2"
          >
            <i className="devicon-linkedin-plain text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
