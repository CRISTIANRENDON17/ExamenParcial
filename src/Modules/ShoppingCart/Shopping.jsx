import { useState } from 'react';
import Style from './Shopping.module.css';

const Shopping = ({ Objeto, Producto, setProducto }) => {
	const [Value, setValue] = useState(1);
    const handleChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        if(newValue < 1){
            setValue(1);
        }
        else if(newValue > Objeto.Cantidad_Disponible){
            setValue(Objeto.Cantidad_Disponible);
        }else{
            const aux = Producto.slice();
            aux.forEach((elemento) => {
                if (elemento.Id === Objeto.Id) {
                  elemento.Cantidad_Seleccionada = newValue;
                }
              });
            setProducto(aux);
            setValue(newValue);
        }
        
      };
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
					<h3>Description: {Objeto.Descripcion}</h3>
				</div>
			</div>
			<div>
				<input
					type='number'
					value={Value}
					className={Style.InputNumber}
					onChange={handleChange}
				></input>
			</div>
		</div>
	);
};

export default Shopping;
