import React from 'react'
import Header from './header'
import Main from './main'
import KeyWords from './keywords'

class Home extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Main />
                <KeyWords />
            </div>
        );
    }
}

export default Home;
