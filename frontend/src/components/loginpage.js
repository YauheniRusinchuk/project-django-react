import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/auth'
import {Redirect} from 'react-router-dom'


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
        const {email, password} = this.state;
        if(email && password) {
            this.props.login(email, password)
        }
    }


    render(){
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
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


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps,{login})(LoginPage);
