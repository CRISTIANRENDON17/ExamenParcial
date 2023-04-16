import Navbar from './Modules/Navbar/Navbar.jsx';
import Style from './App.module.css';
import './styles/index.css';
import GlobalCart from './Modules/Cart/GlobalCart.jsx';
import Footer from './Modules/Footer/Footer.jsx';
import { useState } from 'react';
import ShoppingCart from './Modules/ShoppingCart/ShoppingCart.jsx';
import Data from './Modules/DataBase/Data.js';
function App() {
	const [Vista, setVista] = useState(true);
	const [Producto, setProducto] = useState(Data);
	console.log(Producto);
	return (
		<div className={Style.container}>
			<div className={Style.Navbar}>
				<Navbar Vista={Vista} setVista={setVista} />
				<hr />
			</div>
			<div
				className={
					Vista === true ? Style.GlobalCartTrue : Style.GlobalCartFalse
				}
			>
				<GlobalCart Producto={Producto} setProducto={setProducto} />
			</div>
			<div
				className={
					Vista === false ? Style.GlobalCartTrue : Style.GlobalCartFalse
				}
			>
				<ShoppingCart Producto = {Producto} />
			</div>

			<div className={Style.Footer}>
				<Footer />
			</div>
		</div>
	);
}

export default App;
