import React from 'react'
import Header from './header'
import KeyWords from './keywords'
import LoginPage from './loginpage'


class Login extends React.Component {

    render(){
        return(
            <div>
                <Header />
                    <LoginPage />
                <KeyWords />
            </div>
        );
    }
}


export default Login
