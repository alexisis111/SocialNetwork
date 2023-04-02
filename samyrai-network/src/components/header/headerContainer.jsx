import React from 'react';
import Header from './header';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuth } from '../../redux/reducer/authReducer';


const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuth()
    }, [])

    return (
        <Header {...props}
        />
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
    email: state.auth.email,
})



export default connect(mapStateToProps, { getAuth })(HeaderContainer);
