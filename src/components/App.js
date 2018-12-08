import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Switch, Route, withRouter } from 'react-router-dom';
import { Home, PlanetDetail } from 'pages';

class App extends Component {
    render(){
        console.log(process.env.PUBLIC_URL);
        return(
            <div>
                {/* <Home/> */}
                {/* <Switch> */}
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
                    <Route path={process.env.PUBLIC_URL + '/detail'} component={PlanetDetail}/>
                {/* </Switch> */}
            </div>
        );
    }
}

export default App;