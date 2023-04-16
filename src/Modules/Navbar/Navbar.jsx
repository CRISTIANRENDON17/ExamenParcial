import Style from './Navbar.module.css';
import { AiOutlineShoppingCart } from '@react-icons/all-files/ai/AiOutlineShoppingCart';
import { useState, useEffect } from 'react';

const Navbar = ({ Vista, setVista, Producto }) => {
	const [CantidadProducto, setCantidadProducto] = useState(0);
	useEffect(()=>{
		let sum = 0;
		for(let i = 0; i < Producto.length ; i++){
		  if(Producto[i].Estado === true){
			sum = sum + 1;
		  }
		}
		setCantidadProducto(sum);
	},[Producto])

	return (
		<div className={Style.container}>
			<h1 className={Style.titulo}>Taller 1</h1>
			<button
				className={Style.button}
				onClick={() => {
					setVista(!Vista);
				}}
			>
				<h3>
					<AiOutlineShoppingCart /> {CantidadProducto} Products
				</h3>
			</button>
		</div>
	);
};

export default Navbar;
