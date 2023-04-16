import Navbar from './Modules/Navbar/Navbar.jsx';
import Style from './App.module.css';
import './styles/index.css';
import GlobalCart from './Modules/Cart/GlobalCart.jsx';
import Footer from './Modules/Footer/Footer.jsx';
import { useState } from 'react';
import ShoppingCart from './Modules/ShoppingCart/ShoppingCart.jsx';
import Data from './Modules/DataBase/Data.js';
import Summary from './Modules/Summary/Summary.jsx';
function App() {
	const [Vista, setVista] = useState(true);
	const [Producto, setProducto] = useState(Data);

	return (
		<div className={Style.container}>
			<div className={Style.Navbar}>
				<Navbar Vista={Vista} setVista={setVista} Producto = {Producto} />
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
				<div className={Style.ContainerShoppingAndSummary}>
					<div className={Style.Shopping}>
						<ShoppingCart Producto = {Producto} setProducto = {setProducto} />
					</div>
					<div className={Style.Summary}>
						<Summary Producto = {Producto} />
					</div>
				</div>
				
				
			</div>
			

			<div className={Style.Footer}>
				<Footer />
			</div>
		</div>
	);
}

export default App;
