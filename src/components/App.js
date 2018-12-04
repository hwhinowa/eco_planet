import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Home, PlanetDetail } from 'pages';

class App extends Component {
    render(){
        return(
            <Router>
                <div>
                    {/* <Home/> */}
                    <Route exact path='/' component={Home}/>
                    <Route path='/detail' component={PlanetDetail}/>
                </div>
            </Router>
        )
    }
}

export default App;