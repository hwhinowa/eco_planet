import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, PlanetDetail } from 'pages';

class App extends Component {
    render(){
        return(
            // <Router>
                <div>
                    {/* <Home/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/detail' component={PlanetDetail}/> */}
                </div>
            // </Router>
        )
    }
}

export default App;