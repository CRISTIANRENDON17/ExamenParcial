import Style from './Navbar.module.css';
import { AiOutlineShoppingCart } from '@react-icons/all-files/ai/AiOutlineShoppingCart';

const Navbar = ({ Vista, setVista }) => {
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
					<AiOutlineShoppingCart /> 0 Products
				</h3>
			</button>
		</div>
	);
};

export default Navbar;
