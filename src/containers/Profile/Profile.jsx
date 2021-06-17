import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';


const Profile = (props) => {

    return(

        <div className="profileContainer">   

            <div className="profileInfo">
                <div>{props.user.name} </div>
                <div>{props.user.apellido} </div>
                <div>{props.user.email} </div>
            </div>
        
        </div>
    )

}

export default connect(
    (state) => ({
        user : state.credentials.user
    })
)(Profile);

