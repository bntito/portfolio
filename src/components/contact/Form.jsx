import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviándolo a un servidor
    console.log('Formulario enviado:', { name, email, subject, message });
    // Reinicia los campos del formulario
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Contacto</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        <div>
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Asunto</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Mensaje</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
