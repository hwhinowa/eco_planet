import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, PlanetDetail } from 'pages';
import store from './store';

import App from 'components/App';

const Root = () => {
    return (
        <Provider store = {store}>
            {/* <Router> */}
                {/* <App /> */}
                {/* <Route exact path='/' component={Home}/> */}
                <div>
                    <Home/>
                    {/* <Route exact path='/' component={Home}/>
                    <Route path='/detail' component={PlanetDetail}/> */}
                </div>
            {/* </Router> */}
        </Provider>
    );
};

export default Root;