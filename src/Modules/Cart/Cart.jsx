import Style from './Cart.module.css'

const Cart = ( Objeto ) =>{
    const Data = Objeto.Objeto;

    return <div className={Style.container}>
        <div>
        <img  src ={Data.Url}  className={Style.Img}  alt="Foto" />
        </div>
        <div className={Style.Info}>
            <div>
                <h3><span>{Data.Nombre}</span></h3>
            </div>
            <div>
                <h3>${Data.Precio}</h3>
            </div>
            <div>
                <button className={Style.button}><h4><span>Add To Cart</span></h4></button>
            </div>
        </div>

    </div>
}

export default Cart;