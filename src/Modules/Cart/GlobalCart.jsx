import Cart from "./Cart.jsx";
import Data from "../DataBase/Data.js"
const GlobalCart = () =>{

    const Objetos = (Id) => {
        const DataArray = Data.filter( data => data.Id === Id);
        return DataArray[0];
    }

    //console.log(Objetos('1u').Id)
  
    return <>
        <Cart Objeto = {Objetos('1u')}/>
    </>
}

export default GlobalCart;