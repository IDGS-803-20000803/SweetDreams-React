import React, { useState, useEffect } from 'react';
import { data } from '../data';
import { fetchDataAndExport, fetchDataAndExportReceta, fetchDataAndExportInventario, fetchDataAndExportUsuarios,fetchDataAndExportInvetario2, fetchDataAndExportInventario3, fetchDataAndExportInventario4, fetchDataAndExportIngrediente, fetchDataAndExportMenus, fetchDataAndExportPedidos, fetchDataAndExportInvetarios, fetchDataAndExportDetalleReceta, fetchClienteAndExportCliente } from '../data2';
import Swal from 'sweetalert2';
import { updateInventarioDao, insertSalidasDao, insertVentaDao, insertPedido, insertDetallePedido, updateInventarioDaoMejor } from '../dao';
import { fetchData } from '../api';
import ClientePedido from '../ClientePedido';
import { useNavigate } from 'react-router-dom';
import DetalleVenta from '../DetalleVenta';



export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	


   
	const [data2, setData2] = useState([]);
	const [receta, setReceta] = useState([]);
	const [ingrediente, setIngrediente] = useState([]);
	const [invetario, setInventario] = useState([]);
	const [inventarios, setInventarios] = useState([]);
	const [inventario2, setInventario2] = useState([]);
	const [inventario3, setInventario3] = useState([]);
	const [inventario4, setInventario4] = useState([]);

	
	//const [deatllePedido,setDetallePedido] = useState([]);
	const [menus,setMenus] = useState([]);
	const [pedidos, setPedidos] = useState([]);
	const [detReceta,setDetReceta] = useState([]);
	const [cliente, setCliente] = useState([]);

	const [productQuantities, setProductQuantities] = useState({});
    const navigate = useNavigate();

	

	useEffect(() => {
		try {
		  const objetoGuardado = localStorage.getItem('miObjetoGuardado');
	  
		  if (objetoGuardado !== null) {
			const usuarioRecuperado = JSON.parse(objetoGuardado);
	  
			if (usuarioRecuperado) {
			  console.log("Cargo el carrito porque encontró un usuario");
			  // Aquí podrías realizar otras operaciones relacionadas con la presencia de un usuario
			} else {
			  return navigate("/login");
			}
		  } else {
			return navigate("/login");
		  }
		} catch (error) {
		  console.error("Error al analizar el objeto guardado:", error);
		  // Manejar el error según sea necesario, por ejemplo, también podrías redirigir al login en caso de error
		return  navigate("/login");
		}
	  }, []);

	  useEffect(()=>{
		const fetchDataDetalleReceta= async () => {
			try {
			  const result = await fetchDataAndExportDetalleReceta();
			  setDetReceta(result);
			} catch (error) {
			  console.error('Error fetching data:', error);
			}
		};
	  fetchDataDetalleReceta();
	},[]);
	//Obtenemos en un estado todos los menus
	useEffect(() => {
	  const fetchDataExample = async () => {
		try {
		  const result = await fetchDataAndExport();
		  setData2(result);
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  };
  
	  fetchDataExample();
	}, []);


	//Obtenemos en un estado todas las recetas
	useEffect(() => {
		const fetchDataReceta = async () => {
		  try {
			const result = await fetchDataAndExportReceta();
			setReceta(result);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		fetchDataReceta();
	  }, []); 

	  //obtenemos los inventarios en un estado
	  useEffect(() => {
		const fetchDataInvetario = async () => {
		  try {
			const result = await fetchDataAndExportInventario();
			setInventario(result);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		fetchDataInvetario();
	  }, []); 


	  useEffect(() => {
		const fetchDataInvetario2 = async () => {
		  try {
			const result = await fetchDataAndExportInvetario2();
			setInventario2(result);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		fetchDataInvetario2();
	  }, []); 

	
	  useEffect(() => {
		const fetchDataInvetario3 = async () => {
		  try {
			const result = await fetchDataAndExportInventario3();
			setInventario3(result);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		fetchDataInvetario3();
	  }, []); 

	  useEffect(() => {
		const fetchDataInvetario4 = async () => {
		  try {
			const result = await fetchDataAndExportInventario4();
			setInventario4(result);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		fetchDataInvetario4();
	  }, []); 

	  useEffect(()=>{
		const fetchDataMenus= async () => {
			try {
			  const result = await fetchDataAndExportMenus();
			  setMenus(result);
			} catch (error) {
			  console.error('Error fetching data:', error);
			}
		};
	  fetchDataMenus();
	},[]);	

	useEffect(() => {
		const fetchCliente  = async () => {
		  try {
			const result = await fetchClienteAndExportCliente();
			setCliente(result);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		fetchCliente();
	  }, []);

	useEffect(()=>{
		const fetchDataPedidos= async () => {
			try {
			  const result = await fetchDataAndExportPedidos();
			  setPedidos(result);
			} catch (error) {
			  console.error('Error fetching data:', error);
			}
		};
	  fetchDataPedidos();
	},[]);	

	useEffect(()=>{
		const fetchDataInvetarios= async () => {
			try {
			  const result = await fetchDataAndExportInvetarios();
			  setInventarios(result);
			} catch (error) {
			  console.error('Error fetching data:', error);
			}
		};
	  fetchDataInvetarios();
	},[]);	

	useEffect(()=>{
		const fetchDataIngredientes= async () => {
			try {
			  const result = await fetchDataAndExportIngrediente();
			  setIngrediente(result);
			} catch (error) {
			  console.error('Error fetching data:', error);
			}
		};
	  fetchDataIngredientes();
	},[]);	

	//const ultimoIdCliente = cliente[cliente.length].idCliente;
	//console.log('El ultimo Id Cliente es :', ultimoIdCliente);

   console.log("Todos los inventarios son:")
   console.log(inventarios);
   console.log("Todos los ingredientes son:")
   console.log(ingrediente);
	//ingredientes:

	const inventariosIds = inventarios.map(e => e.idInventario);
	console.log("Los IDS de los inventarios son ");
	console.log(inventariosIds);

	const existencias = inventarios.map(e => e.existenciaActual);
	console.log("Las existencias son: ");
	console.log(existencias);


	const ingredientesIDs = inventarios.map(e => e.idIngrediente);
	console.log("El array de IDS ingredientes es:")
	console.log(ingredientesIDs);

	const ingredientesFiltrados = ingrediente.filter(ingrediente => ingredientesIDs.includes(ingrediente.idIngrediente));
	console.log("Estos son los ingredientes que se encontraron en el inventario");
	console.log(ingredientesFiltrados);

	const cantidadesParaDescontar = ingredientesFiltrados.map(e => e.cantidadMedida);
    console.log("Las cantidades a descontar son:");
	console.log(cantidadesParaDescontar);

	const indsIngredientesInDetalleIngrediente = detReceta.filter(ingrediente => ingredientesIDs.includes(ingrediente.idIngrediente));
     console.log("En detalle receta con los ids de los ingredientes estan este array");
     console.log(indsIngredientesInDetalleIngrediente);
 
     const cantidadesDetalleReceta = indsIngredientesInDetalleIngrediente.map(e => e.cantidad);
     console.log("Las cantidades de detalleReceta son: ");
     console.log(cantidadesDetalleReceta);
  
	//const {idInventario, idIngrediente, idUsuario, existenciaInicial,existenciaActual,fechaEntrada, fechaModificacion,unidadMedida} = invetario;
    //const {idInventario: idInventario2,idIngrediente: idIngrediente2, idUsuario: idUsuario2, existenciaInicial: existenciaInicial2, existenciaActual: existenciaActual2, fechaEntrada: fechaEntrada2,fechaModificacion: fechaModificacion2,unidadMedida: unidadMedida2 } = inventario2;
	//const {idInventario: idInventario3,idIngrediente: idIngrediente3, idUsuario: idUsuario3, existenciaInicial: existenciaInicial3, existenciaActual: existenciaActual3, fechaEntrada: fechaEntrada3,fechaModificacion: fechaModificacion3,unidadMedida: unidadMedida3 } = inventario3;
	//const {idInventario: idInventario4,idIngrediente: idIngrediente4, idUsuario: idUsuario4, existenciaInicial: existenciaInicial4, existenciaActual: existenciaActual4, fechaEntrada: fechaEntrada4,fechaModificacion: fechaModificacion4,unidadMedida: unidadMedida4 } = inventario4;
	//console.log('EL Inventario 4 es:');
	//console.log(inventario4);
	//console.log({idInventario: idInventario2,idIngrediente: idIngrediente2, idUsuario: idUsuario2, existenciaInicial: existenciaInicial2, existenciaActual: existenciaActual2, fechaEntrada: fechaEntrada2,fechaModificacion: fechaModificacion2,unidadMedida: unidadMedida2 });
	//console.log('Arina:', existenciaActual);
	//console.log('Arina:', existenciaActual2);
	//console.log('Arina:', existenciaActual3);
	//console.log('Arina:', existenciaActual4);
	const objetoGuardado = localStorage.getItem('miObjetoGuardado');
	console.log(objetoGuardado);
	const usuarioRecuperado = JSON.parse(objetoGuardado);
	console.log(usuarioRecuperado);

	//console.log(usuarioRecuperado.idUsuario);


	const fecha = new Date();
	const año = fecha.getFullYear();
	const mes = String(fecha.getMonth() + 1).padStart(2, '0');
	const dia = String(fecha.getDate()).padStart(2, '0');
	const fechaFormateada = `${año}-${mes}-${dia}`;

	

    const showCreditCardForm = (countProducts) => {

		for (let index = 0; index < existencias.length; index++) {
		     
			if(existencias[index] <= 600){
        
				return Swal.fire({
					icon: 'error',
					title: '¡Error! :(',
					text: 'Lo siento no hay suficientes para tu pedido',
					confirmButtonText: 'Aceptar'
				  });
			   }	
			
		}

		   if(countProducts === 0){
			return Swal.fire({
				icon: 'error',
				title: '¡Error!',
				text: 'Debes tener al menos un producto en el carrito para poder realizar tu compra',
				confirmButtonText: 'Aceptar'
			  });
		   }



		if(countProducts === 0){
        
			return Swal.fire({
				icon: 'error',
				title: '¡Error!',
				text: 'Debes tener al menos un producto en el carrito para poder realizar tu compra',
				confirmButtonText: 'Aceptar'
			  });
		   }
         
		
		const htmlContent = `
		<div>
		  <img src="/visa.jpg" alt="Encabezado" class="img-fluid mb-3" />
	  
		  <div class="form-group">
			<label for="creditCardNumber">Número de tarjeta:</label>
			<input type="text" class="form-control" id="creditCardNumber" placeholder="xxxx-xxxx-xxxx-xxxx-xxxx" value="5264-1122-3212-8943-4521"/>
		  </div>
	  
		  <div class="form-group">
			<label for="expiryDate">Fecha de vencimiento:</label>
			<input type="text" class="form-control" id="expiryDate" value="02/26" />
		  </div>
	  
		  <div class="form-group">
			<label for="securityCode">CVV:</label>
			<input type="text" class="form-control" id="securityCode" value="2234"/>
		  </div>
	  
		  <div class="form-group">
			<label for="cardHolderName">Nombre del titular:</label>
			<input type="text" class="form-control" id="cardHolderName" value="Angel Alvarez" />
		  </div>
		</div>
	  `;
	  
	  Swal.fire({
		title: 'Ingresa los detalles de tu tarjeta de crédito',
		html: htmlContent,
		confirmButtonText: 'Pagar',
		showCancelButton: true,
		cancelButtonText: 'Cancelar',
		showLoaderOnConfirm: true,
		preConfirm: async () => {
		  // Lógica después del pago
	
		  Swal.fire({
			icon: 'success',
			title: '¡Compra realizada exitosamente!',
			text: 'Tu pedido será entregado a la brevedad',
			confirmButtonText: 'Aceptar',
		  });
	
		  const url = 'http://localhost:8080/inventarios/1';
		  const url2 = 'http://localhost:8080/inventarios/2';
		  const url3 = 'http://localhost:8080/inventarios/3';
		  const url4 = 'http://localhost:8080/inventarios/4';
	
		  //Insumos para el pay
		/*  const arina = {
			idInventario,
			idIngrediente,
			idUsuario,
			existenciaInicial,
			existenciaActual: existenciaActual - (500 * countProducts) ,
			fechaEntrada,
			fechaModificacion: fechaFormateada,
			unidadMedida
		 }
	
		 const leche = 	
		 {
		  idInventario: idInventario2,
		  idIngrediente: idIngrediente2, 
		  idUsuario: idUsuario2, 
		  existenciaInicial: existenciaInicial2, 
		  existenciaActual: existenciaActual2 - (countProducts * 200), 
		  fechaEntrada: fechaEntrada2,
		  fechaModificacion: fechaFormateada,
		  unidadMedida: unidadMedida2 
		}
	
		const huevos = 	
		{
		 idInventario: idInventario3,
		 idIngrediente: idIngrediente3, 
		 idUsuario: idUsuario3, 
		 existenciaInicial: existenciaInicial3, 
		 existenciaActual: existenciaActual3 - (countProducts * 2), 
		 fechaEntrada: fechaEntrada3,
		 fechaModificacion: fechaFormateada,
		 unidadMedida: unidadMedida3
	   }
	
	
	   const quesoCrema = 	
	   {
		idInventario: idInventario4,
		idIngrediente: idIngrediente4, 
		idUsuario: idUsuario4, 
		existenciaInicial: existenciaInicial4, 
		existenciaActual: existenciaActual4 - (countProducts * 200), 
		fechaEntrada: fechaEntrada4,
		fechaModificacion: fechaFormateada,
		unidadMedida: unidadMedida4
	  }

	  */
      //Descontamos el inventario
	  
	  
	  updateInventarioDaoMejor(inventariosIds, ingredientesIDs, cantidadesDetalleReceta,fechaFormateada, existencias, countProducts);

      //Salidas

	

    // venta
	const nuevaVenta = {
		idCliente: usuarioRecuperado.idUsuario,
		idMetodoPago: 1,
		estatus: "En proceso",
		fechaCreacion: "2023-11-11T06:00:00.000+00:00",
		fechaModificacion: "2023-11-12T06:00:00.000+00:00",
		total: total
		}

	

	//Pedidos
	const pedido = {
		idCliente: usuarioRecuperado.idUsuario,
		idMetodoPago: 1,
		estatus: 1,
		fechaCreacion: fechaFormateada,
		fechaModificacion: fechaFormateada,
	    total: total
	  }

	//const ingredientesIDs = inventarios.filter((e,i)=> e.idIngrediente === ingrediente[i].idIngrediente);

	  
	
	
	
		  const promises = [
			/*updateInventarioDao(url, arina),
			updateInventarioDao(url2, leche),
			updateInventarioDao(url3, huevos),
			updateInventarioDao(url4, quesoCrema),
			*/
			/*insertSalidasDao('http://localhost:8080/salidainventarios', salida),
			insertSalidasDao('http://localhost:8080/salidainventarios', salida2),
			insertSalidasDao('http://localhost:8080/salidainventarios', salida3),
			insertSalidasDao('http://localhost:8080/salidainventarios', salida4),
			*/
			insertVentaDao('http://localhost:8080/ventas', nuevaVenta),
			insertPedido('http://localhost:8080/pedidos', pedido)
		  ];
	
		  try {
			await Promise.all(promises);
	
			setCountProducts(0);
	
			Swal.fire({
			  title: 'Procesando su pago...',
			  text: 'Espere unos momentos.',
			  timer: 3000,
			  showConfirmButton: false,
			  onBeforeOpen: () => {
				Swal.showLoading();
			  },
			});
	
			// Recargar la página después de completar todas las operaciones
			
		  } catch (error) {
			console.error('Error en las operaciones asincrónicas:', error);
		  }
		},
	  });

	  //console.log(productQuantities[1]);

	 const keysArray = [];

	  for (const key in productQuantities) {
		keysArray.push(key);
	  }
	  const valuesArray = keysArray.map(key => productQuantities[key]);

	  console.log('Array de valores:', valuesArray);
	  console.log('Array de claves:', keysArray);
	  
	  const newMenus = menus.filter((e) => keysArray.includes(e.idMenu.toString()));

     
	  console.log('Detalle del pedido filtrado:', newMenus);

	  const updatedCostoObject = {};

		newMenus.forEach((menu, index) => {
  		const updatedCosto = menu.costo * valuesArray[index];
 		 updatedCostoObject[menu.idMenu] = updatedCosto;
		});

   console.log('Objeto actualizado con claves de idMenu:', updatedCostoObject);

   console.log("El ultimo id de pedidos es: ");
   const lasIdPedidos = pedidos[pedidos.length-1].idPedido +1;

   console.log(lasIdPedidos);

   insertDetallePedido(keysArray,valuesArray,updatedCostoObject,lasIdPedidos);


    

  /* for (let index = 0; index < valuesArray.length; index++) {

		console.log('El detalle pedido es:');
		
		const DetallePedido = {
		idPedido: 1,
		idMenu: keysArray[index],
		cantidad: valuesArray[index],
		total: updatedCostoObject[keysArray[index]],
		estatus: 1
		};
	
		console.log(DetallePedido);
  }
      */
	  
    
	   setTimeout(function() {
		location.reload();
	  }, 7000);
	 
     
};

	// Ahora puedes usar el estado 'data' en tu componente
	//console.log(data2);
	//console.log(receta);

	//const {idInventario, idIngrediente, idUsuario, existenciaInicial,existenciaActual,fechaEntrada, fechaModificacion,unidadMedida} = invetario;
	//console.log({idInventario, idIngrediente, idUsuario, existenciaInicial,existenciaActual,fechaEntrada,fechaModificacion,unidadMedida});
    
   /*	const realiceBuy = (countProducts) => {
    
       if(countProducts === 0){
        
		Swal.fire({
			icon: 'error',
			title: '¡Error!',
			text: 'Debes tener al menos un producto en el carrito para poder realizar tu compra',
			confirmButtonText: 'Aceptar'
		  });
	   }
     else{
	   Swal.fire({
		icon: 'success',
		title: '¡Compra realizada exitosamente!',
		text: 'Tu pedido sera entregado a la brevedad',
		confirmButtonText: 'Aceptar'
	  });

   
	//end point para actualizar
	const url = 'http://localhost:8080/inventarios/1';

	//objeto para acualizar
     const updateInventario = {
        idInventario,
		idIngrediente,
		idUsuario,
		existenciaInicial,
		existenciaActual: existenciaActual - (500 * countProducts) ,
		fechaEntrada,
		fechaModificacion,
		unidadMedida
	 }

	 //configuramos los datos para hacer la peticion put y le pasamos el objeto updateInventario
	 const requestOptions = {
		method: 'PUT',
		headers: {
		  'Content-Type': 'application/json', 
		
		},
		body: JSON.stringify(updateInventario)
	  };
     
	  fetch(url, requestOptions).then(response => {
  	  if (!response.ok) {
         throw new Error(`Error de red: ${response.status}`);
  	     }
        return response.json(); // o response.text() si esperas una respuesta diferente
       })
  .then(data => {
    // Manejar la respuesta exitosa
    console.log('Respuesta exitosa:', data);
  })
  .catch(error => {
    // Manejar errores de red o del servidor
    console.error('Error:', error.message);
  });

    setCountProducts(0);

	}
	
	}*/

	const onAddProduct = product => {


		Swal.fire({
			title: '¿Estás seguro de añadir este nuevo pay al carrito?',
			text: 'Ahora podras agragar al carrito todos los pays de este tipo que gustes',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, estoy seguro',
			cancelButtonText: 'Cancelar',
		  }).then((result) => {
			if (result.isConfirmed) {
			

				if (allProducts.find(item => item.idMenu === product.idMenu)) {
					const updatedProducts = allProducts.map(item =>
					  item.idMenu === product.idMenu
						? { ...item, quantity: item.quantity + 1 }
						: item
					);
			  
					setAllProducts([...updatedProducts]);
					setTotal(total + product.costo * product.quantity);
					setCountProducts(countProducts + product.quantity);
			  
					// Actualizar el estado de cantidades individuales (productQuantities)
					setProductQuantities(prevQuantities => {
					  const updatedQuantities = {
						...prevQuantities,
						[product.idMenu]: (prevQuantities[product.idMenu] || 0) + 1,
					  };
					  console.log('Product Quantities:', updatedQuantities);
					  return updatedQuantities;
					});
			  
					return setAllProducts([...updatedProducts]);
				  } else {
					setAllProducts([...allProducts, { ...product, quantity: 1 }]);
					setTotal(total + product.costo);
					setCountProducts(countProducts + 1);
			  
					// Actualizar el estado de cantidades individuales (productQuantities)
					setProductQuantities(prevQuantities => {
					  const updatedQuantities = {
						...prevQuantities,
						[product.idMenu]: (prevQuantities[product.idMenu] || 0) + 1,
					  };
					  console.log('Product Quantities:', updatedQuantities);
					  return updatedQuantities;
					});
			  
					return setAllProducts([...allProducts, { ...product, quantity: 1 }]);
				  }

				
			}
		  });

		
		//console.log(productQuantities[1]);
	
	};

	return (
      
		<>
		<div className='mb-4 text-center'>
			<button style={{ backgroundColor: 'rgb(255, 56, 86)', color: '#ffff', padding: '10px' }} onClick={() => showCreditCardForm(countProducts)}>Realizar compra $</button>
		</div>
		<div className='container-items'>
			{data2.map((product, i) => {
				// Obtener la receta correspondiente usando find
				const matchingRecipe = receta.find((receta) => receta.idReceta === product.idMenu);

				// Verificar si tanto el estatus del producto como el de la receta son 1
				if (product.estatus === true && (!matchingRecipe || matchingRecipe.estatus === true)) {
					return (
						<div className='item' key={product.idMenu}>
							<figure>
								<img src={product.foto ? product.foto : '/nuevo.jpg'} alt={product.nameProduct} />
							</figure>
							<div className='info-product'>
								{matchingRecipe && <h1 key={matchingRecipe.idReceta}>{matchingRecipe.nombreReceta}</h1>}
								<p className='price' style={{ color: 'green' }}>${product.costo} pesos MXN</p>
								<button onClick={() => onAddProduct(product)}>
									+ Añadir al carrito
									
								</button>
							</div>
						</div>
					);
				} else {
					// Si la condición no se cumple, puedes devolver null o un fragmento vacío
					return null;
				}
			})}

		</div>

	</>
	

	

		
	);
};
