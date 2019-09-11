import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../actions/auth'



class Header extends React.Component {
    render(){

        const { isAuthenticated} = this.props.auth;

        const body = isAuthenticated ? (
            <div className='header_auth_or_add'>
                <Link to='/'>РАЗМЕСТИТЬ ОБЪЯВЛЕНИЕ</Link>
                <Link to='/'>МОЙ ОБЪЯВЛЕНИЕ</Link>
                <button onClick={this.props.logout} className='btn_logout'>ВЫЙТИ</button>
                </div>
            ): (

                <div className='header_auth_or_add'>
                    <Link to='/register'>РЕГИСТРАЦИЯ</Link>
                    <Link to="/login">ВОЙТИ</Link>
                </div>
            )



        return(
            <div className="header_container">
                <div className='header_logo'>
                    <Link to="/">НАЙДУ БАЙ</Link>
                    <form>
                        <input type='text' placeholder="Поиск ..." />
                    </form>
                </div>
                {body}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
})



export default connect(mapStateToProps, {logout})(Header);
