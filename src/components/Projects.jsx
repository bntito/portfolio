import React, { useContext } from 'react';
import Iot from '../assets/images/iot.png';
import Botx from '../assets/images/botx.png';
import Crece from '../assets/images/crece.png';
import Datamanagement from '../assets/images/datamanagement.png';
import Einstitute from '../assets/images/eins.png';
import { IoLogoFirebase } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faVuejs, faJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from '../DarkModeContext'; // Ajusta la ruta según tu estructura de archivos

function Projects() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="projects" className={`min-h-screen p-8 flex flex-col items-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'}`}>
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
          <div className="bg-yellow-600 text-white rounded-full px-3 py-1 flex items-center mb-2 ml-2">
            <IoLogoFirebase />
            Firebase
          </div>
          <div className="bg-blue-200 text-gray-700 rounded-full px-3 py-1 flex items-center mb-2 ml-2">
            <FontAwesomeIcon icon={faDatabase} className="mr-1" />
            MySQL
          </div>
        </div>
      </div>

      {/* Proyecto: Trade Bot */}
      <div className="mb-8 w-full md:w-2/3 lg:w-1/2 text-center">
        <h3 className="text-xl font-semibold mb-2">Proyecto: Trade Bot</h3>
        <p className="mb-4">
          <a href='https://tradebotx.netlify.app' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          https://tradebotx.netlify.app
          </a>
        </p>
        <p className="mb-2">Descripción: Transacciones Automáticas de Cryptomonedas.</p>
        <p className="mb-2">Base de datos: MySQL</p>

        <div className="flex justify-center">
          <a href="https://tradebotx.netlify.app" target="_blank" rel="noopener noreferrer" className="block mb-4">
            <img src={Botx} alt="Vista previa de TradeBot" className="w-full md:max-w-md rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
          </a>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-blue-500 text-white rounded-full px-3 py-1 flex items-center mb-2">
            <FontAwesomeIcon icon={faReact} className="mr-1" />
            React
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

        <div className="flex justify-center">
          <a href="https://crecer.netlify.app" target="_blank" rel="noopener noreferrer" className="block mb-4">
            <img src={Crece} alt="Vista previa de Crecer" className="w-full md:max-w-md rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
          </a>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-yellow-500 text-white rounded-full px-3 py-1 flex items-center mb-2 ml-2">
            <FontAwesomeIcon icon={faJs} className="mr-1" />
            JavaScript
          </div>
          <div className="bg-green-700 text-white rounded-full px-3 py-1 flex items-center mb-2 ml-2">
            <FontAwesomeIcon icon={faDatabase} className="mr-1" />
            MongoDB
          </div>
        </div>
      </div>

      {/* Proyecto: Firebase App */}
      <div className="mb-8 w-full md:w-2/3 lg:w-1/2 text-center">
        <h3 className="text-xl font-semibold mb-2">Proyecto: Data Management</h3>
        <p className="mb-4">
          <a href='https://managemendata.netlify.app' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            https://managemendata.netlify.app
          </a>
        </p>
        <p className="mb-2">Descripción: Gestión de Usuarios.</p>
        <p className="mb-2">Base de datos: Firebase</p>

        <div className="flex justify-center">
          <a href="https://managemendata.netlify.app" target="_blank" rel="noopener noreferrer" className="block mb-4">
            <img src={Datamanagement} alt="Vista previa de DataManagament" className="w-full md:max-w-md rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
          </a>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-blue-500 text-white rounded-full px-3 py-1 flex items-center mb-2">
            <FontAwesomeIcon icon={faReact} className="mr-1" />
            React
          </div>
          <div className="bg-yellow-600 text-white rounded-full px-3 py-1 flex items-center mb-2 ml-2">
            <IoLogoFirebase />
            Firebase
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

        <div className="flex justify-center">
          <a href="https://e-institute.netlify.app" target="_blank" rel="noopener noreferrer" className="block mb-4">
            <img src={Einstitute} alt="Vista previa de e-Institute" className="w-full md:max-w-md rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
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