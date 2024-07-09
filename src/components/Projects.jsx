import React from 'react';
import Iot from '../assets/images/iot.png';

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-white p-8">
      <h2 className="text-3xl font-bold mb-4">Proyectos</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Proyecto: IoT Academy</h3>
        <p className="mb-4"><a href='https://iotacademy.netlify.app/' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://iotacademy.netlify.app/</a></p>
        <p className="mb-2">Descripción: Plataforma educativa para cursos interactivos.</p>
        <p className="mb-2">Base de datos: MySQL</p>
        <p className="mb-4">Servidor: <a href="https://academyiotserver.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://academyiotserver.onrender.com/</a></p>

        <a href="https://iotacademy.netlify.app/" target="_blank" rel="noopener noreferrer" className="block mb-4">
          <img src={Iot} alt="Vista previa de IoT Academy" className="w-full md:max-w-md rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
        </a>
      </div>

      
    </section>
  );
}

export default Projects;
