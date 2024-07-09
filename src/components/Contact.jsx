import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Form from './contact/Form';

function Contact() {
  const whatsappLink = 'https://wa.me/+59899951021';
  const instagramLink = 'https://www.instagram.com/brunotito11/';
  const linkedinLink = 'https://www.linkedin.com/in';
  const githubLink = 'https://github.com/bntito/';

  return (
    <section id="contact" className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Redes</h2>

      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faWhatsapp} className="text-4xl mr-4 text-green-500" />
        <div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-green-500 transition-colors duration-300 block">WhatsApp</a>
          <p className="text-sm text-gray-600">Conéctate por WhatsApp para consultas rápidas.</p>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faInstagram} className="text-4xl mr-4 text-purple-500" />
        <div>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-purple-500 transition-colors duration-300 block">Instagram</a>
          <p className="text-sm text-gray-600">Sígueme en Instagram para ver mis últimas actualizaciones.</p>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faLinkedin} className="text-4xl mr-4 text-blue-500" />
        <div>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 transition-colors duration-300 block">LinkedIn</a>
          <p className="text-sm text-gray-600">Conéctate conmigo en LinkedIn para oportunidades profesionales.</p>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faGithub} className="text-4xl mr-4 text-gray-800" />
        <div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors duration-300 block">GitHub</a>
          <p className="text-sm text-gray-600">Visita mi perfil en GitHub para ver mis proyectos y colaboraciones.</p>
        </div>
      </div>

      <Form />
    </section>
  );
}

export default Contact;
