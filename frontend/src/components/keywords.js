import React from 'react'
import {Link} from 'react-router-dom'

class KeyWords extends React.Component {
    render(){
        return(
            <div className="top_keywords">
                <p className='top_title'>НАЙТИ ПО КЛЮЧЕВЫМ СЛОВАМ</p>

                <div className='words_top'>
                    <Link to="/">погрузка</Link>
                    <Link to="/">уборка</Link>
                    <Link to="/">поднять на этаж</Link>
                    <Link to="/">погрузка</Link>
                    <Link to="/">уборка</Link>
                    <Link to="/">поднять на этаж</Link>
                    <Link to="/">погрузка</Link>
                    <Link to="/">уборка</Link>
                    <Link to="/">поднять на этаж</Link>
                </div>
            </div>
        );
    }
}


export default KeyWords;
