import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Header = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
	const navigate = useNavigate();
	const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.idMenu !== product.idMenu
		);

		setTotal(total - product.costo * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	const cerrarSesion = () =>{
       
		Swal.fire({
			title: '¿Estás seguro?',
			text: '¿Quieres cerrar sesión?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Sí, cerrar sesión',
			cancelButtonText: 'Cancelar',
		  }).then((result) => {
			if (result.isConfirmed) {
			  // Aquí puedes agregar la lógica para cerrar sesión
			  localStorage.clear();
			  navigate("/login")
			  Swal.fire('¡Sesión cerrada!', '', 'success');
			}
		  });
	}

	return (
		<header style={{backgroundColor:'radialGradient(circle, #ff0000, #000000)'}}>
			<h1>Sweet Dreams</h1>

            <div style={{marginRight:"150px", marginTop:"15px"}}>
			<a href="/pedidos"><h4>Ver pedidos</h4></a>
			</div>

			<div style={{marginRight:"150px", marginTop:"15px"}}>
			  <button className='btn btn-outline-danger' style={{color: 'white'}} onClick={cerrarSesion}>Cerrar sesion</button>
			</div>
			
			<div className='container-icon'>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-products'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{allProducts.length ? (
						<>
							<div className='row-product'>
								{allProducts.map(product => (
									<div className='cart-product' key={product.idMenu}>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito' style={{color:'black'}}>
												{product.quantity}
											</span>
											<p className='titulo-producto-carrito' style={{color:'black'}}>
											{product.costo === 30
												? 'Pay de Manzana'
												: product.costo === 37
												? 'Pay de Limón'
												: product.costo === 35
												? 'Pay de fresa'
												: product.costo === 50
												? 'Pay de Queso'
												:'Pay Mango'}
											</p>
											<span className='precio-producto-carrito' style={{color:'black'}}>
												${product.costo}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total' style={{color:'black'}}>
								<h3>Total:</h3>
								<span className='total-pagar' style={{color:'black'}}>${total}</span>
							</div>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty' style={{color:'black'}}>El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
	);
};
