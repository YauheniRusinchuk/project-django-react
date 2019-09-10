import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Root from './components/root'

class App extends React.Component {
    render(){
        return (
            <div>
               <Router>
                   <Root />
               </Router>
           </div>
        );
    }
}
export default App;
