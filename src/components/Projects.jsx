import React from 'react';
import Iot from '../assets/images/iot.png';
import Crece from '../assets/images/crece.png';
import Einstitute from '../assets/images/eins.png';
import { IoLogoFirebase } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';


function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-white p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-center">Proyectos</h2>

      {/* Proyecto: IoT Academy */}
      <div className="mb-8 w-full md:w-2/3 lg:w-1/2 text-center">
        <h3 className="text-xl font-semibold mb-2">Proyecto: IoT Academy</h3>
        <p className="mb-4">
          <a href='https://iotacademy.netlify.app/' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            https://iotacademy.netlify.app/
          </a>
        </p>
        <p className="mb-2">Descripción: Plataforma educativa para cursos interactivos.</p>
        <p className="mb-2">Base de datos: MySQL</p>
        <p className="mb-4">
          Servidor <br />
          <a href="https://academyiotserver.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            https://academyiotserver.onrender.com/
          </a>
        </p>
        <p className="mb-2">Tecnología: React</p>

        <div className="flex justify-center">
          <a href="https://iotacademy.netlify.app/" target="_blank" rel="noopener noreferrer" className="block mb-4">
            <img src={Iot} alt="Vista previa de IoT Academy" className="w-full md:max-w-md rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
          </a>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-blue-500 text-white rounded-full px-3 py-1 flex items-center mb-2">
            <FontAwesomeIcon icon={faReact} className="mr-1" />
            React
          </div>
          <div className="bg-yellow-500 text-white rounded-full px-3 py-1 flex items-center mb-2 ml-2">
            <IoLogoFirebase />
            Firebase
          </div>
          <div className="bg-blue-200 text-gray-700 rounded-full px-3 py-1 flex items-center mb-2 ml-2">
            <FontAwesomeIcon icon={faDatabase} className="mr-1" />
            MySQL
          </div>
        </div>
      </div>

      {/* Proyecto: Crecer */}
      <div className="mb-8 w-full md:w-2/3 lg:w-1/2 text-center">
        <h3 className="text-xl font-semibold mb-2">Proyecto: Crecer</h3>
        <p className="mb-4">
          <a href='https://crecer.netlify.app' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            https://crecer.netlify.app
          </a>
        </p>
        <p className="mb-2">Descripción: Aplicación de análisis de sueños diseñada para explorar el subconsciente y descubrir aspectos ocultos.</p>
        <p className="mb-2">Base de datos: MongoDB</p>
        <p className="mb-2">Tecnología: Manila JS</p>

        <div className="flex justify-center">
          <a href="https://crecer.netlify.app" target="_blank" rel="noopener noreferrer" className="block mb-4">
            <img src={Crece} alt="Vista previa de Crecer" className="w-full md:max-w-md rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
          </a>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-green-500 text-white rounded-full px-3 py-1 flex items-center mb-2 ml-2">
            <FontAwesomeIcon icon={faVuejs} className="mr-1" />
            Vue.js
          </div>
          <div className="bg-green-700 text-white rounded-full px-3 py-1 flex items-center mb-2 ml-2">
            <FontAwesomeIcon icon={faDatabase} className="mr-1" />
            MongoDB
          </div>
        </div>
      </div>

      {/* Proyecto: e-Institute */}
      <div className="mb-8 w-full md:w-2/3 lg:w-1/2 text-center">
        <h3 className="text-xl font-semibold mb-2">Proyecto: e-Institute</h3>
        <p className="mb-4">
          <a href='https://e-institute.netlify.app' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            https://e-institute.netlify.app
          </a>
        </p>
        <p className="mb-2">Descripción: Plataforma educativa.</p>
        <p className="mb-2">Base de datos: JSON</p>
        <p className="mb-2">Tecnología: Vue</p>

        <div className="flex justify-center">
          <a href="https://e-institute.netlify.app" target="_blank" rel="noopener noreferrer" className="block mb-4">
            <img src={Einstitute} alt="Vista previa de Crecer" className="w-full md:max-w-md rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
          </a>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-green-500 text-white rounded-full px-3 py-1 flex items-center mb-2">
            <FontAwesomeIcon icon={faVuejs} className="mr-1" />
            Vue.js
          </div>
          <div className="bg-yellow-500 text-gray-700 rounded-full px-3 py-1 flex items-center mb-2 ml-2">
            <FontAwesomeIcon icon={faDatabase} className="mr-1" />
            JSON
          </div>
        </div>
      </div>

    </section>
  );
}

export default Projects;
