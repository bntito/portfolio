import React from 'react';
import { motion } from 'framer-motion';
import emojione from 'emojione';
import devImage from '../assets/images/dev.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { LuCopy } from "react-icons/lu";

import Form from './contact/Form';

function Welcome() {
  const emojiUnicode = emojione.shortnameToUnicode(':man_technologist:');
  const githubLink = 'https://github.com/bntito';
  const linkedinLink = 'https://www.linkedin.com/in/';

  const copyEmailToClipboard = () => {
    const email = 'brunotitodev@gmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        alert(`Correo electrónico copiado: ${email}`);
      })
      .catch(err => {
        console.error('Error al intentar copiar el correo electrónico: ', err);
      });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <motion.div 
          className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4"><span className='font-mono'>&lt;/&gt;</span> Bruno Tito {emojiUnicode}</h1>
          <p className="text-gray-700 text-center mb-6 leading-relaxed">
            No soy un robot,<br />
            soy un <span className='text-indigo-500'>desarrollador Fullstack</span> apasionado por la programación.<br />
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
            {/* Aquí tus íconos de habilidades */}
          </ul>
          <div className="text-center space-x-4 mt-6">
            <span className="text-gray-400"> | </span>
            <Link to="/projects" className="text-blue-500 hover:underline">Explora mis Proyectos</Link>
            <span className="text-gray-400"> | </span>
          </div>
          <div className="text-center mt-6">
            <div className="mb-4 flex items-center justify-center">
              <a href="mailto:brunotitodev@gmail.com" className="text-gray-700 hover:text-black flex items-center mx-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                brunotitodev@gmail.com
              </a>
              <button
                onClick={copyEmailToClipboard}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 ml-2 flex items-center"
              >
                <LuCopy className="mr-1" />
              </button>
            </div>

            <div>
              <FontAwesomeIcon icon={faGithub} className="text-2xl mr-2 text-gray-800" />
              <a href={githubLink} className="text-gray-700 hover:text-black mx-2">GitHub</a>
              {' '}
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl mr-2 text-blue-500" />
              <a href={linkedinLink} className="text-gray-700 hover:text-black mx-2">LinkedIn</a>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <Form />
      </div>
    </>
  );
}

export default Welcome;
