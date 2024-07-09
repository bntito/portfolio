import React from 'react';
import { motion } from 'framer-motion';
import emojione from 'emojione';
import devImage from '../assets/images/dev.jpg';

function Welcome() {
  const emojiUnicode = emojione.shortnameToUnicode(':man_technologist:');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div 
        className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">¡Bienvenides! Soy Bruno {emojiUnicode}</h1>
        <p className="text-gray-700 text-center mb-6 leading-relaxed">
          Un apasionado <br /><b>Desarrollador Fullstack</b><br />con experiencia en la creación de aplicaciones web modernas y eficientes.
          Mi enfoque se centra en combinar diseño elegante con funcionalidad robusta.
        </p>
        <div className="text-center mb-6">
          <img 
            src={devImage} 
            alt="Bruno Tito" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Habilidades</h2>
        <ul className="flex flex-wrap justify-center gap-4 mb-6">
          <li className="transition-transform transform hover:scale-125">
            <i className="devicon-html5-plain colored text-3xl md:text-4xl" title="HTML5"></i>
          </li>
          <li className="transition-transform transform hover:scale-125">
            <i className="devicon-css3-plain colored text-3xl md:text-4xl" title="CSS3"></i>
          </li>
          <li className="transition-transform transform hover:scale-125">
            <i className="devicon-javascript-plain colored text-3xl md:text-4xl" title="JavaScript"></i>
          </li>
          <li className="transition-transform transform hover:scale-125">
            <i className="devicon-react-original colored text-3xl md:text-4xl" title="React"></i>
          </li>
          <li className="transition-transform transform hover:scale-125">
            <i className="devicon-vuejs-plain colored text-3xl md:text-4xl" title="Vue.js"></i>
          </li>
          <li className="transition-transform transform hover:scale-125">
            <i className="devicon-nodejs-plain colored text-3xl md:text-4xl" title="Node.js"></i>
          </li>
          <li className="transition-transform transform hover:scale-125">
            <i className="devicon-express-original colored text-3xl md:text-4xl" title="Express"></i>
          </li>
          <li className="transition-transform transform hover:scale-125">
            <i className="devicon-firebase-plain colored text-3xl md:text-4xl" title="Firebase"></i>
          </li>
          <li className="transition-transform transform hover:scale-125">
            <i className="devicon-typescript-plain colored text-3xl md:text-4xl" title="TypeScript"></i>
          </li>
          <li className="transition-transform transform hover:scale-125">
            <i className="devicon-github-plain colored text-3xl md:text-4xl" title="GitHub"></i>
          </li>
          <li className="transition-transform transform hover:scale-125">
            <i className="devicon-figma-plain colored text-3xl md:text-4xl" title="Figma"></i>
          </li>
          <li className="transition-transform transform hover:scale-125">
            <i className="devicon-mysql-plain colored text-3xl md:text-4xl" title="MySQL"></i>
          </li>
          <li className="transition-transform transform hover:scale-125">
            <i className="devicon-mongodb-plain colored text-3xl md:text-4xl" title="MongoDB"></i>
          </li>
        </ul>
        <div className="text-center space-x-4 mt-6">
          <a href="#projects" className="text-blue-500 hover:underline">Explora mis Proyectos</a>
          <span className="text-gray-400"> | </span>
          <a href="#contact" className="text-blue-500 hover:underline">Contacto</a>
        </div>
        <div className="text-center mt-6">
          <a href="https://github.com/tu-usuario" className="text-gray-700 hover:text-black mx-2">GitHub</a>
          <a href="https://www.linkedin.com/in/tu-usuario" className="text-gray-700 hover:text-black mx-2">LinkedIn</a>
        </div>
      </motion.div>
    </div>
  );
}

export default Welcome;
