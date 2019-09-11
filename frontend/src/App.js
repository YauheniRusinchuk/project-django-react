import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Root from './components/root'


import {Provider} from 'react-redux'
import configureStore from './store/configureStore';

const store = configureStore();


class App extends React.Component {
    render(){
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <Root />
                    </Router>
                </Provider>    
           </div>
        );
    }
}
export default App;
