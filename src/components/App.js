import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { Switch, Route, withRouter } from 'react-router-dom';
import { Home, PlanetDetail } from 'pages';

class App extends Component {
    render(){
        return(
            <div>
                {/* <Home/> */}
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/detail'} component={PlanetDetail}/>
                </Switch>
            </div>
        );
    }
}

export default App;