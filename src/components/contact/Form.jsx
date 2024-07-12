import React, { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext';
import { useFetch } from '../../hooks/useFetch';
import Swal from 'sweetalert2';

function ContactForm() {
  const hostServer = process.env.REACT_APP_SERVER_HOST;
  const api = `${hostServer}/api/contact`;
  const { darkMode } = useContext(DarkModeContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const {
    dataServer,
    // isLoading,
    createData,
  } = useFetch(null);

  const formData = { name, email, subject, message };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await createData(api, formData);    
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      Swal.fire({
        icon: 'info',
        title: 'Debes corregir la información para poder registrarla',
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  useEffect(() => {
    const postData = async () => {
      try {
        const data = {
          name: 'Usuario',
          email: null,
          subject: null,
          message: 'Nuevo ingreso'
        };
  
        const options = {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        };
  
        const response = await fetch(api, options);
  
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
      } catch (error) {
    
      }
    };
  
    postData();
  }, [api]);
  

  useEffect(() => {
    if (dataServer?.status == null) {
      return;
    }
    if (dataServer?.status !== 401) {
      if (dataServer?.status === 200 || dataServer?.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Mensaje Enviado',
          text: dataServer?.dataServerResult?.message,
          showConfirmButton: false,
          timer: 2000
        });
      }
      if (dataServer?.status === 400 || dataServer?.status === 404) {
        Swal.fire({
          icon: 'error',
          title: dataServer?.dataServerResult.message,
          showConfirmButton: false,
          timer: 2000
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: dataServer?.dataServerResult.message,
        showConfirmButton: false,
        timer: 2000
      });
    }
  }, [dataServer]);

  return (
    <section id="contact" className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h2 className="text-3xl font-bold mb-4 text-center">Contacto</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        <div>
          <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${darkMode ? 'bg-gray-800 text-white border-gray-600 focus:border-blue-500' : 'border-gray-300 focus:border-blue-300'}`}
            required
          />
        </div>
        <div>
          <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${darkMode ? 'bg-gray-800 text-white border-gray-600 focus:border-blue-500' : 'border-gray-300 focus:border-blue-300'}`}
            required
          />
        </div>
        <div>
          <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Asunto</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${darkMode ? 'bg-gray-800 text-white border-gray-600 focus:border-blue-500' : 'border-gray-300 focus:border-blue-300'}`}
            required
          />
        </div>
        <div>
          <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Mensaje</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${darkMode ? 'bg-gray-800 text-white border-gray-600 focus:border-blue-500' : 'border-gray-300 focus:border-blue-300'}`}
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