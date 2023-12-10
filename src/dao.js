export const updateInventarioDao = (url, obj) => {

    const requestOptions = {
		method: 'PUT',
		headers: {
		  'Content-Type': 'application/json', 
		},
		body: JSON.stringify(obj)
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
   

}

export const updateInventarioDaoMejor = (idsInventarios, idsIngredientes, cantidades, fecha, existencias, cantidad) => {

	for (let index = 0; index < idsIngredientes.length; index++) {


		const inventarios = {
			idInventario: idsInventarios[index],
			idIngrediente:idsIngredientes[index],
			idUsuario: 1,
			existenciaInicial: 45555,
			existenciaActual: existencias[index] - (cantidades[index] * cantidad),
			fechaEntrada: fecha,
			fechaModificacion: fecha,
			unidadMedida: 'gramos'
		 }

	/*	 const salidas = {
			idIngrediente:idsIngredientes[index],
			idUsuario: 1,
			existenciaInicial: 45555,
			existenciaActual: existencias[index] - (cantidades[index] * cantidad),
			fechaEntrada: fecha,
			fechaModificacion: fecha,
			unidadMedida: 'gramos'
		 }
       */  
		 const salida2 = {
			idIngrediente: idsIngredientes[index],
			unidadMedida: "Gramos",
			cantidad: existencias[index] - (cantidades[index] * cantidad),
			fechaSalida: fecha,
			idUsuario: 1
		}



		 insertSalidasDao("http://localhost:8080/salidainventarios", salida2);


		const requestOptions = {
			method: 'PUT',
			headers: {
			  'Content-Type': 'application/json', 
			},
			body: JSON.stringify(inventarios)
		  };
		
		fetch(`http://localhost:8080/inventarios/${index+1}`, requestOptions).then(response => {
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
		
		
	}



}


export const insertSalidasDao = (url, obj) => {

    const requestOptions = {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json', 
		},
		body: JSON.stringify(obj)
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
   

}


export const insertVentaDao = (url, obj) => {

    const requestOptions = {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json', 
		},
		body: JSON.stringify(obj)
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
   

}


export const insertPedido = (url, obj) => {

    const requestOptions = {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json', 
		},
		body: JSON.stringify(obj)
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
   

}


export const insertDetallePedido = (keysArray, valuesArray,updatedCostoObject, lastIdpedidos) => {


	for (let index = 0; index < valuesArray.length; index++) {
	
		console.log('El detalle pedido es:');
		
		const DetallePedido = {
		idPedido: lastIdpedidos,
		idMenu: keysArray[index],
		cantidad: valuesArray[index],
		total: updatedCostoObject[keysArray[index]],
		estatus: 1
		};
	
		console.log(DetallePedido);
       
	  
		const requestOptions = {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json', 
			},
			body: JSON.stringify(DetallePedido)
		  };
		
		fetch("http://localhost:8080/pedidoDetalles", requestOptions).then(response => {
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
	   



  }

}

export const inserRolUser = (obj) => {
 
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
      };
   
    fetch("http://localhost:8080/rolesusuarios", requestOptions).then(response => {
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
   
 
}
 
 
export const inserUser = (obj) => {
 
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
      };
   
    fetch("http://localhost:8080/usuarios", requestOptions).then(response => {
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
   
 
}
 
 
export const inserCliente = (obj) => {
 
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
      };
   
    fetch("http://localhost:8080/clientes", requestOptions).then(response => {
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
   
 
}