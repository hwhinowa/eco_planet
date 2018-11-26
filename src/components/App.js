import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, PlanetDetail } from 'pages';

class App extends Component {
    render(){
        return(
            <div>
              <Home/>
                {/* <Route exact path='/' component={Home}/> */}
                {/* <Route path='/detail' component={PlanetDetail}/> */}
            </div>
        )
    }
}

export default App;