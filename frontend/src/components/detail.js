import React from 'react'
import Header from './header'
import DetailPage from './detailpage'
import KeyWords from './keywords'

class Detail extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <DetailPage />
                <KeyWords />
            </div>
        );
    }
}


export default Detail;
