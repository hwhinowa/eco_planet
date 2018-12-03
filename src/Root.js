import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, PlanetDetail } from 'pages';
import store from './store';

import App from 'components/App';

const Root = () => {
    return (
        <Router>
            <Provider store = {store}>
                {/* <App /> */}
                {/* <Route exact path='/' component={Home}/> */}
                <div>
                    {/* <Home/> */}
                    <Route exact path='/' component={Home}/>
                    <Route path='/:detail' component={PlanetDetail}/>
                </div>
            </Provider>
        </Router>
    );
};

export default Root;