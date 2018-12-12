import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Switch, Route, withRouter } from 'react-router-dom';
import { Home, PlanetDetail } from 'pages';

class App extends Component {
    render(){
        // console.log(process.env.PUBLIC_URL);
        return(
            <div>
                {/* <Route path={process.env.PUBLIC_URL + '/'} component={Home}/> */}
                <Route exact path={'/'} component={Home}/>
                <Switch>
                    <Route path={'/detail/:number'} component={PlanetDetail}/>
                    <Route path={'/detail'} component={PlanetDetail}/>
                </Switch>
            </div>
        );
    }
}

export default App;