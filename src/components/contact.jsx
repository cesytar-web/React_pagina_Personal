import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({ name: '', email: '' });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  // Validar el formulario completo para habilitar botón
  useEffect(() => {
    if (data.name.trim().length >= 3 && data.email.trim().length > 0) {
      setBtnDisabled(false);
      setMessage('');
    } else if (data.name.trim().length < 3) {
      setMessage('El nombre debe tener al menos 3 caracteres');
      setBtnDisabled(true);
    } else {
      setMessage('');
      setBtnDisabled(true);
    }
  }, [data]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Guardar datos en localStorage
    localStorage.setItem('contactData', JSON.stringify(data));

    // Redirigir a la página principal
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario de Contacto</h2>

      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={data.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={data.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <button type="submit" disabled={btnDisabled}>
        Enviar
      </button>

      {message && <p style={{ color: 'red' }}>{message}</p>}
    </form>
  );
};

export default Contact;
