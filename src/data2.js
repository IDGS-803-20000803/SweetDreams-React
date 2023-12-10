import { fetchData, fetchDataReceta, fetchDataInventario,fetchCliente, fetchDataInventario2, fetchDetalleReceta,fetchDataInventario3, fetchDataInventario4, fetchDataIngredientes, fetchDataMenus, fetchDataPedidos, fetchDataRolUsuarios, fetchDataUsuarios, fetchDataDetallePedidos, fetchDataVentas, fetchDataInventarios} from './api';

export const fetchDataAndExport = async () => {
  const data = await fetchData();
  return data;
};

export const fetchDataAndExportReceta = async () => {
    const data = await fetchDataReceta();
    return data;
  };

export const fetchDataAndExportInventario = async () =>{

  const data = await fetchDataInventario();
  return data;
}

export const fetchDataAndExportInvetario2 = async () => {
  const data = await fetchDataInventario2();
  return data;
}


export const fetchDataAndExportDetallePedido = async () => {
  const data = await fetchDataDetallePedidos();
  return data;
}

export const fetchDataAndExportInventario3 = async () => {
  const data = await fetchDataInventario3();
  return data;
}

export const fetchDataAndExportInventario4 = async () => {
  const data = await fetchDataInventario4();
  return data;
}

export const fetchDataAndExportIngrediente = async () =>{
  const data = await fetchDataIngredientes();
  return data;
}

export const fetchDataAndExportMenus = async () =>{
  const data = await fetchDataMenus();
  return data;
}

export const fetchDataAndExportPedidos = async () =>{
  const data = await fetchDataPedidos();
  return data;
}

export const fetchDataAndExportRolUsuarios = async () =>{
  const data = await fetchDataRolUsuarios();
  return data;
}

export const fetchDataAndExportUsuarios = async () =>{
  const data = await fetchDataUsuarios();
  return data;
}

export const fetchDataAndExportVentas = async () =>{
  const data = await fetchDataVentas();
  return data;
}

export const fetchDataAndExportInvetarios = async () =>{
  const data = await fetchDataInventarios();
  return data;
}

export const fetchDataAndExportDetalleReceta= async () =>{
  const data = await fetchDetalleReceta();
  return data;
}

export const fetchClienteAndExportCliente= async () =>{
  const data = await fetchCliente();
  return data;
}
