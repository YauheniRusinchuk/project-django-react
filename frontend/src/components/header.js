import React from 'react'
import {Link} from 'react-router-dom'


class Header extends React.Component {
    render(){
        return(
            <div className="header_container">
                <div className='header_logo'>
                    <Link to="/">НАЙДУ БАЙ</Link>
                    <form>
                        <input type='text' placeholder="Поиск ..." />
                    </form>
                </div>

                <div className='header_auth_or_add'>
                    <Link to='/register'>РЕГИСТРАЦИЯ</Link>
                    <Link to="/login">ВОЙТИ</Link>
                </div>
            </div>
        );
    }
}

export default Header;
