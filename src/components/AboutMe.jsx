import React, { useContext } from 'react';
import { DarkModeContext } from '../DarkModeContext';  // Ajusta la ruta según tu estructura de archivos

function AboutMe() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="about" className={`min-h-screen p-8 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}`}>
      <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
      <div className="max-w-3xl mx-auto">
        <p className="mb-6">
          ¡Hola! Soy Bruno Tito, un desarrollador Fullstack apasionado por crear aplicaciones web modernas y eficientes. 
          Me encanta combinar diseño elegante con funcionalidad robusta para ofrecer experiencias de usuario excepcionales.
        </p>
        <hr /><br />
        <h3 className="text-2xl font-semibold mb-4">Habilidades</h3>
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
        <hr /><br />
        <h3 className="text-2xl font-semibold mb-4">Experiencia Profesional</h3>
        <p className="mb-6">
          Desde mi infancia, desarrollé un fuerte interés por la electrónica, inspirado por mi padre, quien me enseñó a trabajar con circuitos básicos en protoboard y luego en PCB. <br />
          Juntos, exploramos desde temporizadores con el IC LM555 hasta secuenciadores de luces de 220 voltios utilizando el CD4017.
          Esta pasión me llevó a montar mi propia discoteca móvil a una edad temprana, donde gestionaba todo el montaje y funcionamiento bajo la mirada asombrada de los clientes. <br />
          Mi interés por la electricidad de potencia creció durante mis estudios en la Universidad del Trabajo del Uruguay (UTU),
          donde me especialicé en electromecánica industrial mientras trabajaba en instalaciones eléctricas domiciliarias. <br />
          Tras graduarme, comencé mi carrera como electricista en diversas empresas, finalmente especializándome en sistemas eléctricos para surtidores de combustible,
          donde trabajé con maquinaria automatizada. <br />
          Esta trayectoria me llevó al campo de la electromecánica en plantas de producción, donde gestioné múltiples máquinas durante mis turnos. <br />
          Desarrollé una notable habilidad para manejar la presión en situaciones críticas, resolviendo rápidamente averías para mantener la producción en marcha. <br />
          Mi fascinación por las pantallas interactivas de control y el control integral de sistemas me llevó al desarrollo web Fullstack, un campo que combina mi experiencia pasada con 
          lo último estudiado en backend, bases de datos y frontend para ofrecer soluciones completas y eficientes a los usuarios finales.
          Además, tengo experiencia en el manejo de memorias, procesadores gráficos, reballing y detección de errores en fuentes con PWM, realizando ajustes en FETs, condensadores, bobinas y resistores,
          así como en la reprogramación de BIOS para ajustes de voltajes y velocidades de memoria. <br />
        </p>
        <hr /><br />
        <h3 className="text-2xl font-semibold mb-4">Educación</h3>
        <p className="mb-6">
          Me gradué como <b>Programador Fullstack</b> en el Instituto BIOS de Uruguay. También tengo una orientación previa en electrónica,
          lo que me proporciona una base sólida en tecnología y resolución de problemas. <br />
          Educación en Instituto Arnold Gesell, Uruguay:
          <ul className="list-disc ml-8">
            <li>Primaria completa con horario extendido, con énfasis en los idiomas inglés y portugués.</li>
            <li>Secundaria completa con inclinación científica, continuación de estudio de inglés y portugués integrado en el currículo.</li>
            <li>Inglés Dickens</li>
          </ul>
          Estudios en la Universidad del Trabajo del Uruguay (UTU): Orientación en Electromecánica, recibido y titulado en 2013.
        </p>
        <hr /><br />
        <h3 className="text-2xl font-semibold mb-4">Intereses Personales</h3>
        <p className="mb-6">
          Disfruto de la electrónica como pasatiempo y también como una fuente adicional de ingresos a través de proyectos personales y reparaciones específicas. <br />
          Me dedico activamente a la minería de criptomonedas. <br />
          También me apasiona la psicología y disfruto explorando temas relacionados con el crecimiento espiritual y la meditación. <br /><br />
          Siempre estoy buscando aprender nuevas habilidades y mejorar mis conocimientos en Desarrollo Web,
          innovando con nuevas lógicas que mejoren nuestra calidad de vida como seres humanos.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;