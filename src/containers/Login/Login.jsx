import React from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';

const Login = (props) => {

    let history = useHistory();

    const logeame = () => {

        //esto equivale a res.data que supuestamente devolveria el backend
        let data = {
            token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGJkZGYyYmQzNjAzMjQ4ZmMyZTJmNTUiLCJjcmVhdGVBdCI6IjIwMjEtMDYtMDlUMTE6Mjg6MDEuNDEyWiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyMzIzODA4MX0.Fs73g3IGJ5BCqkOnPKHDM5LRQL1-DB4eMt7bviMSHkk',
            user : {
                name: 'Jose Luis',
                apellido : 'Aparicio',
                edad : 36,
                email: 'jose@gmail.com'
            }
        }

        // guardamos los datos en redux
        props.dispatch({type:LOGIN, payload:data});

        setTimeout( () => {

            history.push("/profile")

       }, 500)

    }

    return(

        <div className="loginContainer">   

            <div className="botonLogin" onClick={() => logeame()}>LOGIN</div>

        </div>
    )

}

export default connect()(Login);