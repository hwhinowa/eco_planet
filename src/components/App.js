import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from 'pages/Home';
import PlanetDetail from 'pages/PlanetDetail';

class App extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/detail' component={PlanetDetail}/>
            </Switch>
        );
    }
}

export default withRouter(App);