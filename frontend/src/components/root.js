import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home'
import Detail from './detail'
import Login from './login'
import Register from './register'
import {connect} from 'react-redux'
import { loadUser } from "../actions/auth";




class Root extends React.Component {


    componentDidMount() {
        this.props.loadUser()
    }

    render(){
        return(
            <div>
                <Switch>
                     <Route exact path='/' component={Home} />
                     <Route path='/detail' component={Detail} />
                     <Route path='/login' component={Login} />
                     <Route path='/register' component={Register} />
                </Switch>
            </div>
        );
    }
}


export default connect(null, {loadUser})(Root);
