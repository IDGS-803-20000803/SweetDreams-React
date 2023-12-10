import React, { useState, useEffect } from 'react'
import { fetchDataAndExportDetallePedido, fetchDataAndExportPedidos } from './data2';
import NavBar from './NavBar';
const ClientePedido = () => {
   
    const [idPedido, setIdPedido] = useState([]);
	const [detallePedido, setDetallePedido] = useState([]);

	const objetoGuardado = localStorage.getItem('miObjetoGuardado');
	console.log(objetoGuardado);
	const usuarioRecuperado = JSON.parse(objetoGuardado);
	console.log(usuarioRecuperado);

	console.log(usuarioRecuperado.idUsuario);


	useEffect(()=>{
		const fetchDataIdPedidos= async () => {
			try {
			  const result = await fetchDataAndExportPedidos();
			  setIdPedido(result);
			} catch (error) {
			  console.error('Error fetching data:', error);
			}
		};
	  fetchDataIdPedidos();
	},[]);	

	useEffect(()=>{
		const fetchDataDetallePedidos= async () => {
			try {
			  const result = await fetchDataAndExportDetallePedido();
			  setDetallePedido(result);
			} catch (error) {
			  console.error('Error fetching data:', error);
			}
		};
	  fetchDataDetallePedidos();
	},[]);	


	console.log("Todos los detalle Pedido:")
	console.log(detallePedido);
    
// Filtramos los pedidos con base al id del cliente
const nuevoIdPedido = idPedido.filter((e) => e.idCliente === usuarioRecuperado.idUsuario);

// Obtenemos un array de IDs de pedido
const idsPedidoFiltrados = nuevoIdPedido.map((pedido) => pedido.idPedido);

// Filtramos los detalles del pedido usando los IDs filtrados
const detallesPedidosByIdPedido = detallePedido.filter((detalle) => idsPedidoFiltrados.includes(detalle.idPedido));

    
	console.log("DetallePedido:")
	console.log(detallesPedidosByIdPedido);

	const obtenerNombreMenu = (idMenu) => {
		switch (idMenu) {
		  case 1:
			return 'Pay de manzana';
		  case 2:
			return 'Pay de limon';
		  case 3:
			return 'Pay de piña';
		  case 4:
			return 'Pay de zarzamora';
		  case 5:
			return 'Pay de fresa';
		  case 6:
			return 'Pay de Mango';
		  default:
			return 'Menú no definido';
		}
	  };

	  const statusPedido = (estatus) => {
        
		if(estatus === 1){
			
			return "En espera";
		}

		if(estatus === 2){

			return "En espera de entrega";
		}
		if(estatus === 3){

			return "Cancelado";
		}
	  };

  return (
	<div>
      <h1>Detalle de mis compras</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Menu</th>
            <th>Cantidad</th>
            <th>Total</th>
			<th>Estatus</th>
          </tr>
        </thead>
        <tbody>
          {detallesPedidosByIdPedido.map((detalle, index) => (
            <tr key={index}>
              <td>{obtenerNombreMenu(detalle.idMenu)}</td>
              <td>{detalle.cantidad}</td>
              <td>${detalle.total} pesos</td>
			  <td>{statusPedido(detalle.estatus)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClientePedido