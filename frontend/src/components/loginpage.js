import React from 'react'

class LoginPage extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log("THIS IS EMAIL", this.state.email)
        console.log("THIS IS PASSWORD", this.state.password)
    }


    render(){
        return(
            <div className='login_container'>
                <h4>ВОЙТИ</h4>

                <form onSubmit={this.handleSubmit}>
                    <input
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        type='text'
                        placeholder="Почта ..." />
                    <input
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        type='password'
                        placeholder="Пароль ..." />
                    <button>ВОЙТИ</button>
                </form>
            </div>
        );
    }
}


export default LoginPage;
