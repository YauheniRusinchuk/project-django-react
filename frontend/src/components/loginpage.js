import React from 'react'

class LoginPage extends React.Component {
    render(){
        return(
            <div className='login_container'>
                <h4>ВОЙТИ</h4>

                <form>
                    <input type='text' placeholder="Почта ..." />
                    <input type='password' placeholder="Пароль ..." />
                    <button>ВОЙТИ</button>
                </form>
            </div>
        );
    }
}


export default LoginPage;
