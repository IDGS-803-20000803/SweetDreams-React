import React, { useEffect } from "react";
import { useState } from "react";
import { fetchDataAndExportRolUsuarios, fetchDataAndExportUsuarios } from "./data2";
import { useNavigate } from 'react-router-dom';

const Login = () => {

   const navigate = useNavigate();
    const idLocalStorage = 1;
    const [rolUser, setRolUser] = useState([]);
    const [user, setUser] = useState([]);
    const [loginData, setLoginData] = useState({
      email: '',
      password: '',
    });
  
    useEffect(() => {
      const fetchDataRolUsuarios = async () => {
        try {
          const result = await fetchDataAndExportRolUsuarios();
          setRolUser(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchDataRolUsuarios();
    }, []);
  
    useEffect(() => {
      const fetchDataUsuarios = async () => {
        try {
          const result = await fetchDataAndExportUsuarios();
          setUser(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchDataUsuarios();
    }, []);
  
  
    const handleInputChange = (e) => {
      setLoginData({
        ...loginData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes utilizar el objeto loginData como necesites
      console.log('Datos del login:', loginData);
      const autenticateUser = user.find((e) => e.correo === loginData.email && e.contrasena === loginData.password);
   
      if (autenticateUser) {
        const existAutenticateUser = rolUser.find((e) => e.idUsuario=== autenticateUser.idUsuario && e.idRol === 2);

        if (existAutenticateUser) {
          console.log("El usuario que se autenticó es: ");
          console.log(autenticateUser);

          const objetoJSON = JSON.stringify(autenticateUser);
          localStorage.setItem('miObjetoGuardado', objetoJSON);
          console.log(localStorage);
          navigate('/carrito');
        } else {
          console.log("El usuario no tiene el rol adecuado.");
        }
      } else {
        console.log("No se encontró el usuario");
      }

      // Puedes realizar acciones adicionales, como autenticar al usuario
    };
  
    return (
      <>
        <div className="login">
          <div className="container_logo">
            <img
              className="img_login"
              src="src/assets/sweet_dreams.png"
              alt="Sweet Dreams"
            />
          </div>
          <div className="container_form">
            <h1>Bienvenido a Sweet Dreams</h1>
            <form onSubmit={handleLoginSubmit} className="form_login">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Ingresa tu correo"
                value={loginData.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                id=""
                placeholder="Ingresa tu contraseña"
                value={loginData.password}
                onChange={handleInputChange}
              />
              <input type="submit" value="Iniciar Sesión" />
            </form>
            <a href="/registro" style={{color:'red'}}>¿No tienes cuenta? ¡Registrate ahora!</a>
          </div>
        </div>
      </>
    );
  };
  
  export default Login;