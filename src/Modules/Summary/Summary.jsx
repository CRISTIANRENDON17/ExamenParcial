import { useEffect, useState } from 'react';
import Style from './Summary.module.css'

const Summary = ({Producto}) =>{

    const [Total, setTotal] = useState(0);
    const [Value, setValue] = useState(0);
    useEffect(()=>{
        let sum = 0;
        Producto.forEach(element => {
            if(element.Estado === true){
                sum = sum + (element.Precio * element.Cantidad_Seleccionada); 
            }
        });
        setTotal(sum);
    },[Producto])

    const handleChange = (event) => {
        const valorInput = parseInt(event.target.value, 10);
        if(valorInput < 0){
            setValue(0);
        }else if(valorInput > 100){
            setValue(100);
        }else if(valorInput === ""){
            setValue(0);
        }else{
            setValue(valorInput);
        }
    }


    return (
        <div className={Style.Container}>
            <h1 className={Style.Title}>Summary</h1>
            <hr/>
            <div className={Style.InputNumber}>
                <label><h3>Enter Coupon Code</h3></label>
                <input type='number' value = {Value} min='0' max='100' onChange={handleChange}></input>
            </div>
            <div className={Style.FacturaInfo}>
                <h3>
                    SUBTOTAL: ${Total}
                </h3>
                <h3>
                    SHIPPING: FREE
                </h3>
                <h3>
                    COUPON: ${Value}
                </h3>
                <hr/>
                <h3>
                    TOTAL: ${Value !== 0 && Value !== "" ? (Total - Value) : Total }
                </h3>
            </div>
        </div>
    );
}

export default Summary;