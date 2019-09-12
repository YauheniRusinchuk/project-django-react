import React from 'react'
import {Link} from 'react-router-dom'

class Main extends React.Component {
    render(){
        return(
            <div className='main_container'>
                <div className='item_order'>
                    <Link to="/detail">ПОМОЩЬ В ПОГРУЗКЕ МЕБЕЛИ</Link>
                     <div className='order_keywords'>
                         <span>погрузка</span>
                         <span>помощь в поднятии</span>
                         <span>грузчик</span>
                         <span>мебель</span>
                     </div>
                    <div className='order_info'>
                        <p>Город: <span>Минск</span></p>
                        <p>Вознагрождение: <span>Договоримся</span></p>
                        <p>Контакт: <span>+375333045442</span></p>
                    </div>
                    <div className='date_create'>
                        <span>44 минуты назад</span>
                    </div>
                </div>
            </div>
        );
    }
}


export default Main;
