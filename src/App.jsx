import { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import {createBrowserRouter,Route, Routes, Navigate} from "react-router-dom";
import Login from './Login';
import Productos from './Productos';
import LandindPage from './LandindPage';
import ClientePedido from './ClientePedido';
import DetalleVenta from './DetalleVenta';
import NotFound from './NotFound';
import Register from './Register';

function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<>

		   <Routes>
			<Route path='/login' Component={Login}></Route>
			<Route path='/' Component={LandindPage}></Route>
			<Route path='/productos' Component={Productos}></Route>
			<Route path='/pedidos' Component={DetalleVenta}></Route>
			<Route path='/registro' Component={Register}></Route>
			<Route path='/carrito' element={[	<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>, 
			<ProductList
			allProducts={allProducts}
			setAllProducts={setAllProducts}
			total={total}
			setTotal={setTotal}
			countProducts={countProducts}
			setCountProducts={setCountProducts}
		    />]} />

			<Route path='*' element={<Navigate to='/not-found' />} />
      		<Route path='/not-found' Component={NotFound} />
		   </Routes>


		</>
	);
}

export default App;
