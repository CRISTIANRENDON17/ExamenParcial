import Style from './Navbar.module.css';
import {AiOutlineShoppingCart} from '@react-icons/all-files/ai/AiOutlineShoppingCart';


const Navbar = () => {
	return <div className={Style.container}>
        <h1 className={Style.titulo}>Taller 1</h1>
        <button className={Style.button}><AiOutlineShoppingCart/> 0 Products </button>
    </div>;
};

export default Navbar;
