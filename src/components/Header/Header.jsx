import React  from 'react';
import './Header.css';
import { useHistory } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';
import carrito from '../../img/carrito.png'



const Header = (props) => {

    let history = useHistory();

    const takeMe = (where) => {
        history.push(where)
    }


    const logOut = () => {

        props.dispatch({type:LOGOUT});

        setTimeout( () => {

            history.push("/login")

        }, 500)

    }

    const calculaCarrito = () => {

        let total = 0 ;

        props?.totalCart.products.map((product) => {
            total += product.cantidad;
        })
       
        return total;
        
    }

    if(props.credentials?.token){

        return(
        <div className="headerContainer">  
                <div className="carrito">
                     <div onClick={() => takeMe('/cart')}><img src={carrito} alt="carrito" width="30"/></div>
                     <div className="tap">{calculaCarrito()}</div>
                </div>
                <div className="links">
                <div className="tap" onClick={() => takeMe('/profile')}>{props.credentials?.user.name}</div>
                <span>|</span>
                <div className="tap" onClick={() => logOut()}>LOGOUT</div>
            </div>    
        </div>
    )
    } else {

        return(
    
            <div className="headerContainer">   
                <div className="links">
                    <div className="tap" onClick={() => takeMe('/login')}>Login</div>
                    <span>|</span>
                    <div className="tap" onClick={() => takeMe('/register')}>Register</div>
                </div>
            </div>
        )
    }

}

export default connect((state) => ({

    credentials:state.credentials,
    totalCart : state.cart

    }))(Header);