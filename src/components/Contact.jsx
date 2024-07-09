import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const whatsappLink = 'https://wa.me/+59899951021';
  const instagramLink = 'https://www.instagram.com/brunotito11/';
  const linkedinLink = 'https://www.linkedin.com/in';
  const githubLink = 'https://github.com/bntito/';

  return (
    <section id="contact" className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faWhatsapp} className="text-4xl mr-4 text-green-500" />
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-green-500 transition-colors duration-300">WhatsApp</a>
      </div>
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faInstagram} className="text-4xl mr-4 text-purple-500" />
        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-purple-500 transition-colors duration-300">Instagram</a>
      </div>
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faLinkedin} className="text-4xl mr-4 text-blue-500" />
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">LinkedIn</a>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faGithub} className="text-4xl mr-4 text-gray-800" />
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
