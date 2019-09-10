import React from 'react'
import Header from './header'
import KeyWords from './keywords'
import RegisterPage from './registerpage'

class Register extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <RegisterPage />
                <KeyWords />
            </div>
        );
    }
}


export default Register;
