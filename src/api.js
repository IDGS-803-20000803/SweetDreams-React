export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/menus'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchDataReceta = async () => {
    try {
      const response = await fetch('http://localhost:8080/recetas'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchDataInventarios = async () => {
    try {
      const response = await fetch('http://localhost:8080/inventarios'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  export const fetchDataInventario = async () => {
    try {
      const response = await fetch('http://localhost:8080/inventarios/1'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchDataInventario2 = async () => {
    try {
      const response = await fetch('http://localhost:8080/inventarios/2'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchDataInventario3 = async () => {
    try {
      const response = await fetch('http://localhost:8080/inventarios/3'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchDataInventario4 = async () => {
    try {
      const response = await fetch('http://localhost:8080/inventarios/4'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchDataIngredientes = async () => {
    try {
      const response = await fetch('http://localhost:8080/ingredientes'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchDataMenus = async () => {
    try {
      const response = await fetch('http://localhost:8080/menus'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchDataPedidos = async () => {
    try {
      const response = await fetch('http://localhost:8080/pedidos'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchDataDetallePedidos = async () => {
    try {
      const response = await fetch('http://localhost:8080/pedidoDetalles'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchDataRolUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:8080/rolesusuarios'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchDataUsuarios= async () => {
    try {
      const response = await fetch('http://localhost:8080/usuarios'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchDataVentas= async () => {
    try {
      const response = await fetch('http://localhost:8080/ventas'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchDetalleReceta= async () => {
    try {
      const response = await fetch('http://localhost:8080/detalleRecetas'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const fetchCliente= async () => {
    try {
      const response = await fetch('http://localhost:8080/clientes'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };





  

