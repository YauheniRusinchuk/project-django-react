import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register} from '../actions/auth'


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
            const {email, password, password2} = this.state;
            if(password !== password2) {
                return false
            }
            if(email && password) {
                const data = {
                    email,
                    password
                }
                this.props.register(data)
            }
        }


    render(){

        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }

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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})





export default connect(mapStateToProps, {register})(RegisterPage);
