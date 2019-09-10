import React from 'react'


class RegisterPage extends React.Component {

        state = {
            email: "",
            password: "",
            password2: ""
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
                <h4>РЕГИСТРАЦИЯ</h4>

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
                        <input
                            name='password2'
                            value={this.state.password2}
                            onChange={this.handleChange}
                            type='password'
                            placeholder="Повторить пароль ..." />
                    <button>РЕГИСТРАЦИЯ</button>
                </form>
            </div>
        );
    }
}


export default RegisterPage;
