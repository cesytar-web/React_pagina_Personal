import React, { useState } from 'react'

//Crea un componente Contact:
export const Contact = () => {
 const [data, setData] = useState({
   name: '',
   email: '',
 })

 return <div>Contact</div>

}
//Validaciones 
 const [btnDisabled, setBtnDisabled] = useState(true)
 const [message, setMessage] = useState('')

//Evento onChange con al menos 3 caracteres
const handleInputChange = (event) => {
 if (data.name.length + 1 < 3) {
   setMessage('Name must be at least 3 characters')
   setBtnDisabled(true)
 } else {
   setMessage(null)
   setBtnDisabled(false)
 }
 setData({ ...data, [event.target.name]: event.target.value })
}

//Evento onSubmit
const handleSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem("contactData", JSON.stringify(data));
  console.log(`Datos enviados: ${data.name} ${data.email}`);
  clearState();
  navigate("/"); // <-- redirección (ver siguiente punto)
}

//Formulario con datos de contacto(name, email)
   <form onSubmit={handleSubmit}>
       <input
         type="text"
         placeholder="name"
         value={data.name}
         onChange={handleInputChange}
         name="name"
       />
       <input
         type="email"
         placeholder="email"
         value={data.email}
         onChange={handleInputChange}
         name="email"
       />

<button type="submit" disabled={btnDisabled}>Enviar</button>
<p>{message}</p>
</form>

//limpiando formulario
const initialState = {
 name: '',
 email: '',
}

const clearState = () => {
 setData({ ...initialState })
}




 //Campo nombre con validacion



 //Los datos del formulario guardados en el local Storage


 //Redireccionar al vista principal