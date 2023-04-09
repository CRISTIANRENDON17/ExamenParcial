import Cart from './Cart.jsx';
import Data from '../DataBase/Data.js';
import Style from './GlobalCart.module.css';
const GlobalCart = () => {
	const Objetos = Id => {
		const DataArray = Data.filter(data => data.Id === Id);
		return DataArray[0];
	};

	return (
		<>
			<div className={Style.Container}>
				<div>
					<Cart Objeto={Objetos('1u')} />
				</div>
                <div>
					<Cart Objeto={Objetos('2u')} />
				</div>
                <div>
					<Cart Objeto={Objetos('3u')} />
				</div>
                <div>
					<Cart Objeto={Objetos('4u')} />
				</div>
			</div>
		</>
	);
};

export default GlobalCart;
