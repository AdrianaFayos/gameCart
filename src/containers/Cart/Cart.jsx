import React from 'react';
import './Cart.css';
import juego from '../../img/juego.jpeg';
import juego2 from '../../img/juego2.jpeg';
import { connect } from 'react-redux';
import { ADD_CART, REMOVE_CART, EMPTY_CART, EDIT_CART} from '../../redux/types';

const Cart = (props) => {

    let counter = {
        nombre: 'counter strike',
        version : 1.6,
        precio : 7,
        cantidad: 1
    }
    
    let quake3 = {
        nombre: 'Quake3',
        version: 1.6,
        precio: 8,
        cantidad: 2
    }


    const modificarCarrito = (operando, item) => {

        if (item === 'counter'){

            switch(operando){
                case '+':
                    
                    const encontrado = props.cart ? props.cart.products.find(itemBusca => itemBusca.nombre === counter.nombre) : false;
                    
                    if(!encontrado){
                        
                        props.dispatch({type:ADD_CART,payload:counter});

                    }else {

                        counter.cantidad = encontrado.cantidad + 1;
                        props.dispatch({type:EDIT_CART,payload:counter});
                    }
                break;
    
    
                case '-':
                break

            }
        } else if (item === 'quake3'){

            switch(operando){
                case '+':
                    const encontrado = props.cart ? props.cart.products.find(itemBusca => itemBusca.nombre === quake3.nombre) : false;
                    
                    if(!encontrado){
                        
                        props.dispatch({type:ADD_CART,payload:quake3});

                    }else {

                        quake3.cantidad = encontrado.cantidad + 2;
                        props.dispatch({type:EDIT_CART,payload:quake3});
                    }
                break;
    
                case '-':
                break
            }
        }

    }

    const vaciarCarrito = () => {
        props.dispatch({type: EMPTY_CART})
    }

    return(

        <div className="cart">
            <div className="cartContainer">
                <div className="juego">
                    <div className="uno">
                        <div className="botonCart" onClick={() => modificarCarrito('+','counter')}>+</div>
                        <div className="producto">
                            <img src={juego} alt="juego" width="320" />
                        </div>
                        <div className="botonCart"  onClick={() => modificarCarrito('-','counter')}>-</div>
                    </div>
                    <div className="dos">
                    </div>
                </div>
                <div className="juego">
                    <div className="uno">
                        <div className="botonCart" onClick={() => modificarCarrito('+','quake3')}>+</div>
                        <div className="producto">
                            <img src={juego2} alt="juego" width="200" />
                        </div>
                        <div className="botonCart"  onClick={() => modificarCarrito('-')}>-</div>
                    </div>
                    <div className="dos">
                    </div>
                </div>
            </div>
            <div className="botonVaciar"  onClick={() => vaciarCarrito()}>VACIAR CARRITO</div>
        </div>
    )

}

export default connect((state)=>({
    cart: state.cart
}))(Cart);