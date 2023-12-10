import React, { useEffect, useState } from 'react'
import { fetchDataAndExportVentas, fetchDataAndExportDetallePedido } from './data2';
import NavBar from './NavBar';
import ClientePedido from './ClientePedido';
const DetalleVenta = () => {


  const [venta, setVenta] = useState();
  const [detPedio,setDetPedido] = useState();
  const [productCantidades, setProductCantidades] = useState({});
  const [totalCompras, setTotalCompras] = useState(0);

  const fecha = new Date();
	const año = fecha.getFullYear();
	const mes = String(fecha.getMonth() + 1).padStart(2, '0');
	const dia = String(fecha.getDate()).padStart(2, '0');
	const fechaFormateada = `${año}-${mes}-${dia}`;

  useEffect(()=>{
		const fetchDataVentas= async () => {
			try {
			  const result = await fetchDataAndExportVentas();
			  setVenta(result);
			} catch (error) {
			  console.error('Error fetching data:', error);
			}
		};
	  fetchDataVentas();
	},[]);	

  useEffect(()=>{
		const fetchDataDetPedido= async () => {
			try {
			  const result = await fetchDataAndExportDetallePedido();
			  setDetPedido(result);
			} catch (error) {
			  console.error('Error fetching data:', error);
			}
		};
	  fetchDataDetPedido();
	},[]);	




  console.log(venta);

  const objetoGuardado = localStorage.getItem('miObjetoGuardado');
  console.log(objetoGuardado);
  const usuarioRecuperado = JSON.parse(objetoGuardado);
  console.log(usuarioRecuperado);




   //const cliente = venta.filter((e)=> e.idCliente === usuarioRecuperado.idUsuario);
   const cliente = venta && venta.filter((e) => e.idCliente === usuarioRecuperado.idUsuario);
   console.log("El cliente es:")
   console.log(cliente);


   //Desglose de precios
   //const ultimoPedido = detPedio && detPedio.filter((e)=> e.idPedido === 53);
   //console.log("El ultimo pedido fue");
   //console.log(ultimoPedido);

    
  return (
    <div>
    <NavBar/>
    <h1>Mis compras:</h1>
    {cliente ? (
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Metodo de pago</th>
            <th>Fecha</th>
            <th>Totales</th>
            <th>Estatus</th>
          </tr>
        </thead>
        <tbody>
          {cliente.map((ventaItem, index) => (
            <tr key={index}>
              <td>{usuarioRecuperado.nombre}</td>
              <td>Tarjeta de credito</td>
              <td>{fechaFormateada}</td>
              <td>${ventaItem.total} pesos</td>
              <td>{ventaItem.estatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>Cargando datos...</p>
    )}
    <hr />
   <ClientePedido/>
  </div>
  )
}

export default DetalleVenta