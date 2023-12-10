import React, { useEffect, useState } from 'react';
import { fetchDataAndExportUsuarios } from './data2';
import { inserRolUser, inserUser, inserCliente } from './dao';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
   
   const [lastIdUser, setLastIDuser] = useState(0);

    const navigate = useNavigate();

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    apellidos: '',
    celular: '',
    codigoPostal: '',
    calle: '',
    colonia: '',
  });

  useEffect(() => {
	  const fetchDataUsuarios = async () => {
		try {
		  const result = await fetchDataAndExportUsuarios();
		  setLastIDuser(result);
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  };
  
	  fetchDataUsuarios();
	}, []);




  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');
    const fechaFormateada = `${año}-${mes}-${dia}`;

     
    const ultimoIDUsuario = lastIdUser[lastIdUser.length-1].idUsuario+1;


    try {
      const { username, email, password, apellidos, celular, codigoPostal, calle, colonia } = formData;
  
      const newUser = {
        nombre: username,
        correo: email,
        contrasena: password,
        estatus: 1,
        fechaCreacion: fechaFormateada
      };
  
      const cliente1 = {
        nombres: username,
        apellidos: apellidos,
        celular: celular,
        codigoPostal: codigoPostal,
        calle: calle,
        colonia: colonia,
        estatus: true,
        idUsuario: ultimoIDUsuario
      };
  
      console.log('Datos del usuario:', newUser);
      console.log('Datos del cliente:', cliente1);
  
      await inserUser(newUser);
      await inserCliente(cliente1);
      console.log("Ultimo ID:", ultimoIDUsuario );
      await inserRolUser({ idUsuario:ultimoIDUsuario, idRol: 2 });
  
      console.log('Usuarios, Cliente y Rol insertados exitosamente.');

      Swal.fire(
        'Registrado correctamente',
        '¡Tu registro se ha completado con éxito!',
        'success'
      );

      navigate('/login');

      
    } catch (error) {
      console.error('Error al procesar el formulario:', error);
    }

    setTimeout(function() {
      location.reload();
      }, 4000);

 
  };

  return (
    <>
      <div className="login">
        <div className="container_form">
          <h1>Forma parte de Sweet Dreams</h1>
          <form action="" className="form_login" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Crea un nombre de usuario"
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu correo"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="apellidos"
              placeholder="Ingresa tus apellidos"
              value={formData.apellidos}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="celular"
              placeholder="Ingresa tu número de celular"
              value={formData.celular}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="codigoPostal"
              placeholder="Ingresa tu código postal"
              value={formData.codigoPostal}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="calle"
              placeholder="Ingresa tu calle"
              value={formData.calle}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="colonia"
              placeholder="Ingresa tu colonia"
              value={formData.colonia}
              onChange={handleInputChange}
            />
            <input type="submit" value="Registrar" />
          </form>
        </div>
        <div className="container_logo">
          <img
            className="img_login"
            src="src/assets/sweet_dreams.png"
            alt="Sweet Dreams"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
