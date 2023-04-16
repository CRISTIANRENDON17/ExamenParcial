import { useState } from 'react';
import Style from './Cart.module.css';

const Cart = ({ Objeto, Producto, setProducto }) => {
	const [Value, setValue] = useState('Add To Cart');
	const Add = () =>{
		const aux = Producto.slice();
			aux.forEach((elemento) => {
				if (elemento.Id === Objeto.Id) {
					if(Value === 'Add To Cart'){
						elemento.Estado = true;
						elemento.Cantidad_Seleccionada = 1;
						setValue('Added');
					}else if(Value === 'Added'){
						elemento.Estado = false;
						elemento.Cantidad_Seleccionada = 0;
						setValue('Add To Cart');
					}
				}
			  });
			  setProducto(aux);
	}
	return (
		<div className={Style.container}>
			<div>
				<img src={Objeto.Url} className={Style.Img} alt='Foto' />
			</div>
			<div className={Style.Info}>
				<div>
					<h3>
						<span>{Objeto.Nombre}</span>
					</h3>
				</div>
				<div>
					<h3>${Objeto.Precio}</h3>
				</div>
				<div>
					<button
						className={Style.button}
						onClick={Add}
					>
						<h4>
							<span>{Value}</span>
						</h4>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
