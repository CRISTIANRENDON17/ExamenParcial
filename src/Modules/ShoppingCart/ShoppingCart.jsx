import Shopping from "./Shopping";
import Style from "./ShoppingCart.module.css"

const ShoppingCart = ({ Producto }) => {
	return(
        <div className={Style.container}>    
            <h1 className={Style.titulo}>Shopping Cart</h1>  
            <hr/>
            {
            // eslint-disable-next-line array-callback-return
            Producto.map((Objeto) => {
                if(Objeto.Estado === true)
                {
                    return(
                        // eslint-disable-next-line react/jsx-key
                        <div>
                            <Shopping Objeto = {Objeto}/>
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default ShoppingCart;
